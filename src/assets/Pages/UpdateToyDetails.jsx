import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToyDetails = () => {
    const updateToys = useLoaderData()
    const { _id, price, quantity, details } = updateToys
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toy = { price, quantity, details }
        console.log(toy);
        fetch(`https://educational-toys-server-phi.vercel.app/mytoys/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated into database successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>

            <div>
                <h2 className='text-4xl font-bold text-center text-teal-500 mb-12 underline underline-offset-8'>Update toy</h2>
                <form onSubmit={handleUpdate}>
                    <div className=' w-1/2 mx-auto	'>
                        <div className='md:flex gap-3'>




                        </div>
                        <div className='md:flex gap-3'>

                            <div className="form-control">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Price</span>
                                    </label>
                                    <input type="text" name='price' defaultValue={price} required placeholder='price' className="input input-bordered" />
                                </div>

                            </div>
                            <div className='md:flex gap-3'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' defaultValue={quantity} required placeholder="Enter quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Details</span>
                                    </label>
                                    <input type="text" name='details' defaultValue={details} required placeholder='' className="input input-bordered h-[100px]" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <button className="btn btn-wide bg-teal-700 hover:bg-teal-600">Update To Website</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToyDetails;