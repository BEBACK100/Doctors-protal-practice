import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shareed/Footer';
import Navbar from '../Pages/Shareed/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;