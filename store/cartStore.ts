import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface OrderItem {
  id: string
  name: string
  specification: string
  quantity: number
  deliveryMode: 'pickup' | 'dispatch'
  deliveryAddress?: string
}

export interface CustomerInfo {
  fullName: string
  email: string
  phone: string
}

interface CartStore {
  orderType: 'nigeria' | 'international' | null
  customerInfo: CustomerInfo | null
  items: OrderItem[]
  // Actions
  setOrderType: (type: 'nigeria' | 'international') => void
  setCustomerInfo: (info: CustomerInfo) => void
  addItem: (item: Omit<OrderItem, 'id'>) => void
  updateItem: (id: string, updates: Partial<Omit<OrderItem, 'id'>>) => void
  removeItem: (id: string) => void
  clearCart: () => void
  setItems: (items: OrderItem[]) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      orderType: null,
      customerInfo: null,
      items: [],

      setOrderType: (type) => set({ orderType: type }),

      setCustomerInfo: (info) => set({ customerInfo: info }),

      addItem: (item) =>
        set((state) => ({
          items: [
            ...state.items,
            { ...item, id: `item_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` },
          ],
        })),

      updateItem: (id, updates) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updates } : item
          ),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearCart: () =>
        set({ orderType: null, customerInfo: null, items: [] }),

      setItems: (items) => set({ items }),
    }),
    {
      name: 'fraogo-cart',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
