import { useLocation, Link, Navigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function OrderSuccess() {
  const { state } = useLocation()
  const order = state?.order

  if (!order) return <Navigate to="/" replace />

  return (
    <div className="container-px py-20 max-w-lg mx-auto text-center">
      <CheckCircle2 size={52} className="mx-auto text-emerald-600" />
      <h1 className="text-2xl font-bold mt-4">Order Placed Successfully</h1>
      <p className="text-ink/60 text-sm mt-2">Thank you, {order.customer.fullName.split(' ')[0]}! Your order is on its way.</p>

      <div className="bg-white border border-ink/10 rounded-2xl p-5 mt-6 text-left text-sm">
        <div className="flex justify-between mb-2"><span className="text-ink/50">Order ID</span><span className="font-medium">{order.id}</span></div>
        <div className="flex justify-between mb-2"><span className="text-ink/50">Payment</span><span className="font-medium">{order.payment}</span></div>
        <div className="flex justify-between"><span className="text-ink/50">Total</span><span className="font-semibold">₹{order.total.toLocaleString('en-IN')}</span></div>
      </div>

      <div className="flex gap-3 mt-6 justify-center">
        <Link to="/orders" className="btn-primary">Track Order</Link>
        <Link to="/shop" className="btn-outline">Continue Shopping</Link>
      </div>
    </div>
  )
}
