import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivaterRouter = ({children}) => {
    const{user, loader} = useContext(AuthContex)
    const location = useLocation();
    const pathname = location.pathname;


    if (loader) {
        return <span className="loading loading-spinner text-success"></span>
       }
    
       if (user) {
        return children
       }
    
    
    
       return <Navigate state={pathname} to={"/login"}></Navigate>
};

export default PrivaterRouter;