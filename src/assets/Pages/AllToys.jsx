import { useEffect, useState } from "react";
import TableRow from "./TableRow";


const AllToys = () => {

    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
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
                            <tr>
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