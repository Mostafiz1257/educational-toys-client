
// eslint-disable-next-line react/prop-types
const TableRow = ({ toy }) => {

    // eslint-disable-next-line react/prop-types
    const { seller, name, sub_category, price, quantity } = toy
    return (
        <tr>
            <th>{ }</th>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td><button className="btn btn-xs bg-cyan-600 text-white border-teal-600">Details</button></td>
        </tr>
    );
};

export default TableRow;