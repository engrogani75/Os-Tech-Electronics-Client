
import { useLoaderData} from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2'


const ProductDetils = () => {

  const {user} = useContext(AuthContex)

  


    const Productdetails = useLoaderData()

  
    
    const {_id, image, name, brandName, type, price, shortDescription, rating} = Productdetails || [];
 
    const addToCardHandle = (email) =>{
        const image = Productdetails.image;
        const name = Productdetails.name;
        const priceString = Productdetails.price;
        const price = parseInt(priceString)
       const addToCardData = {image, name, price};
       console.log(addToCardData);
       console.log(email);

       if (email) {
        fetch('https://technology-electtronics-brandshop-serverside-project-3rjin045p.vercel.app/addtocart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(addToCardData)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Cart added',
            text: 'Your product has been added',
          })
        }
       })
       } 

     

    }


 
    return (
        <div className="mt-4">
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={image} className="h-96" alt="Shoes" /></figure>
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
    <button className="bg-orange-600 px-4 py-2 text-white rounded-xl" onClick={() =>addToCardHandle(user.email)}>Add to Cart</button>
  </div>
</div>
        </div>
    );
};

export default ProductDetils;