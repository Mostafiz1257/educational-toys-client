import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
const {signIn,googleSignIn}=useContext(AuthContext)
const [error,setError] = useState('')
const navigate = useNavigate();
const location = useLocation()
const from = location?.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error.message);
            setError(error)
        })
    }
    const handleGoggle=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
            
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin}>
                    <div className="card-body hover:shadow-2xl ">
                        <h3 className="text-3xl font-bold text-teal-700">Please Login....!</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="Enter your password" className="input input-bordered" />
                        </div>
                        {
                            error && <p className="text-red-500">Login with correct email or password ....!!</p>
                        }
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-teal-700 hover:bg-teal-900">Login</button>
                            <p className="text-teal-700 mt-4 font-bold">I have no account ? <Link to='/register'><span className="text-primary underline">Register</span></Link> here</p>
                        </div>
                        <p className="divider text-teal-700">or</p>
                        <p onClick={handleGoggle}><FaGoogle className='text-3xl hover:cursor-pointer mx-auto '></FaGoogle></p>
                    </div>
                </form>
            </div>
           
        </div>
    );
};

export default Login;