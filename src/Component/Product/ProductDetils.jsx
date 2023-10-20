import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ProductDetils = () => {
    const Productdetails = useLoaderData()
    
    const {_id, image, name, brandName, type, price, shortDescription, rating} = Productdetails || [];
 
    const addToCardHandle = () =>{
        const image = Productdetails.image;
        const name = Productdetails.name;
        const price = Productdetails.price;
        console.log(image, name, price);


    }
 
    return (
        <div className="mt-4">
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body justify-center items-center">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>{shortDescription}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brandName}</div> 
      <div className="badge badge-outline">{type}</div>
    </div>
    <p>Price: BDT <span className="text-red-700 font-bold">{price}</span></p>
    <button className="bg-orange-600 px-4 py-2 text-white rounded-xl" onClick={addToCardHandle}>Add to Cart</button>
  </div>
</div>
        </div>
    );
};

export default ProductDetils;