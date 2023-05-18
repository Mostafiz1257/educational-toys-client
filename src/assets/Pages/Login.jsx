import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);
    }
    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin}>
                    <div className="card-body">
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
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-teal-700 hover:bg-teal-900">Login</button>
                            <p className="text-teal-700 mt-4 font-bold">I have no account ? <Link to='/register'><span className="text-primary underline">Register</span></Link> here</p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;