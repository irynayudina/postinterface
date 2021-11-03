import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTelegramPlane, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return(
        <div className="footer">
            <div className="socials">
            <FontAwesomeIcon icon={faFacebookSquare} color="black" className="clickable" />
            <FontAwesomeIcon icon={faTwitterSquare} color="black" className="clickable" />
            <FontAwesomeIcon icon={faLinkedin} color="black" className="clickable" />
            <FontAwesomeIcon icon={faYoutubeSquare} color="black" className="clickable" />
            <FontAwesomeIcon icon={faInstagramSquare} color="black" className="clickable" />
            <FontAwesomeIcon icon={faTelegramPlane} color="black" className="clickable" />
            </div>
            <div className="questions">
                <p className="small clickable">Питання</p>
                <p className="small clickable">Конфіденційність</p>
                <p className="small clickable">Компенсація</p>
            </div>
            <div className="contacts">
                <p className="small clickable">+380123456789</p>
                <p className="small clickable">posthotlinemail@outlook.com</p>
            </div>
        </div>
    );
};
export default Footer;