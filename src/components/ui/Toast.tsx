import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Info, XCircle } from 'lucide-react'
import { useToast } from '@hooks/useToast'

const icons = {
  success: <CheckCircle2 size={18} className="text-[var(--color-success)]" />,
  error: <XCircle size={18} className="text-[var(--color-danger)]" />,
  info: <Info size={18} className="text-[var(--color-brand-cyan)]" />,
}

export function ToastViewport() {
  const { toasts, dismissToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[min(320px,calc(100vw-2rem))]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-card flex items-center gap-2.5 px-4 py-3 bg-[var(--color-bg-elevated)] cursor-pointer"
            onClick={() => dismissToast(toast.id)}
          >
            {icons[toast.variant]}
            <span className="text-sm text-[var(--color-text-primary)]">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
