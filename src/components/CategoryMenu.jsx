import { Link } from 'react-router-dom'
import { Smartphone, Shirt, Sparkles, Sofa, ShoppingBasket, Dumbbell, BookOpen, Baby } from 'lucide-react'

const icons = {
  electronics: Smartphone,
  fashion: Shirt,
  beauty: Sparkles,
  home: Sofa,
  grocery: ShoppingBasket,
  sports: Dumbbell,
  books: BookOpen,
  toys: Baby,
}

export default function CategoryMenu({ categories }) {
  return (
    <section className="container-px py-10">
      <h2 className="text-xl font-bold mb-5">Shop by Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((c) => {
          const Icon = icons[c.id]
          return (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="flex flex-col items-center gap-2 group"
            >
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-indigo-light text-indigo flex items-center justify-center group-hover:bg-indigo group-hover:text-white transition-colors">
                <Icon size={24} />
              </span>
              <span className="text-xs text-center text-ink/70 leading-tight">{c.name}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
