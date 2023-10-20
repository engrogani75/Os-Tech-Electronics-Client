
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
        path: "/products/:brandName",
        element:  <Product></Product>,
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`)
    },

    {
      path: "/details/:id",
      element:  <ProductDetils></ProductDetils>,
      loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
    
  },


      ]
    },
  ]);

  export default router