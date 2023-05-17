import { Link, useRouteError } from "react-router-dom";
// import { FaFrownOpen } from "react-icons/fa";
const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className=" flex text-center items-center justify-center bg-gray-100	 h-screen	">
            <div className="border-red-500">
                {/* <p className="items-center justify-center"><FaFrownOpen className="w-64 h-64 "></FaFrownOpen></p> */}
                <img className="h-[200px] w-[400px] rounded-md" src="https://i.ibb.co/hVjtq2W/error.jpg" alt="" />
                <p className="text-xl text-red-400 mt-5">{error?.message}</p>
                <p className="text-5xl font-bold mb-5 text-amber-400">{status || 404}</p>
                <Link><button className="btn btn-outline btn-accent">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;