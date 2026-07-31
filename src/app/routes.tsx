import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@components/layout/AppLayout'
import { LoadingScreen } from '@components/ui/LoadingScreen'
import { hubRegistry } from '@lib/hubRegistry'

const ModuleDetailPage = lazy(() => import('@features/academia/pages/ModuleDetailPage'))
const NotFoundPage = lazy(() => import('@app/NotFoundPage'))

// Todas as rotas de feature são carregadas via lazy() a partir do hubRegistry
// (code splitting exigido no item 15 do PRD). Adicionar um novo Hub no
// registro já é suficiente para ele aparecer aqui automaticamente.
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        {hubRegistry.map((hub) => (
          <Route
            key={hub.id}
            path={hub.path}
            element={
              <Suspense fallback={<LoadingScreen />}>
                <hub.element />
              </Suspense>
            }
          />
        ))}

        <Route
          path="/academia/:moduleId"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <ModuleDetailPage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
