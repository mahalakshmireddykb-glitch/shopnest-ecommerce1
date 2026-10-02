import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Account() {
  const { user, logout } = useAuth()
  const [orderCount, setOrderCount] = useState(0)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('shopnest_orders') || '[]')
    setOrderCount(orders.length)
  }, [])

  if (!user) return <Navigate to="/login" replace />

  const links = [
    { icon: Package, label: 'My Orders', desc: `${orderCount} order${orderCount === 1 ? '' : 's'}`, to: '/orders' },
    { icon: Heart, label: 'Wishlist', desc: 'Saved items', to: '/wishlist' },
    { icon: MapPin, label: 'Saved Addresses', desc: 'Added at checkout', to: '/orders' },
    { icon: Settings, label: 'Account Settings', desc: 'Manage your profile', to: '/account' },
  ]

  return (
    <div className="container-px py-10 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-indigo-light text-indigo flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-ink/50">{user.email}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((l) => (
          <Link key={l.label} to={l.to} className="bg-white border border-ink/10 rounded-2xl p-5 flex items-center gap-3 hover:border-indigo/40">
            <l.icon size={20} className="text-indigo shrink-0" />
            <div>
              <p className="font-medium text-sm">{l.label}</p>
              <p className="text-xs text-ink/50">{l.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <button onClick={logout} className="mt-6 flex items-center gap-2 text-sm text-red-500 font-medium hover:underline">
        <LogOut size={16} /> Log Out
      </button>
    </div>
  )
}
