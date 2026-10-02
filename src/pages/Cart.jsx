import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, updateQty, removeFromCart, subtotal } = useCart()
  const navigate = useNavigate()

  const delivery = subtotal > 999 || subtotal === 0 ? 0 : 79
  const discount = Math.round(subtotal * 0.0)
  const total = subtotal + delivery - discount

  if (!items.length) {
    return (
      <div className="container-px py-24 text-center">
        <ShoppingBag size={40} className="mx-auto text-ink/20" />
        <p className="text-lg font-medium mt-4">Your cart is empty</p>
        <p className="text-sm text-ink/50 mt-1">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn-primary inline-block mt-5">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-px py-8">
      <h1 className="text-xl font-bold mb-6">Shopping Cart ({items.length})</h1>
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.key} className="flex gap-4 bg-white border border-ink/10 rounded-2xl p-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                {(item.color || item.size) && (
                  <p className="text-xs text-ink/50 mt-1">{[item.color, item.size].filter(Boolean).join(' / ')}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-ink/15 rounded-full">
                    <button onClick={() => updateQty(item.key, item.qty - 1)} className="w-8 h-8 flex items-center justify-center"><Minus size={12} /></button>
                    <span className="w-7 text-center text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.key, item.qty + 1)} className="w-8 h-8 flex items-center justify-center"><Plus size={12} /></button>
                  </div>
                  <span className="font-semibold text-sm">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.key)} className="text-ink/30 hover:text-red-500 self-start" aria-label="Remove">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
          <Link to="/shop" className="text-indigo text-sm font-medium hover:underline inline-block">← Continue Shopping</Link>
        </div>

        <div className="bg-white border border-ink/10 rounded-2xl p-5 h-fit">
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-ink/60"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between text-ink/60"><span>Delivery</span><span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span></div>
            <div className="border-t border-ink/10 my-2" />
            <div className="flex justify-between font-semibold text-base"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          </div>
          <button onClick={() => navigate('/checkout')} className="btn-primary w-full mt-5">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}
