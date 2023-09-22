import React from 'react'
import { RouteProps } from 'react-router'

import Home from '@/pages/Home'

const PublicRoutes: RouteProps[] = [
  { path: '/login', element: <Home /> },
  { path: '/item-01', element: <Home /> },
  { path: '/item-02', element: <Home /> },
  { path: '/item-03', element: <Home /> },
  { path: '/item-31', element: <Home /> },
  { path: '/item-32', element: <Home /> },
  { path: '/item-33', element: <Home /> },
  { path: '/item-331', element: <Home /> },
]

export default PublicRoutes