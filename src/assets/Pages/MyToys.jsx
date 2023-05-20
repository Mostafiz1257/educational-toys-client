import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        }
    }, [user?.email])
    return (
        <div>
        <h2 className="text-3xl font-bold text-center text-teal-500  mb-12">My Toys</h2>
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-teal-800'>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Details</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((toy, index) => <MyToyRow key={toy._id} index={index} toy={toy} ></MyToyRow>)
                           
                        }

                    </tbody>

                </table>
            </div>
        </div>
    </div>
    );
};

export default MyToys;