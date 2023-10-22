import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateProduct = () => {

  const updateItem = useLoaderData()

  const {_id, image, name, brandName, type, price, shortDescription, rating} = updateItem || []


const updateHandle =(event) =>{
    event.preventDefault();
    const form = event.target;
    const image = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating= form.rating.value;

    const updateProductList = {image, name, brandName, type, price, rating}

    console.log(updateProductList);

    fetch(`https://technology-electtronics-brandshop-serverside-project-f0cv0tmg7.vercel.app/update/${updateItem._id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(updateProductList)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated',
            text: 'Product Update has been sucessfully',
          })
           form.reset()
        }
    })
}


    return (


        <div>
           
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content lg:w-[800px] flex-col">
<div className="text-center">
  <h1 className="text-5xl font-bold">Product Update</h1>
</div>
<div className="card flex-shrink-0  lg:w-[100%] shadow-2xl bg-base-100">
  <form className="card-body" onSubmit={updateHandle}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input type="text" defaultValue={image} name="photo" className="input input-bordered" required />
    </div>

   <div className="flex justify-center items-center gap-3">
   <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" defaultValue={name} name="name" className="input input-bordered" required />
    </div>
  
    <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <input type="text" defaultValue={brandName} name="brandName" className="input input-bordered" required />
    </div>
   </div>


    <div className="flex justify-center items-center gap-3">

    <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text">Type</span>
      </label>
      <input type="text" defaultValue={type} name="type" className="input input-bordered" required />
    </div>
        
    <div className="form-control w-1/2">
     <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" defaultValue={price} name="price" className="input input-bordered" required />
  </div>
    </div>

     <div className="form-control w-1/2">
     <label className="label">
        <span className="label-text">Rating</span>
      </label>
      <input type="text" defaultValue={rating} name="rating" className="input input-bordered" required />
     </div>
  
    <div className="form-control mt-6">
      <input type="submit" className="btn btn-success"/>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default UpdateProduct;