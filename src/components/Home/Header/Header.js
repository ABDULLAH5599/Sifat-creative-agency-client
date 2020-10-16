import React from 'react';
import './Header.css'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import Partner from '../Partner/Partner';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <Partner></Partner>
        </div>
    );
};

export default Header;