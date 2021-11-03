import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Logo = () => {
    return(
        <Link to="/home" style={{ textDecoration: 'none' }}>
        <div className="logo">
                <div className="logo-box">
                <FontAwesomeIcon icon={faBoxOpen} color="white" />
                </div>
                <div className="logo-name"><h1>Post</h1></div>
        </div></Link>
    );
};
export default Logo;