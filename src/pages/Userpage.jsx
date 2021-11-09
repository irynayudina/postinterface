import React from 'react';
import { Link } from 'react-router-dom';
import {ENs} from '../globals/ens';
import Functions from '../components/userFunctions';
import UserInfo from '../components/UserInfo';
const Userpage = (props) =>{
    return(
        <div className="the-root-body"><div className="userpage" >
            <div className="side">
                <UserInfo />
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