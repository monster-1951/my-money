import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getSessionUser } from "./api/auth";
import { getCSRF_TOKEN, setCSRF_TOKEN } from "./modules/csrf";

function App() {
  const [session, setSession] = useState();
  const [bootStrapped, setBootstrapped] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const user = await getSessionUser();
      setSession(user.USER);
      setBootstrapped(true);
      setCSRF_TOKEN(user.CSRF_TOKEN);
      const token = getCSRF_TOKEN();
      console.log(token);
    };
    console.log(session)
    getUser();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
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
  ]);
  if (bootStrapped)
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
  else return <>Loading</>;
}

export default App;
