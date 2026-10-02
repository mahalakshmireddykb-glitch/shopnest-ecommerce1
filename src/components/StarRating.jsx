import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, size = 14 }) {
  return (
    <div className="flex items-center gap-1 text-xs text-ink/60">
      <div className="flex items-center gap-0.5 bg-emerald-600 text-white rounded px-1.5 py-0.5">
        <span className="font-semibold">{rating.toFixed(1)}</span>
        <Star size={size - 3} fill="white" strokeWidth={0} />
      </div>
      {reviews != null && <span>({reviews.toLocaleString('en-IN')})</span>}
    </div>
  )
}
