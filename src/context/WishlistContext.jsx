import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from './ToastContext.jsx'

const WishlistContext = createContext(null)
const STORAGE_KEY = 'shopnest_wishlist'

export function WishlistProvider({ children }) {
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

  const isWishlisted = (id) => items.some((i) => i.id === id)

  const toggleWishlist = (product) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === product.id)) {
        showToast(`Removed from wishlist`)
        return prev.filter((i) => i.id !== product.id)
      }
      showToast(`Added to wishlist`)
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image }]
    })
  }

  const removeFromWishlist = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <WishlistContext.Provider value={{ items, isWishlisted, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
