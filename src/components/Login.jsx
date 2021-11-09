import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    
    if(localStorage.getItem('loged') === "1"){
        return(
            <div className="header-log">
                <div className="header-log-cont"><Link to="/userpage" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name">Моя сторінка</h3></Link></div>
            </div>
        );
    }else{    
    return(
        <div className="header-log">
            <div className="header-log-cont"><Link to="/login" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name">Вхід</h3></Link>/<Link to="/signup" style={{ textDecoration: 'none' }}><h3 className="clickable header-log-name">Реєстрація</h3></Link></div>
        </div>
    );}
};
export default Login;