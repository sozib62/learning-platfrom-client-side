import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className=' res flex mx-8'>
                <SideNav></SideNav>
                <Outlet className='out'></Outlet>

            </div>
        </div>
    );
};

export default Main;