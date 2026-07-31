import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { BottomNavigation } from './BottomNavigation'
import { ToastViewport } from '@components/ui/Toast'

// Layout único do sistema (item 5 do PRD). Nenhuma página deve recriar
// Header ou Sidebar — todas são renderizadas via <Outlet /> dentro deste shell.
export function AppLayout() {
  const location = useLocation()

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[var(--color-bg-base)]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 pb-24 md:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mx-auto w-full max-w-6xl"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <BottomNavigation />
      <ToastViewport />
    </div>
  )
}
