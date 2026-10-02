import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

const SORT_OPTIONS = [
  { id: 'relevance', label: 'Relevance' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Rating' },
  { id: 'newest', label: 'Newest' },
]

export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('search') || ''
  const categoryFilter = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(categoryFilter ? [categoryFilter] : [])
  const [maxPrice, setMaxPrice] = useState(60000)
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState('relevance')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCategories(categoryFilter ? [categoryFilter] : [])
  }, [categoryFilter])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesSearch = searchTerm
        ? p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
        : true
      const matchesCategory = selectedCategories.length ? selectedCategories.includes(p.category) : true
      const matchesPrice = p.price <= maxPrice
      const matchesRating = p.rating >= minRating
      return matchesSearch && matchesCategory && matchesPrice && matchesRating
    })

    switch (sort) {
      case 'price-asc': list = [...list].sort((a, b) => a.price - b.price); break
      case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break
      case 'rating': list = [...list].sort((a, b) => b.rating - a.rating); break
      case 'newest': list = [...list].sort((a, b) => b.id - a.id); break
      default: break
    }
    return list
  }, [searchTerm, selectedCategories, maxPrice, minRating, sort])

  const FilterPanel = (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium text-sm mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c.id} className="flex items-center gap-2 text-sm text-ink/70">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c.id)}
                onChange={() => toggleCategory(c.id)}
                className="accent-indigo"
              />
              {c.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium text-sm mb-3">Max Price: ₹{maxPrice.toLocaleString('en-IN')}</h4>
        <input
          type="range"
          min={300}
          max={60000}
          step={500}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-indigo"
        />
      </div>
      <div>
        <h4 className="font-medium text-sm mb-3">Minimum Rating</h4>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={`text-xs px-3 py-1.5 rounded-full border ${minRating === r ? 'bg-indigo text-white border-indigo' : 'border-ink/15 text-ink/60'}`}
            >
              {r === 0 ? 'Any' : `${r}+`}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => { setSelectedCategories([]); setMaxPrice(60000); setMinRating(0); setSearchParams({}) }}
        className="text-xs text-indigo font-medium hover:underline"
      >
        Clear all filters
      </button>
    </div>
  )

  return (
    <div className="container-px py-8">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold">
            {searchTerm ? `Results for "${searchTerm}"` : 'All Products'}
          </h1>
          <p className="text-sm text-ink/50 mt-0.5">{filtered.length} products found</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setFiltersOpen(true)} className="lg:hidden btn-outline flex items-center gap-1.5 text-xs py-2">
            <SlidersHorizontal size={14} /> Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-ink/15 rounded-full text-sm px-3 py-2 outline-none bg-white"
          >
            {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-8">
        <aside className="hidden lg:block">{FilterPanel}</aside>

        {filtersOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setFiltersOpen(false)}>
            <div className="bg-white h-full w-[80%] max-w-xs p-5 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}><X size={18} /></button>
              </div>
              {FilterPanel}
            </div>
          </div>
        )}

        {filtered.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm text-ink/50 mt-1">Try a different search term or clear your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
