import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-px py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-indigo">404</p>
      <p className="text-lg font-medium mt-3">This page took a wrong turn</p>
      <p className="text-sm text-ink/50 mt-1">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary inline-block mt-5">Back to Home</Link>
    </div>
  )
}
