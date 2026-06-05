'use server'

import { prisma } from '@/lib/db'
import { deletePortfolioImage } from '@/lib/storage'
import { revalidatePath } from 'next/cache'

export async function validateMagicLink(token: string) {
  const magicLink = await prisma.vendorMagicLink.findUnique({
    where: { token },
    include: { vendor: { include: { portfolioImages: { orderBy: { createdAt: 'desc' } } } } },
  })

  if (!magicLink) return { valid: false, error: 'Invalid link' }
  if (magicLink.expiresAt < new Date()) return { valid: false, error: 'This link has expired. Please contact FRAOGO for a new one.' }
  if (magicLink.vendor.status !== 'active') return { valid: false, error: 'Your vendor account is not active.' }

  return { valid: true, vendor: magicLink.vendor }
}

export async function addVendorImage(vendorId: string, url: string, fileName?: string) {
  // Check total image limit (50)
  const count = await prisma.vendorImage.count({ where: { vendorId } })
  if (count >= 50) {
    return { success: false, error: 'Maximum 50 images allowed per vendor' }
  }

  try {
    const image = await prisma.vendorImage.create({
      data: { vendorId, url, fileName: fileName ?? null },
    })
    revalidatePath('/vendor/dashboard')
    return { success: true, image }
  } catch (error) {
    console.error('[VendorPortfolio] Add image error:', error)
    return { success: false, error: 'Failed to save image' }
  }
}

export async function deleteVendorImageAction(imageId: string, vendorId: string, storagePath: string) {
  try {
    // Verify ownership
    const image = await prisma.vendorImage.findFirst({
      where: { id: imageId, vendorId },
    })
    if (!image) return { success: false, error: 'Image not found' }

    // Delete from storage
    await deletePortfolioImage(storagePath)

    // Delete from DB
    await prisma.vendorImage.delete({ where: { id: imageId } })

    revalidatePath('/vendor/dashboard')
    return { success: true }
  } catch (error) {
    console.error('[VendorPortfolio] Delete error:', error)
    return { success: false, error: 'Failed to delete image' }
  }
}
