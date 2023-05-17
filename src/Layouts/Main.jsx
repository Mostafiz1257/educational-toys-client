import { Outlet } from "react-router-dom";
import Footer from "../assets/Pages/Footer";
import Navbar from "../assets/Pages/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;