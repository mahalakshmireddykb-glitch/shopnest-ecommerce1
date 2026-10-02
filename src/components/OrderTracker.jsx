import { CheckCircle2, Circle } from 'lucide-react'

const STAGES = ['Ordered', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered']

export default function OrderTracker({ status }) {
  const currentIndex = STAGES.indexOf(status)

  return (
    <div className="flex items-center w-full overflow-x-auto py-2">
      {STAGES.map((stage, i) => (
        <div key={stage} className="flex items-center flex-1 min-w-[90px]">
          <div className="flex flex-col items-center gap-1.5 text-center">
            {i <= currentIndex ? (
              <CheckCircle2 size={20} className="text-emerald-600" />
            ) : (
              <Circle size={20} className="text-ink/20" />
            )}
            <span className={`text-[11px] ${i <= currentIndex ? 'text-ink font-medium' : 'text-ink/40'}`}>{stage}</span>
          </div>
          {i < STAGES.length - 1 && (
            <div className={`h-0.5 flex-1 mx-1 ${i < currentIndex ? 'bg-emerald-600' : 'bg-ink/10'}`} />
          )}
        </div>
      ))}
    </div>
  )
}
