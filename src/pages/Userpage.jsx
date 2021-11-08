import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className="functions">
                    <div className="funcgroup">                       
                        <div className="fheader"><h2>Мої відправлення</h2></div>
                        <p className="clickable">Отримані</p>
                        <p className="clickable">Надіслані</p>
                        <p className="clickable">В дорозі</p>
                    </div>  
                    <div className="funcgroup">                       
                        <div className="fheader"><h2>Оплата</h2></div>
                        <p className="clickable">Сплатити за послуги</p>
                        <p className="clickable">Дані платника</p>
                    </div>
                    <div className="funcgroup">                       
                        <div className="fheader"><h2>Електронна накладна</h2></div>
                        <Link to={"/en"} style={{ textDecoration: 'none' }}><p className="clickable">Створити ЕН</p></Link>
                        <p className="clickable">Список ЕН</p>
                    </div>
                    <div className="funcgroup">                       
                        <div className="fheader"><h2>Налаштування</h2></div> 
                        <p className="clickable">Вийти</p>
                        <p className="clickable">Змінити данні</p>
                    </div>               
                </div>
            </div>
            <div className="vline"></div>
            <div className="view">
                
            </div>
        </div> 
        </div>
    );
};
export default Userpage;