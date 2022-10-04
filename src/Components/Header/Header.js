import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
    return (
        <div>
           <Home></Home> 
           <Outlet></Outlet>
        </div>
    );
};

export default Header;