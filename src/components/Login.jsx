import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react' 
const Login = () => {
    const [show6, setShow6] = useState('none');
const showDropdown6 = (e)=>{
    setShow6("inline-block");
}
const hideDropdown6 = e => {
    setShow6('none');
}
const [show7, setShow7] = useState('none');
const showDropdown7 = (e)=>{
    setShow7("inline-block");
}
const hideDropdown7 = e => {
    setShow7('none');
}
    if(localStorage.getItem('loged') === "1"){
        return(
            <div className="header-log">
                <div className="header-log-cont"><Link to="/userpage" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name">Моя сторінка</h3></Link></div>
            </div>
        );
    }else{    
    return(
        <div>
            <div className="header-log">
            <div className="header-log-cont"><Link to="/login" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name" onMouseEnter={showDropdown6} onMouseLeave={hideDropdown6}>Вхід</h3></Link>/<Link to="/signup" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name" onMouseEnter={showDropdown7} onMouseLeave={hideDropdown7}>Реєстрація</h3></Link></div>
            </div>
            <div className="refwrap"><div className="refHover" id="i6ref" style={{display:show6}} onMouseEnter={showDropdown6} onMouseLeave={hideDropdown6}><a href="/reference#enter" style={{textDecoration:'none'}}>?</a></div></div>
            <div className="refwrap"><div className="refHover" id="i7ref" style={{display:show7}} onMouseEnter={showDropdown7} onMouseLeave={hideDropdown7}><a href="/reference#reg" style={{textDecoration:'none'}}>?</a></div></div>
        </div>
        
    );}
};
export default Login;