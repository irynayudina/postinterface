import React from 'react';
import { Link } from 'react-router-dom';
import {ENs} from '../globals/ens';
import Functions from '../components/userFunctions';
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
                <div className="hline"></div>
                <Functions /></div>
            <div className="vline"></div>
            <div className="view">
                
            </div>
        </div> 
        </div>
    );
};
export default Userpage;