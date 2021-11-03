import React from 'react';
const Userpage = (props) =>{
    return(
        <div className="the-root-body"><div className="userpage" >
            <div className="side">
                <div className="user">
                    <h2>Прізвище Ім’я</h2>
                    <div className="cont">
                        <p className="small">useremail@gmail.com</p>
                        <p className="small">+38**********</p>
                    </div>
                </div>
                <div className="functions"></div>
            </div>
        </div> 
        </div>
    );
};
export default Userpage;