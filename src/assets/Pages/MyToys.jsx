import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    console.log(myToys);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        }
    }, [user?.email])
    return (
        <div>
            <h2 className='text-4xl font-bold text-teal-700 text-center underline underline-offset-8'>My Toys</h2>
            <div>
                <p>{myToys.length}</p>
                {
                    // myToys.map(toys=>)
                }
            </div>
        </div>
    );
};

export default MyToys;