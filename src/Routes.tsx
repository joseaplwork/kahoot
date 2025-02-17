import { Suspense, lazy } from 'react'
import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom'

const HomePage = lazy(() => import('./pages/home/HomePage'))
const PokemonDetailPage = lazy(
  () => import('./pages/pokemon-detail/PokemonDetailPage'),
)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: '/pokemon/:id',
      element: (
        <Suspense>
          <ScrollRestoration />
          <PokemonDetailPage />
        </Suspense>
      ),
    },
  ],
  {
    basename: import.meta.env.MODE === 'production' ? '/kahoot' : '/',
  },
)

export function Routes() {
  return <RouterProvider router={router} />
}
