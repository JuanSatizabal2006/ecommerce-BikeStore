import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Home } from "./views/usuario/home"

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        children : [
          {
            
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
