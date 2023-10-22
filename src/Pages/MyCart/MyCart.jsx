import { useState } from "react";
import { useLoaderData} from "react-router-dom";



const MyCart = () => {

  
   const cartList = useLoaderData()


const [myCartData, setmyCartData] = useState(cartList)


const deleteHandle = (_id) =>{
  fetch(`https://technology-electtronics-brandshop-serverside-project-f0cv0tmg7.vercel.app/my-cart/${_id}`,{
    method: 'DELETE'
})
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    if (data.deletedCount > 0) {
       alert('Deleted Successfully')
    }

    const remaingCart = myCartData.filter(cartList => cartList._id !== _id)
    setmyCartData(remaingCart)

  }) 
   
}
 
    return (
      <>
      {
       myCartData.map(cartItem => 
      <div key={cartItem._id} className="mt-4 w-11/12 mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-between items-center bg-white border
           border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700
            dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={cartItem.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">{cartItem.name}</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  dark:text-white">{cartItem.price}</h5>
                
            </div>
           
            <div className="flex flex-col justify-between p-4 leading-normal">
                <button className="mb-2 text-xl font-bold tracking-tight text-gray-900  dark:text-white bg-red-800 px-4 py-2" onClick={() =>deleteHandle(cartItem._id)}>X</button>  
            </div>
           
        </div>
      </div>
        ) 
      }
      
      </>
    );
};

export default MyCart;