import { Outlet } from "react-router-dom";
import Nav from "../Component/Nabbar/Nav";
import Footer from "../Pages/Footer/Footer";




const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;