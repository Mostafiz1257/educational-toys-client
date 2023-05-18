import { Link } from "react-router-dom";

const Navbar = () => {


    const navItems =
        <div className="md:flex gap-5 ">
            <Link to='/'> <p>Home</p></Link>
            <Link to='/allToys'> <p>All Toys</p></Link>
            <Link to='/myToys'> <p>My Toys</p></Link>
            <Link to='/addToy'>  <p>Add a toys</p></Link>
            <Link to='/blog'> <p>Blogs</p></Link>
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
                <a className="btn btn-ghost normal-case text-2xl font-bold">Educational Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {navItems}
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-accent">Button</button>

            </div>
        </div>
    );
};

export default Navbar;