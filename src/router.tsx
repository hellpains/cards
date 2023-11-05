import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignInPage } from './pages'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: '/login',
      },
      {
        element: <div>SignUpPage</div>, // <SignUpPage />
        path: '/registration',
      },
      {
        element: <div>ForgotPasswordPage</div>, // <ForgotPasswordPage/>
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
    element: <div>Profile</div>, //<Profile/>
    path: '/profile',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
