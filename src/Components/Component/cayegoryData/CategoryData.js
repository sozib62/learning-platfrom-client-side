import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryData = () => {

    const category = useLoaderData();
    const { logo, title, details, id } = category;

    return (
        <div>
            <div className="card mx-32 p-20 bg-base-100 shadow-2xl">
                <figure><img className='[w-200px] h-[320px]' src={logo} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="card-title text-7xl">{title}</h2>
                </div>
                <div>
                    <p className='text-xl'>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/checkOut/${id}`}>Get Premium</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryData;
