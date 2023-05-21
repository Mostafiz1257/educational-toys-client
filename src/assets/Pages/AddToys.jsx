
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToys = () => {
    useTitle('Add Toy')
    const { user } = useContext(AuthContext)
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const sub_category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toy = { photo, name, seller, email, sub_category, price, ratings, quantity, details }
        console.log(toy);
        fetch('https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Successfully added ...!')
                }

            })
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-teal-500 mb-12 underline underline-offset-8'>Add toys</h2>
            <form onSubmit={handleAddToy}>
                <div className=' w-1/2 mx-auto	'>
                    <div className='md:flex gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Picture</span>
                            </label>
                            <input type="text" name='photo' required placeholder=" photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Toy Name</span>
                            </label>
                            <input type="text" name='name' required placeholder=" name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Seller Name</span>
                            </label>
                            <input type="text" name='seller' required defaultValue={user?.displayName} className="input input-bordered" />
                        </div>

                    </div>
                    <div className='md:flex gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Email</span>
                            </label>
                            <input type="text" name='email' required defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Sub-category</span>
                            </label>
                            <input type="text" name='category' required placeholder="category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Price</span>
                            </label>
                            <input type="text" name='price' required placeholder='price' className="input input-bordered" />
                        </div>

                    </div>
                    <div className='md:flex gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Ratings</span>
                            </label>
                            <input type="text" name='ratings' required placeholder='ratings' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Quantity</span>
                            </label>
                            <input type="text" name='quantity' required placeholder="Enter quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-500">Details</span>
                            </label>
                            <input type="text" name='details' required placeholder='' className="input input-bordered h-[100px]" />
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-wide bg-teal-700 hover:bg-teal-600">Add To Website</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToys;