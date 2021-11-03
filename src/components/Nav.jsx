import React from 'react'
import ShowInView from '../globals/ShowInView';
const Nav = () => {
    return(
        <div className="nav">
                <div className="nav-i clickable" onClick={() => ShowInView(1)}><div><h2>Про нас</h2></div></div>
                <div className="nav-i clickable" onClick={() => ShowInView(2)}><div><h2>Вакансії</h2></div></div>
                <div className="nav-i clickable" onClick={() => ShowInView(3)}><div><h2>Карта відділень</h2></div></div>
                <div className="nav-i clickable" onClick={() => ShowInView(4)}><div><h2>Для ФОП</h2></div></div>
                <div className="nav-i clickable" onClick={() => ShowInView(5)}><div><h2>Для приватних осіб</h2></div></div>
        </div>
    );
};
export default Nav;