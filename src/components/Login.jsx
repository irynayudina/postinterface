import React from 'react'
import ShowInView from '../globals/ShowInView';
const Login = () => {
    return(
        <div className="header-log clickable">
                <div className="header-log-name" onClick={() => ShowInView(6)}><h3>Вхід/Реєстрація</h3></div>
        </div>
    );
};
export default Login;