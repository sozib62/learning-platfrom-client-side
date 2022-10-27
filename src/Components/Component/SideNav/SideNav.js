import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(' https://assignment-server-10-tau.vercel.app/course')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=' m-10 '>
            {
                categories.map(category => <p className='my-10 text-2xl' key={category.id}>
                    <Link to={`/courses/${category.id}`}>{category.title}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;