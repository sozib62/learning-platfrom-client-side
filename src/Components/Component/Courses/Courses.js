import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PrivateCourse from '../privateCourse/PrivateCourse';


const Courses = () => {
    const course = useLoaderData()

    return (
        <div className=' grid grid-cols-3 sm:grid-cols-1 gap-10 ml-48 mt-20 '>
            {
                course.map(cor => <PrivateCourse
                    key={cor.id}
                    course={cor}
                ></PrivateCourse>)
            }

        </div>
    );
};

export default Courses;