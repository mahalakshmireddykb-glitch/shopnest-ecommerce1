import { Link } from 'react-router-dom'
import { Heart, Trash2 } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { getProductById } from '../data/products.js'

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (!items.length) {
    return (
      <div className="container-px py-24 text-center">
        <Heart size={40} className="mx-auto text-ink/20" />
        <p className="text-lg font-medium mt-4">Your wishlist is empty</p>
        <p className="text-sm text-ink/50 mt-1">Save items you love so you can find them later.</p>
        <Link to="/shop" className="btn-primary inline-block mt-5">Explore Products</Link>
      </div>
    )
  }

  return (
    <div className="container-px py-8">
      <h1 className="text-xl font-bold mb-6">My Wishlist ({items.length})</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-ink/10 rounded-2xl overflow-hidden">
            <Link to={`/product/${item.id}`} className="block aspect-square bg-surface">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </Link>
            <div className="p-3.5">
              <Link to={`/product/${item.id}`} className="text-sm font-medium line-clamp-2 hover:text-indigo">{item.name}</Link>
              <p className="font-semibold text-sm mt-1.5">₹{item.price.toLocaleString('en-IN')}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => { addToCart(getProductById(item.id), 1); removeFromWishlist(item.id) }}
                  className="flex-1 text-xs font-medium bg-indigo-light text-indigo rounded-full py-2 hover:bg-indigo hover:text-white transition-colors"
                >
                  Move to Cart
                </button>
                <button onClick={() => removeFromWishlist(item.id)} className="w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center text-ink/40 hover:text-red-500">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
