
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AddBrands from "../Pages/AddBrands/AddBrands";
import Product from "../Component/Product/Product";
import ProductDetils from "../Component/Product/ProductDetils";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProduct from "../Pages/Update/UpdateProduct";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import PrivaterRouter from "./PrivaterRouter";
import Users from "../Component/Users/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/brands') 
        },

        {
            path: "/add-product",
            element: <PrivaterRouter><AddProduct></AddProduct></PrivaterRouter>,   
        },

        {
          path: "/add-brand",
          element: <PrivaterRouter><AddProduct></AddProduct></PrivaterRouter>
      },

      {
        path: "/login",
        element: <Login></Login>,   
    },

    {
      path: "/registation",
      element: <Registation></Registation>,   
  },


      {
        path: "/products/:brandName",
        element:  <Product></Product>,
        loader: ({params}) => fetch(`https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/brands/${params.brandName}`)
    },

    {
      path: "/details/:id",
      element:  <PrivaterRouter><ProductDetils></ProductDetils></PrivaterRouter>,
      loader: ({params}) => fetch(`https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/product/${params.id}`)
  },

  {
    path: "/users/:email",
    element:  <PrivaterRouter><Users></Users></PrivaterRouter>,
    loader: ({params}) => fetch(`https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/users/${params.email}`)
},

  {
    path: "/my-cart",
    element: <PrivaterRouter><MyCart></MyCart></PrivaterRouter>,
    loader: () => fetch('https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/my-cart')
},

{
  path: "/update/:id",
  element: <PrivaterRouter><UpdateProduct></UpdateProduct></PrivaterRouter>,  
  loader: ({params}) => fetch(`https://technology-electtronics-brandshop-serverside-project.vercel.app/product/${params.id}`)
},


      ]
    },
  ]);

  export default router