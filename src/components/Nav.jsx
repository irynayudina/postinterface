import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react' 
const Nav = () => {
    const [show1, setShow1] = useState('none');
const showDropdown1 = (e)=>{
    setShow1("inline-block");
}
const hideDropdown1 = e => {
    setShow1('none');
}
const [show2, setShow2] = useState('none');
const showDropdown2 = (e)=>{
    setShow2("inline-block");
}
const hideDropdown2 = e => {
    setShow2('none');
}
const [show3, setShow3] = useState('none');
const showDropdown3 = (e)=>{
    setShow3("inline-block");
}
const hideDropdown3 = e => {
    setShow3('none');
}
const [show4, setShow4] = useState('none');
const showDropdown4 = (e)=>{
    setShow4("inline-block");
}
const hideDropdown4 = e => {
    setShow4('none');
}
const [show5, setShow5] = useState('none');
const showDropdown5 = (e)=>{
    setShow5("inline-block");
}
const hideDropdown5 = e => {
    setShow5('none');
}
    return(
        <div>
        <div className="nav">
                <Link to="/about" style={{ textDecoration: 'none' }}><div className="nav-i clickable" onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}><div><h2>Про нас</h2></div></div></Link>
                
                <Link to="/vacation" style={{ textDecoration: 'none' }}><div className="nav-i nav-ii clickable" onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2}><div><h2>Вакансії</h2></div></div></Link>
                
                <Link to="/map" style={{ textDecoration: 'none' }}><div className="nav-i clickable" onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3}><div><h2>Карта відділень</h2></div></div></Link>
                
                <Link to="/fop" style={{ textDecoration: 'none' }}><div className="nav-i nav-ii clickable" onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4}><div><h2>Для ФОП</h2></div></div></Link>
                
                <Link to="/osoba" style={{ textDecoration: 'none' }}><div className="nav-i clickable" onMouseEnter={showDropdown5} onMouseLeave={hideDropdown5}><div><h2>Для приватних осіб</h2></div></div></Link>
                
        </div>
        <div className="refwrap"><div className="refHover" id="i1ref" style={{display:show1}} onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}><a href="/reference#icom" style={{textDecoration:'none'}}>?</a></div></div>
        <div className="refwrap"><div className="refHover" id="i2ref" style={{display:show2}} onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2}><a href="/reference#ivac" style={{textDecoration:'none'}}>?</a></div></div>
        <div className="refwrap"><div className="refHover" id="i3ref" style={{display:show3}} onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3}><a href="/reference#imap" style={{textDecoration:'none'}}>?</a></div></div>
        <div className="refwrap"><div className="refHover" id="i4ref" style={{display:show4}} onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4}><a href="/reference#ifop" style={{textDecoration:'none'}}>?</a></div></div>
        <div className="refwrap"><div className="refHover" id="i5ref" style={{display:show5}} onMouseEnter={showDropdown5} onMouseLeave={hideDropdown5}><a href="/reference#ifiz" style={{textDecoration:'none'}}>?</a></div></div>
        </div>
    );
};
export default Nav;