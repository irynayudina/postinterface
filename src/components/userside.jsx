import React from "react";
import Functions from '../components/userFunctions';
const userSide = () => {
    return(
        <div className="side">
                <div className="user">
                    <h2>Прізвище Ім’я</h2>
                    <div className="cont">
                        <p className="small">useremail@gmail.com</p>
                        <p className="small">+38**********</p>
                    </div>
                </div>
                <div className="hline"></div>
                <Functions />
            </div>
            
    );
};
export default userSide;