import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return(
        <div className="nav">
                <Link to="/about" style={{ textDecoration: 'none' }}><div className="nav-i clickable"><div><h2>Про нас</h2></div></div></Link>
                <Link to="/vacation" style={{ textDecoration: 'none' }}><div className="nav-i nav-ii clickable"><div><h2>Вакансії</h2></div></div></Link>
                <Link to="/map" style={{ textDecoration: 'none' }}><div className="nav-i clickable"><div><h2>Карта відділень</h2></div></div></Link>
                <Link to="/fop" style={{ textDecoration: 'none' }}><div className="nav-i nav-ii clickable"><div><h2>Для ФОП</h2></div></div></Link>
                <Link to="/osoba" style={{ textDecoration: 'none' }}><div className="nav-i clickable"><div><h2>Для приватних осіб</h2></div></div></Link>
        </div>
    );
};
export default Nav;