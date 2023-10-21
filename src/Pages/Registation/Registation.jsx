import { Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2'

const Registation = () => {

  

  const {user, creatUser, passwordError} = useContext(AuthContex)
  // const navigate = useNavigate(); 

  // const location = useLocation()

  

  


    const registationHandle = (e) =>{
   
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photoUrl = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoUrl, email, password)
        

        if (creatUser) {
          creatUser(email, password)
          .then(res =>{
            const result = res.user;
            console.log(result);
            const user = {name, photoUrl, email}

          



            fetch('https://technology-electtronics-brandshop-serverside-project-r4jyjwz0o.vercel.app/users', {
    
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                icon: 'success',
                title: 'Your registation',
                text: 'Your resgistation has been sucessfully',
              })
  
             
            }
          })
           
        
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: {errorCode },
            text: {errorMessage}
  
          })
       
          });
        }





       
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

        {
          !user ? <h1 className="text-xl text-red-900 text-bold">{passwordError}</h1>: <Navigate to="/" replace={true}></Navigate>

        }


        <p className="pb-4">already registation! <span className="text-green-700 text-xl"><Link to={'/login'}>Login</Link></span></p>
      </form> 
    </div>
        </div>
  )
}

export default Registation
