import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { LoginPage } from "./pages/Auth/Login";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/Home",
      element:<Home/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
