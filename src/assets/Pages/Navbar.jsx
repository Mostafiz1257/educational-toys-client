import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user ,logOut } = useContext(AuthContext)
    console.log(user?.photoURL);

    const handleSignOut =()=>{
        logOut()
        .then(()=>{

        })
        .then(error=>{
            console.log(error);
        })
    }
    const navItems =
        <div className="md:flex gap-7 text-teal-500">

            <NavLink to='/' className={({ isActive }) => (isActive ? 'active-route' : 'default')}> <p>Home</p></NavLink>
            <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'active-route' : 'default')}> <p>All Toys</p></NavLink>

            {
                user ?
                <><NavLink to='/myToys' className={({ isActive }) => (isActive ? 'active-route' : 'default')}> <p>My Toys</p></NavLink>
                <NavLink to='/addToy' className={({ isActive }) => (isActive ? 'active-route' : 'default')}> <p>Add a toys</p></NavLink></>:' '
            }

            <NavLink to='/blog ' className={({ isActive }) => (isActive ? 'active-route' : 'default')}>  <p>Blogs</p></NavLink>
        </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-[50px] mask mask-squircle">
                        <img src="https://i.ibb.co/fdRXs9d/t3.jpg" />
                    </div>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-teal-800">Educational Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {navItems}
            </div>
            <div className="navbar-end md:gap-3">
                {
                    user ?
                        <>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} title={user?user.displayName:' '}/>
                                </div>
                            </div>
                            <Link ><button onClick={handleSignOut} className="btn btn-outline btn-accent">Logout</button></Link>
                        </> :
                        <Link to='/login'><button className="btn btn-outline btn-accent">Login Now</button></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;