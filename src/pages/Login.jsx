import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(email, password)
    if (result.ok) {
      showToast('Welcome back!')
      navigate('/account')
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="container-px py-16 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Welcome back</h1>
      <p className="text-sm text-ink/50 text-center mt-1">Log in to view your orders and wishlist</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {error && <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Password</label>
            <span className="text-xs text-indigo cursor-pointer hover:underline">Forgot password?</span>
          </div>
          <input
            type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="btn-primary w-full">Log In</button>
      </form>

      <p className="text-sm text-center text-ink/60 mt-6">
        New here? <Link to="/register" className="text-indigo font-medium hover:underline">Create an account</Link>
      </p>
    </div>
  )
}
