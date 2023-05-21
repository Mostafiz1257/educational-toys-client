import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys')
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-teal-500  mb-12">Get You Favorite Toy Now</h2>
            <div>

                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className="text-teal-800">
                                <th>Index</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                toys.map((toy, index) => <TableRow key={toy._id} index={index} toy={toy} ></TableRow>)

                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;