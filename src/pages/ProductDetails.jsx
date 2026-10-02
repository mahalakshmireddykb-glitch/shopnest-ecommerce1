import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Truck, RotateCcw, Minus, Plus } from 'lucide-react'
import StarRating from '../components/StarRating.jsx'
import ProductSection from '../components/ProductSection.jsx'
import { getProductById, products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(product?.colors?.[0] || null)
  const [size, setSize] = useState(product?.sizes?.[0] || null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImage(0)
    setQty(1)
    setColor(product?.colors?.[0] || null)
    setSize(product?.sizes?.[0] || null)
  }, [id])

  if (!product) {
    return (
      <div className="container-px py-20 text-center">
        <p className="text-lg font-medium">Product not found</p>
        <Link to="/shop" className="text-indigo text-sm hover:underline mt-2 inline-block">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 5)
  const outOfStock = product.stock === 0

  return (
    <div className="container-px py-8">
      <div className="text-xs text-ink/45 mb-5">
        <Link to="/shop">Shop</Link> / <Link to={`/shop?category=${product.category}`} className="capitalize">{product.category}</Link> / <span className="text-ink/70">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-ink/10">
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 mt-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 ${activeImage === i ? 'border-indigo' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs text-ink/45">{product.brand}</span>
          <h1 className="text-2xl font-bold font-display mt-1">{product.name}</h1>
          <div className="mt-2"><StarRating rating={product.rating} reviews={product.reviews} /></div>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-ink/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span className="text-emerald-600 font-medium text-sm">{product.discount}% off</span>
          </div>

          <p className="text-sm text-ink/60 mt-4 leading-relaxed">{product.description}</p>

          {product.colors && (
            <div className="mt-5">
              <h4 className="text-sm font-medium mb-2">Color: <span className="text-ink/50 font-normal">{color}</span></h4>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`text-xs px-3 py-1.5 rounded-full border ${color === c ? 'border-indigo bg-indigo-light text-indigo' : 'border-ink/15 text-ink/60'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Size: <span className="text-ink/50 font-normal">{size}</span></h4>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`text-xs w-10 h-9 rounded-lg border ${size === s ? 'border-indigo bg-indigo-light text-indigo' : 'border-ink/15 text-ink/60'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center border border-ink/15 rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 flex items-center justify-center"><Minus size={14} /></button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(product.stock || 1, q + 1))} className="w-9 h-9 flex items-center justify-center"><Plus size={14} /></button>
            </div>
            <span className="text-xs text-ink/50">
              {outOfStock ? 'Out of stock' : `${product.stock} in stock`}
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              disabled={outOfStock}
              onClick={() => addToCart(product, qty, { color, size })}
              className="btn-primary flex-1 disabled:bg-ink/20"
            >
              Add to Cart
            </button>
            <button
              disabled={outOfStock}
              onClick={() => { addToCart(product, qty, { color, size }); navigate('/checkout') }}
              className="btn-outline flex-1 disabled:opacity-40"
            >
              Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className="w-11 h-11 shrink-0 rounded-full border border-ink/15 flex items-center justify-center"
              aria-label="Wishlist"
            >
              <Heart size={18} className={isWishlisted(product.id) ? 'fill-red-500 text-red-500' : ''} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-2 text-xs text-ink/60 bg-surface rounded-xl p-3">
              <Truck size={16} className="text-indigo shrink-0" /> Free delivery on orders over ₹999
            </div>
            <div className="flex items-center gap-2 text-xs text-ink/60 bg-surface rounded-xl p-3">
              <RotateCcw size={16} className="text-indigo shrink-0" /> 7-day easy returns
            </div>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <h4 className="font-medium text-sm mb-3">Specifications</h4>
            <dl className="text-sm space-y-2">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-ink/5 pb-2">
                  <dt className="text-ink/50">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <ProductSection title="Related Products" products={related} />
    </div>
  )
}
