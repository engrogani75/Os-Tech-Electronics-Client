
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>,   
        }
      ]
    },
  ]);

  export default router