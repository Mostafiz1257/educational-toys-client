import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
useTitle('Register')
    const { createUser, ProfileUpdate } = useContext(AuthContext)
    const [error,setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setError('password must be at least 6 digit')
        }
        const user = { name, photo, email, password }
        console.log(user);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                ProfileUpdate({displayName:name, photoURL:photo})
                console.log(createdUser);
                updateUserData(result.user,name)
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error);
            })    

    }
    const updateUserData =(name,user)=>{
        ProfileUpdate(user,{
            displayName:name
        })
        .then(result=>{
            console.log('user name Updated');
        })
        .catch(error=>{
            console.log(error);
        })
    }
   
    return (
        <div className="hero min-h-screen mb-12">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister}>
                    <div className="card-body hover:shadow-2xl">
                        <h3 className="text-3xl font-bold text-teal-700">Please Register</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Photo</span>
                            </label>
                            <input type="url" name='photo' required placeholder="photo url" className="input input-bordered" />
                        </div>
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
                            error && <p className="text-red-500">{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-teal-700 hover:bg-teal-900">Register</button>
                            <p className="text-teal-700 mt-4 font-bold">I have already an account ? <Link to='/login'><span className="text-primary underline">Login</span></Link> here</p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;