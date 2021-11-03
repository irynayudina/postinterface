import React from 'react'
import Login from './Login';
import Logo from './Logo';
import Nav from './Nav';
const Header = () => {    
    return (
        <div className="header">
            <Logo />
            <Login />
            <Nav />
        </div>        
    );
};
export default Header;