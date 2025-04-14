import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./views/usuario/home";
import { Catalogo } from "./views/usuario/catalogo";
import { FormArticulo } from "./views/admin/formArticulo";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Outlet />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/catalogo",
          element: <Catalogo />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Outlet />,
      children:[
        {
          path: "crear", element :<FormArticulo />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
