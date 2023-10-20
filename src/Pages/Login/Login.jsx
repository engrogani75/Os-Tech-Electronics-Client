import { Link } from "react-router-dom";


const Login = () => {

    const logingFromHandle = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email, password);

    }


  return (
    <div className="flex justify-center">
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
    <p className="text-center py-6">Login with <span className="text-xl text-bold text-orange-700">
      <button className="text-3xl"><span className="text-blue-800">G</span><span className="text-red-800">o</span>ogle</button></span></p>
    <hr />
<form className="card-body" onSubmit={logingFromHandle}>
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="password" placeholder="password" name="password" className="input input-bordered" required />
  <label className="label">
    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
  </label>
</div>
<div className="form-control mt-6">
  <button className="btn btn-secondary">Login</button>
</div>
<p>New User! <span className="text-green-700 text-xl"><Link to={'/registation'}>Registation</Link></span></p>


</form>



</div>
</div>
  )
}

export default Login
