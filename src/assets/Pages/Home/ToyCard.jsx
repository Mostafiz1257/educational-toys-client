import React from 'react';

const ToyCard = ({toy}) => {
    const {name,price,likes,image}=toy
    return (
        <div className='overflow-hidden relative transition duration-200 transform hover:translate-y-2 shadow-xl rounded-lg hover:shadow-2xl'>
           <img className='w-96 h-96 object-cover'  src={image} alt="" />
           <div className='px-6 py-6 absolute bg-black bg-opacity-60 opacity-0 hover:opacity-100 inset-0 transition-opacity text-gray-200 flex flex-col duration-200'>
            <p className='font-bold text-2xl'>{name}</p>
            <p className='mt-auto'>Price:{price}$</p>
            <p>Likes:{likes} K</p>
           </div>
        </div>
    );
};

export default ToyCard;