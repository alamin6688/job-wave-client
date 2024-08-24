import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        },
        {
            path: "/sign-in",
            element: <SignIn></SignIn>
        },
      ]
    },
  ]);