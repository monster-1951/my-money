import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/app/home/page";
import Auth from "./pages/Auth/page";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getSessionUser } from "./api/auth";
import { setCSRF_TOKEN } from "./modules/csrf";
import Analysis from "./pages/app/analysis/page";
import Create from "./pages/app/create/page";
import Accounts from "./pages/app/accounts/page";
import Categories from "./pages/app/categories/page";



function App() {
  const [session, setSession] = useState();
  const [bootStrapped, setBootstrapped] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const user = await getSessionUser();
      setSession(user.USER);
      setBootstrapped(true);
      setCSRF_TOKEN(user.CSRF_TOKEN);
    };
    getUser();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/home"} />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Auth register={false} />,
    },
    {
      path: "/register",
      element: <Auth register />,
    },
    {
      path: "/analysis",
      element: <Analysis />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/accounts",
      element: <Accounts />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
  ]);

  const authRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth register={false} />,
    },
    {
      path: "/register",
      element: <Auth register />,
    },
  ]);
  if (bootStrapped && session) {
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  } else if (!bootStrapped) return <>Loading</>;
  else
    return (
      <>
        <RouterProvider router={authRouter}></RouterProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
}

export default App;
