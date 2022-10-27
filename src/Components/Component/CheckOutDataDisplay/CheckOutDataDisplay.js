import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOutDataDisplay = () => {

    const data = useLoaderData()

    const { logo, title, price } = data;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl items-center">
                <figure><img className='w-80 h-[300px]' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                </div>
                <div className="card-actions justify-end items-center">
                    <h2 className='text-3xl'>{price}</h2>
                    <button className="btn btn-primary"><Link to={`/checkOut/${data.id}`}>BUY NOW</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutDataDisplay;