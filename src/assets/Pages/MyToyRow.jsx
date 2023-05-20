
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
// eslint-disable-next-line react/prop-types
const MyToyRow = ({ toy, index, myToys, setMyToys }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, seller, email, name, sub_category, price, quantity, photo, ratings, details } = toy || {}

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE"
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                // eslint-disable-next-line react/prop-types
                const remaining = myToys.filter(toy => toy._id !== id)
                setMyToys(remaining)
                
            }
        })
    }
    return (
        <tr className='font-bold text-teal-500 hover:-translate-y-2 duration-200 cursor-pointer hover:text-teal-900'>
            <th>{index + 1}</th>
            <th><img className='w-12' src={photo} alt="" /></th>
            <td className=' font-bold'>{seller}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{ratings}</td>
            <td>{details}</td>
            <td className='flex w-1/2 mx-auto '><Link to={`/updateDetails/${_id}`}><span ><FaEdit ></FaEdit></span></Link>
                <span className='ml-6'><FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt></span>
            </td>

        </tr>
    );
};

export default MyToyRow;