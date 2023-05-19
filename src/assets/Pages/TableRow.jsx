import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TableRow = ({ toy, index }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, seller, name, sub_category, price, quantity } = toy
    return (
        <tr>
            <th>{ index +1}</th>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td>
               <Link to={`/toyDetails/${_id}`}> <button
                    className="btn btn-xs bg-cyan-600 text-white border-teal-600">Details
                </button></Link>
            </td>
        </tr>
    );
};

export default TableRow;