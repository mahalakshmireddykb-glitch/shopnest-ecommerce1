import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container-px pt-6">
      <div className="relative overflow-hidden rounded-3xl bg-indigo text-white grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-14 relative z-10">
          <span className="inline-block text-xs font-medium bg-white/15 rounded-full px-3 py-1 mb-4">
            New season, new arrivals
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-[1.1]">
            Everything you need,
            <br />
            nothing you don't.
          </h1>
          <p className="mt-4 text-white/70 max-w-sm">
            Shop electronics, fashion, home essentials and more -- curated in one place, delivered to your door.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 bg-amber text-ink font-medium rounded-full px-6 py-3 hover:bg-amber-dark transition-colors"
          >
            Start Shopping <ArrowRight size={16} />
          </Link>
        </div>
        <img
          src="https://picsum.photos/seed/shopnesthero/900/700"
          alt="Featured collection"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
    </section>
  )
}
