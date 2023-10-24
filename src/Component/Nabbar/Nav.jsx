import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { CiDark } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';




const Nav = () => {

  const {user, logout} = useContext(AuthContex)

const [mode, setMode] = useState('light')

  function chageTheme (newTheme) {

      const html = document.documentElement
      html.setAttribute('data-theme', newTheme)
      setMode(newTheme)
  }

  

 

  const logoutHandle = () =>{
    logout()
    .then(() => {

      alert('Sign-out successful');

    })

    .catch((err) =>{
      console.error(err);
    })
  }

    return (
      <div>
        <div className="navbar bg-[#0f0a07] w-11/12 mx-auto">
          <div className="navbar-start">
          <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#0f0a07] rounded-box w-80">
      <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
                
              </li>
              <li>
                <NavLink
                  to="/add-product"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Product
                </NavLink>
                
              </li>
       
              <li>
                <NavLink
                  to="/my-cart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Cart
                </NavLink>
                
              </li>

              
       
      </ul>
    </div>

            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1600"
              alt="Logo"
            />

            <a className="normal-case text-sm md:text-xl lg:text-2xl ml-4 text-white">
              Os Tech & Electronics
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 md:gap-4 lg:gap-6 text-white uppercase">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
                
              </li>

              <li>
                <NavLink
                  to="/add-product"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Product
                </NavLink>
                
              </li>

            

              <li>
                <NavLink
                  to="/my-cart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Cart
                </NavLink>
                
              </li>

              <li>

                {
                  mode == 'light' ?   <button onClick={() => chageTheme('dark')}><MdDarkMode/></button> :  <button onClick={() => chageTheme('light')}><CiDark /></button>
                } 


              
             
              
              
              </li>
             
      
             
            </ul>
          </div>
          <div className="navbar-end text-white uppercase">
          
          {
                user ? <>
                <div><img src={user.photoURL} className=" h-5 w-5 md:h-10 md:w-10 rounded-full mr-2" alt="" /></div>
                <span className="text-[11px] lg:text-xl">{user.displayName}</span>
                <a onClick={logoutHandle} href="#" className="text-[11px] lg:text-xl ml-4 text-white font-bold hover:text-gray-400">Log Out</a> 
                </>: <>
                <Link to={"/login"}>
                  <button className="font-medium text-2xl text-white hover:text-gray-400">
                    Login</button>
                    </Link>
                </>
              }
              
          </div>
        </div>
      </div>
    );
};

export default Nav;