import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className='flex mx-8'>
                <SideNav></SideNav>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Main;