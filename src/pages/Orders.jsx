import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Package } from 'lucide-react'
import OrderTracker from '../components/OrderTracker.jsx'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('shopnest_orders') || '[]'))
  }, [])

  if (!orders.length) {
    return (
      <div className="container-px py-24 text-center">
        <Package size={40} className="mx-auto text-ink/20" />
        <p className="text-lg font-medium mt-4">No orders yet</p>
        <p className="text-sm text-ink/50 mt-1">Your placed orders will show up here.</p>
        <Link to="/shop" className="btn-primary inline-block mt-5">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-px py-8">
      <h1 className="text-xl font-bold mb-6">My Orders</h1>
      <div className="space-y-5">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-ink/10 rounded-2xl p-5">
            <div className="flex flex-wrap justify-between gap-2 mb-4 text-sm">
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-ink/50 text-xs">{new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} &middot; {order.payment}</p>
              </div>
              <p className="font-semibold">₹{order.total.toLocaleString('en-IN')}</p>
            </div>
            <OrderTracker status={order.status} />
            <div className="border-t border-ink/10 mt-4 pt-4 flex gap-3 overflow-x-auto">
              {order.items.map((item) => (
                <img key={item.key} src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
