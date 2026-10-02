import { useMemo } from 'react'
import Hero from '../components/Hero.jsx'
import CategoryMenu from '../components/CategoryMenu.jsx'
import ProductSection from '../components/ProductSection.jsx'
import { products, categories } from '../data/products.js'
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react'

export default function Home() {
  const featured = useMemo(() => products.slice(0, 5), [])
  const trending = useMemo(() => products.filter((p) => p.tags.includes('trending')), [])
  const bestSellers = useMemo(() => products.filter((p) => p.tags.includes('bestseller')), [])
  const newArrivals = useMemo(() => products.filter((p) => p.tags.includes('new')), [])

  return (
    <div>
      <Hero />
      <CategoryMenu categories={categories} />
      <ProductSection title="Featured Products" products={featured} viewAllHref="/shop" />
      <ProductSection title="Trending Now" subtitle="What everyone's adding to cart this week" products={trending} viewAllHref="/shop" />

      <section className="container-px py-4">
        <div className="rounded-3xl bg-amber/15 border border-amber/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold">Flash Deals -- up to 40% off</h3>
            <p className="text-ink/60 text-sm mt-1">Handpicked discounts, refreshed every week.</p>
          </div>
          <a href="/shop" className="btn-primary">Shop the sale</a>
        </div>
      </section>

      <ProductSection title="Best Sellers" products={bestSellers} viewAllHref="/shop" />
      <ProductSection title="New Arrivals" products={newArrivals} viewAllHref="/shop" />

      <section className="container-px py-10">
        <h2 className="text-xl font-bold mb-5">Why Shop With Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [Truck, 'Free Delivery', 'On all orders over ₹999'],
            [RotateCcw, 'Easy Returns', '7-day no-questions return window'],
            [ShieldCheck, 'Secure Checkout', 'Your details stay protected'],
            [Headphones, '24/7 Support', "We're here whenever you need us"],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="bg-white border border-ink/10 rounded-2xl p-5">
              <Icon className="text-indigo mb-3" size={22} />
              <h4 className="font-medium text-sm">{title}</h4>
              <p className="text-xs text-ink/50 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-10">
        <h2 className="text-xl font-bold mb-5">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Ananya R.', 'Delivery was quick and the packaging was excellent. Will shop here again.'],
            ['Rohit K.', 'Great range of products across categories -- found everything in one place.'],
            ['Priya S.', 'The size guide and product photos matched exactly what arrived.'],
          ].map(([name, quote]) => (
            <div key={name} className="bg-white border border-ink/10 rounded-2xl p-5">
              <p className="text-sm text-ink/70">"{quote}"</p>
              <p className="text-xs font-medium mt-3">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px pb-14">
        <div className="rounded-3xl bg-ink text-white p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl font-bold">Get 10% off your first order</h3>
          <p className="text-white/60 text-sm mt-2 mb-5">Sign up for restock alerts, deals and new arrivals.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex max-w-sm mx-auto gap-2">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full px-4 py-2.5 text-sm text-ink outline-none"
            />
            <button className="btn-primary shrink-0">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
