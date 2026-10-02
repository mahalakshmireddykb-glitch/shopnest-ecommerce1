import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { categories } from '../data/products.js'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(query.trim() ? `/shop?search=${encodeURIComponent(query.trim())}` : '/shop')
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-ink/10">
      <div className="bg-ink text-white text-xs text-center py-1.5 px-4">
        Free delivery on orders over ₹999 &middot; Use code <strong>WELCOME10</strong> for 10% off
      </div>

      <div className="container-px py-3 flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="font-display font-extrabold text-xl tracking-tight shrink-0">
          Shop<span className="text-indigo">Nest</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-surface rounded-full pl-4 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30"
          />
          <button type="submit" className="absolute right-1 top-1 bottom-1 w-9 flex items-center justify-center text-ink/50 hover:text-indigo">
            <Search size={17} />
          </button>
        </form>

        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          <Link to={user ? '/account' : '/login'} className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-surface text-sm font-medium">
            <User size={19} />
            {user ? user.name.split(' ')[0] : 'Login'}
          </Link>
          <Link to="/wishlist" className="relative p-2.5 rounded-full hover:bg-surface" aria-label="Wishlist">
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-amber text-[10px] font-bold text-ink w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative p-2.5 rounded-full hover:bg-surface" aria-label="Cart">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-indigo text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      <form onSubmit={handleSearch} className="md:hidden container-px pb-3 relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search products"
          className="w-full bg-surface rounded-full pl-4 pr-10 py-2.5 text-sm outline-none"
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
          <Search size={17} />
        </button>
      </form>

      <nav className="hidden lg:flex container-px gap-6 border-t border-ink/10 py-2.5 text-sm">
        {categories.map((c) => (
          <Link key={c.id} to={`/shop?category=${c.id}`} className="text-ink/70 hover:text-indigo font-medium whitespace-nowrap">
            {c.name}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <nav className="lg:hidden border-t border-ink/10 px-4 py-3 flex flex-col gap-3 text-sm">
          <Link to={user ? '/account' : '/login'} onClick={() => setMenuOpen(false)} className="font-medium">
            {user ? `Hi, ${user.name.split(' ')[0]}` : 'Login / Register'}
          </Link>
          {categories.map((c) => (
            <Link key={c.id} to={`/shop?category=${c.id}`} onClick={() => setMenuOpen(false)} className="text-ink/70">
              {c.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
