import { Outlet } from "react-router-dom";
import Nav from "../Component/Nabbar/Nav";




const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;