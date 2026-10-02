import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'

export default function ProductSection({ title, subtitle, products, viewAllHref }) {
  if (!products.length) return null
  return (
    <section className="container-px py-8">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-ink/50 mt-0.5">{subtitle}</p>}
        </div>
        {viewAllHref && (
          <Link to={viewAllHref} className="text-sm font-medium text-indigo hover:underline shrink-0">
            View all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
