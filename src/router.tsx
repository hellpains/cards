import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ForgotPasswordPage, SignInPage, SignUpPage } from './pages'
import { ProfilePage } from './pages/profile-page/profile-page'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: '/sign-in',
      },
      {
        element: <SignUpPage />,
        path: '/sign-up',
      },
      {
        element: <ForgotPasswordPage />,
        path: '/forgot-password',
      },
    ],
    element: <Outlet />,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <div>DecksPage</div>, // <DecksPage/>
    path: '/',
  },
  {
    element: <div>DeckPage</div>, // <DeckPage/>
    path: '/decks/:deckId',
  },
  {
    element: <ProfilePage />, //<ProfilePage/>
    path: '/profile',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
  {
    element: <h1>404</h1>,
    path: '*',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
