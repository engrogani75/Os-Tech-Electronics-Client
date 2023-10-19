import { useLoaderData } from "react-router-dom";

import ProductSlider from "./ProductSlider";
import ProductCard from "./ProductCard";

const Product = () => {
   const product =  useLoaderData()
   console.log(product);
    return (
          <>

          
            <ProductSlider product={product}></ProductSlider>



        <div className="grid grid-cols-2">



            {
                product.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div></>

      
    );
};  

export default Product;