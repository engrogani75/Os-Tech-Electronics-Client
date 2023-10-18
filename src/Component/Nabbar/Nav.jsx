import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
      <div>
        <div className="navbar bg-[#0f0a07] w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content w-56 mt-2 text-3xl"
              >
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
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Product
                </NavLink>
                
              </li>

              <li>
                <NavLink
                  to="/"
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

            <a className="normal-case text-sm md:text-xl lg:text-2xl ml-4">
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
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Product
                </NavLink>
                
              </li>

              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Cart
                </NavLink>
                
              </li>

             
            </ul>
          </div>
          <div className="navbar-end text-white uppercase">
          
                <Link to={'/'}>Login</Link>
              
          </div>
        </div>
      </div>
    );
};

export default Nav;