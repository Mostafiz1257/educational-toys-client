import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const Card = ({category}) => {
    const {_id,price,ratings,details,photo} = category
    return (
        <div className="card w-64 h-72 bg-base-100 shadow-xl hover:-translate-y-1 duration-100 hover:shadow-2xl hover:cursor-pointer"  data-aos="flip-up">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Price:{price}$</h2>
                <p>Ratings:{ratings}</p>
                <div className="card-actions">
                   
                    <Link to={`/toyDetails/${_id}`}><button
                    className="btn btn-xs bg-cyan-600 text-white border-teal-600">Details
                </button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;