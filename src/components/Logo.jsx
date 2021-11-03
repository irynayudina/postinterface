import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import ShowInView from '../globals/ShowInView';
const Logo = () => {
    return(
        <div className="logo" onClick={() => ShowInView(0)}>
                <div className="logo-box">
                <FontAwesomeIcon icon={faBoxOpen} color="white" />
                </div>
                <div className="logo-name"><h1>Post</h1></div>
            </div>
    );
};
export default Logo;