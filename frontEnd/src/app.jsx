import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Home } from "./views/usuario/home"
import { Catalogo } from "./views/usuario/catalogo"

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        children : [
          {
            path : "catalogo", element : <Catalogo />
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
