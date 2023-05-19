import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)


    const notify = () => toast("Wow so easy!");

    if (user?.email) {
        return children
    }
    return (
        <>

            <Navigate to='/login' onClick={notify}></Navigate>
         
            <ToastContainer />
        </>
    );
};

export default PrivateRoute;