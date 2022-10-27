import React from 'react';


const PrivateCourse = ({ course }) => {

    const { title, logo } = course;

    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img className='w-80 h-[300px]' src={logo} alt="Shoes" /></figure>
                <div className="card-body  bg-lime-200">
                    <h2 className="card-title">{title}</h2>
                </div>

            </div>
        </div >
    );
};

export default PrivateCourse;