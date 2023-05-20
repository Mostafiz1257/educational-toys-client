import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user,loading } = useContext(AuthContext)
const location =useLocation()
const from = location?.state?.from?.pathname || '/'

    const notify = () => toast.success("Please Login First!");

    if(loading){
        return  <progress className="progress w-56 items-center justify-center mt-12"></progress>
    }

    if (user?.email) {
        return children
    }
    return (
        <>
            <Navigate state={{from: location}} to='/login' onClick={notify}></Navigate>
         
            <ToastContainer />
        </>
    );
};

export default PrivateRoute;