import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routeConfig from './routes'

const router = createBrowserRouter(routeConfig)

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router