import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const PAYMENT_METHODS = [
  { id: 'cod', label: 'Cash on Delivery' },
  { id: 'upi', label: 'UPI' },
  { id: 'card', label: 'Credit / Debit Card' },
  { id: 'netbanking', label: 'Net Banking' },
]

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: user?.name || '', email: user?.email || '', phone: '',
    address: '', city: '', state: '', pincode: '',
  })
  const [payment, setPayment] = useState('cod')

  if (!items.length) return <Navigate to="/cart" replace />

  const delivery = subtotal > 999 ? 0 : 79
  const total = subtotal + delivery

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const placeOrder = (e) => {
    e.preventDefault()
    const order = {
      id: `SN${Date.now().toString().slice(-8)}`,
      date: new Date().toISOString(),
      items,
      total,
      payment: PAYMENT_METHODS.find((p) => p.id === payment).label,
      status: 'Ordered',
      customer: form,
    }
    const existing = JSON.parse(localStorage.getItem('shopnest_orders') || '[]')
    localStorage.setItem('shopnest_orders', JSON.stringify([order, ...existing]))
    clearCart()
    navigate('/order-success', { state: { order } })
  }

  return (
    <div className="container-px py-8">
      <h1 className="text-xl font-bold mb-6">Checkout</h1>
      <form onSubmit={placeOrder} className="grid lg:grid-cols-[1fr_340px] gap-8">
        <div className="space-y-6">
          <div className="bg-white border border-ink/10 rounded-2xl p-5">
            <h3 className="font-medium mb-4">Customer Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Full Name" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="phone" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="pincode" required value={form.pincode} onChange={handleChange} placeholder="Pincode" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="address" required value={form.address} onChange={handleChange} placeholder="Address" className="sm:col-span-2 border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="city" required value={form.city} onChange={handleChange} placeholder="City" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
              <input name="state" required value={form.state} onChange={handleChange} placeholder="State" className="border border-ink/15 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo/30" />
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-2xl p-5">
            <h3 className="font-medium mb-4">Payment Method</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((m) => (
                <label key={m.id} className={`flex items-center gap-2 border rounded-xl px-4 py-3 text-sm cursor-pointer ${payment === m.id ? 'border-indigo bg-indigo-light' : 'border-ink/15'}`}>
                  <input type="radio" name="payment" checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-indigo" />
                  {m.label}
                </label>
              ))}
            </div>
            <p className="text-xs text-ink/40 mt-3">This is a student project -- no real payment is processed.</p>
          </div>
        </div>

        <div className="bg-white border border-ink/10 rounded-2xl p-5 h-fit">
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1 mb-3">
            {items.map((item) => (
              <div key={item.key} className="flex justify-between text-xs text-ink/60">
                <span className="line-clamp-1">{item.name} × {item.qty}</span>
                <span className="shrink-0 ml-2">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/10 pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-ink/60"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between text-ink/60"><span>Delivery</span><span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span></div>
            <div className="flex justify-between font-semibold text-base pt-1"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          </div>
          <button type="submit" className="btn-primary w-full mt-5">Place Order</button>
        </div>
      </form>
    </div>
  )
}
