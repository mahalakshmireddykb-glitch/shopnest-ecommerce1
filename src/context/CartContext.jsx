import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from './ToastContext.jsx'

const CartContext = createContext(null)
const STORAGE_KEY = 'shopnest_cart'

export function CartProvider({ children }) {
  const { showToast } = useToast()
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, qty = 1, variant = {}) => {
    setItems((prev) => {
      const key = `${product.id}-${variant.color || ''}-${variant.size || ''}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { key, id: product.id, name: product.name, price: product.price, image: product.image, qty, ...variant }]
    })
    showToast(`${product.name} added to cart`)
  }

  const removeFromCart = (key) => setItems((prev) => prev.filter((i) => i.key !== key))

  const updateQty = (key, qty) => {
    if (qty < 1) return
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty } : i)))
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, subtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
