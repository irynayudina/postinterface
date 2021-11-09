import React from 'react';
import Functions from '../components/userFunctions';
import { ENs } from '../globals/ens';
const Enlist = () =>{return(
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
                <Functions />
            </div>
            <div className="vline"></div>
                <div className="view">
                    <h2>Список сформованих електронних накладних: </h2>
                    <p>Номер накладної - час формування</p>
                    <div>
                        {ENs.map(item => {
                        return <p>{item.text + " - " + item.time}</p>;
                        })}
                    </div>
                </div>
        </div> 
    </div>
);
};
export default Enlist;