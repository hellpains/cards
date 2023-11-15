import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { useMeQuery } from '@/services/auth'

import {
  DeckPage,
  DecksPage,
  ForgotPasswordPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from './pages'

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
    element: <DecksPage />, // <DecksPage/>
    path: '/',
  },
  {
    element: <DeckPage />,
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
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return null
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
