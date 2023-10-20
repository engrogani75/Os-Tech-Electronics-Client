import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { useContext } from "react";


const Registation = () => {

    const {creatUser} = useContext(AuthContex)
   


    const registationHandle = (e) =>{
   
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const photoUrl = formData.get('photo')
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(name, photoUrl, email, password)

        creatUser(email, password)
        .then(res => {
            console.log(res);
        })

        .catch(error =>{
            console.error(error);
        })

    }


  return (
    <div className="flex justify-center">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
      <form className="card-body" onSubmit={registationHandle}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Name" name = "name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" name = "photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name = "email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registaion</button>
        </div>

        {/* {
          !user ? <h1 className="text-xl text-red-900 text-bold">{passwordError}</h1>: navigate(location?.state? location.state : '/')

        } */}


        <p className="pb-4">already registation! <span className="text-green-700 text-xl"><Link to={'/login'}>Login</Link></span></p>
      </form> 
    </div>
        </div>
  )
}

export default Registation
