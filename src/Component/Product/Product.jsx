import { useLoaderData } from "react-router-dom";

import ProductSlider from "./ProductSlider";
import ProductCard from "./ProductCard";

const Product = () => {
   const product =  useLoaderData()

  
   console.log(product);
    if (product.length > 0) {
        return (
            <>
  
            
              <ProductSlider product={product}></ProductSlider>
  
  
  
          <div className="grid md:grid-cols-3 w-11/12 gap-4 mx-auto my-6">
  
  
  
              {
                  product.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              }
          </div></>
  
        
      ); 
    }else{
        return <div className="w-11/12 mx-auto flex flex-col justify-center items-center h-80">
            <h1 className="text-3xl text-red-900 font-bold">This product is not available at the moment!!</h1></div>
    }
};  

export default Product;