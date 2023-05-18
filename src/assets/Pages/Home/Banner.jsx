
const Banner = () => {
    return (
        <div className="h-full ">
            <div className="relative w-full ">
                <img className="w-full rounded-xl" src="https://i.ibb.co/LQND6D8/b2.webp" alt="" />
                <div className=" absolute rounded-xl h-full flex items-center top-0 bg-gradient-to-r from-[#030303] to-[rgba(21,21,21,0)]">
                    <div className="w-1/2 text-white space-y-5 pl-8">
                        <h2 className="text-5xl font-bold">Learn with your  <span className="text-teal-300">favorite Toys</span></h2>
                        <p className="font-bold">Here is many types of toys,you can choose for your your baby and it will help for learn for your brain growth. </p>
                        <div >
                            <button className="btn btn-active btn-accent mr-3">Buy Now</button>
                            <button className="btn btn-outline btn-accent">See all Toys</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;