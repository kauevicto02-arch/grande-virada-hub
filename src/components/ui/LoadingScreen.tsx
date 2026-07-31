import { motion } from 'framer-motion'

export function LoadingScreen({ label }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-3">
      <motion.div
        className="h-10 w-10 rounded-full border-2 border-[var(--color-brand-cyan)] border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
      />
      {label && <p className="text-sm text-[var(--color-text-secondary)]">{label}</p>}
    </div>
  )
}
