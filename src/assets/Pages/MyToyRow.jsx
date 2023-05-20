import React from 'react';
import { FaTrashAlt,FaEdit } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const MyToyRow = ({ toy, index }) => {
    // eslint-disable-next-line react/prop-types
    const { seller,email, name, sub_category, price, quantity,photo,ratings ,details} = toy || {}

    return (
        <tr className='font-bold text-teal-500 hover:-translate-y-2 duration-200 cursor-pointer hover:text-teal-900'>
        <th>{ index +1}</th>
        <th><img className='w-12' src={photo} alt="" /></th>
        <td className=' font-bold'>{seller}</td>
        <td>{name}</td>
        <td>{sub_category}</td>
        <td>{price} $</td>
        <td>{quantity}</td>
        <td>{email}</td>
        <td>{ratings}</td>
        <td>{details}</td>
        <td className='flex w-1/2 mx-auto '><span ><FaEdit ></FaEdit></span>
         <span className='ml-6'><FaTrashAlt></FaTrashAlt></span>
         </td>
        
    </tr>
    );
};

export default MyToyRow;