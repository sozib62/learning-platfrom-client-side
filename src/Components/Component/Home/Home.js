import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from '../CourseDisplay/CourseDisplay';
import DownloadPage from '../Download/DownloadPage';

const Home = () => {
    const course = useLoaderData()

    return (
        <div>
            <div className='text-center'>
                <DownloadPage
                    elementId='element'
                    fileName='file'
                ></DownloadPage>
            </div>
            <div id='element' className=' grid grid-cols-3 gap-10 ml-48 mt-20 '>

                {
                    course.map(cor => <CourseDisplay
                        key={cor.id}
                        course={cor}
                    ></CourseDisplay>)
                }

            </div>
        </div>
    );
};

export default Home;