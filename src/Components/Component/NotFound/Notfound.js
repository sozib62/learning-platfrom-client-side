import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl'> This route is not found <span className='text-red-500'>404</span></h1>
            <br />
            <h2 className='text-2xl'> Unhandled Thrown Error!</h2>
            <br />
            <h2 className='text-2xl'> 💿 Hey developer 👋</h2>
            <br />
            <br />
            <p className='text-lg'> Go to <Link to='/'>Home</Link></p>
            <br />
        </div>
    );
};

export default Notfound;