import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        if (user?.email) {
            fetch(`https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/mytoys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        }
    }, [user?.email])

    const handleSearch = () => {
        console.log(searchText);
        fetch(`https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/getToysByText?name=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToys(data);
            });
    };
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-teal-500  mb-12">My Toys</h2>
            <div>

                <div className="search-box p-2 text-center ">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-1 border"
                        placeholder="Search by Toy name"
                    />{" "}
                    <button className="btn btn-sm" onClick={handleSearch}>Search</button>
                </div>

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
                                myToys.map((toy, index) => <MyToyRow
                                    key={toy._id}
                                    index={index}
                                    myToys={myToys}
                                    setMyToys={setMyToys}
                                    toy={toy} >
                                </MyToyRow>)

                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;