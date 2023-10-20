
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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/brands') 
        },

        {
            path: "/add-product",
            element: <AddProduct></AddProduct>,   
        },

        {
          path: "/add-brand",
          element: <AddBrands></AddBrands> 
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
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`)
    },

    {
      path: "/details/:id",
      element:  <ProductDetils></ProductDetils>,
      loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
    
  },

  {
    path: "/my-cart",
    element: <MyCart></MyCart>,
    loader: () => fetch('http://localhost:5000/my-cart')

},

{
  path: "/update/:id",
  element: <UpdateProduct></UpdateProduct>,  
  loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
},


      ]
    },
  ]);

  export default router