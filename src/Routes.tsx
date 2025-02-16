import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router'

const HomePage = lazy(() => import('./pages/home/HomePage'))

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="/pokemon/:id" element={<div>Pokemon detail</div>} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
