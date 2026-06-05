'use server'

import { createAdminSession, destroyAdminSession, getAdminCredentials } from '@/lib/auth'
import { compare } from 'bcryptjs'
import { redirect } from 'next/navigation'

export async function adminLogin(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const { email: adminEmail, passwordHash } = getAdminCredentials()

  if (email !== adminEmail) {
    return { error: 'Invalid credentials' }
  }

  const isValid = await compare(password, passwordHash)
  if (!isValid) {
    return { error: 'Invalid credentials' }
  }

  await createAdminSession(email)
  redirect('/admin')
}

export async function adminLogout() {
  await destroyAdminSession()
  redirect('/admin/login')
}
