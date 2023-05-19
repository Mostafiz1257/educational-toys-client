import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toyDetails = useLoaderData()
    const { photo, name, seller, email, price, ratings, quantity, details } = toyDetails || {}

    return (
        <>
            {/* <h2 className="text-2xl text-teal-700 text-center mb-12 font-bold underline underline-offset-8"> {name}</h2>   */}
            <div className="hero min-h-screen bg-teal-50">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="font-bold ">
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="text-teal-700 font-bold mt-4">Details:{details}</p>
                        <p className="py-6 font-bold">Seller: {seller}</p>
                        <p className="md:mt-4"> Email:{email}</p>
                        <div className="md:flex md:mt-4">
                        <p className="md:mr-12">Price:{price}.99 $</p>
                        <p>Ratings:{ratings} <span> </span></p>
                        </div>
                        <p>Quantity: {quantity}</p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyDetails;