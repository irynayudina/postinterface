import React from 'react'
const UserInfo = () => {
    
    if(localStorage.getItem('loged') === "1"){
        return(
            <div className="user">
                    <h2>{localStorage.getItem('surname')} </h2><h2>{localStorage.getItem('name') }</h2><h2>{localStorage.getItem('forename')}</h2>
                    <div className="cont">
                        <p className="small">{localStorage.getItem('email')}</p>
                        <p className="small">{localStorage.getItem('phone')}</p>
                    </div>
            </div>
        );
    }else{    
    return(
        <div className="user">
                    <h2>Прізвище Ім’я</h2>
                    <div className="cont">
                        <p className="small">useremail@gmail.com</p>
                        <p className="small">+38**********</p>
                    </div>
        </div>
    );}
};
export default UserInfo;