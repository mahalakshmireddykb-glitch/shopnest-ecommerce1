import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import StarRating from './StarRating.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const outOfStock = product.stock === 0
  const wishlisted = isWishlisted(product.id)

  return (
    <div className="group relative bg-white rounded-2xl border border-ink/10 hover:shadow-card transition-shadow overflow-hidden flex flex-col">
      <button
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
      >
        <Heart size={16} className={wishlisted ? 'fill-red-500 text-red-500' : 'text-ink/50'} />
      </button>

      {product.tags?.[0] && (
        <span className="absolute top-3 left-3 z-10 text-[11px] font-medium bg-amber text-ink rounded-full px-2 py-0.5 capitalize">
          {product.tags[0]}
        </span>
      )}

      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-3.5 flex flex-col gap-1.5 flex-1">
        <span className="text-[11px] text-ink/45">{product.brand}</span>
        <Link to={`/product/${product.id}`} className="font-medium text-sm leading-snug line-clamp-2 hover:text-indigo">
          {product.name}
        </Link>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-ink/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="text-xs text-emerald-600 font-medium">{product.discount}% off</span>
        </div>
        {product.stock > 0 && product.stock <= 5 && (
          <span className="text-[11px] text-amber-dark font-medium">Only {product.stock} left</span>
        )}
        <button
          onClick={() => !outOfStock && addToCart(product)}
          disabled={outOfStock}
          className="mt-auto pt-2 flex items-center justify-center gap-1.5 text-sm font-medium rounded-full py-2 bg-indigo-light text-indigo hover:bg-indigo hover:text-white transition-colors disabled:bg-ink/5 disabled:text-ink/30"
        >
          <ShoppingCart size={15} />
          {outOfStock ? 'Out of stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
