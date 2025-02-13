import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router'

const App = lazy(() => import('./App'))

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path="/"
          element={
            <Suspense>
              <App />
            </Suspense>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  )
}
