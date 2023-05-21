import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full ">
            <div className="relative w-full ">
                <img className="w-full rounded-xl object-cover" src="https://i.ibb.co/LQND6D8/b2.webp" alt="" />
                <div  className=" absolute rounded-xl h-full flex items-center top-0 bg-gradient-to-r from-[#030303] to-[rgba(21,21,21,0)]">
                    <div className="w-1/2 text-white md:space-y-5 pl-8" data-aos="fade-up"
                            data-aos-duration="3000">
                        <h2 className="md:text-5xl font-bold" >Learn with your  <span className="text-teal-300">favorite Toys</span></h2>
                        <p className="md:font-bold ">Here is many types of toys,you can choose for your your baby and it will help for learn for your brain growth. </p>
                        <div > 
                         <Link to='/allToys' ><button className="btn btn-outline btn-accent" >Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;