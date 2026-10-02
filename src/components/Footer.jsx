import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-16">
      <div className="container-px py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <Link to="/" className="font-display font-extrabold text-xl text-white">
            Shop<span className="text-amber">Nest</span>
          </Link>
          <p className="mt-3 text-white/50 max-w-xs">
            A modern marketplace demo built for learning -- electronics, fashion, home, beauty and more, all in one place.
          </p>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
              <span key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer">
                <Icon size={15} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Shop</h4>
          <ul className="space-y-2 text-white/50">
            <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
            <li><Link to="/shop?category=electronics" className="hover:text-white">Electronics</Link></li>
            <li><Link to="/shop?category=fashion" className="hover:text-white">Fashion</Link></li>
            <li><Link to="/shop?category=home" className="hover:text-white">Home & Living</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Account</h4>
          <ul className="space-y-2 text-white/50">
            <li><Link to="/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/orders" className="hover:text-white">Order Tracking</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Help</h4>
          <ul className="space-y-2 text-white/50">
            <li>Shipping Info</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} ShopNest. Built as a student project -- not a real store.
      </div>
    </footer>
  )
}
