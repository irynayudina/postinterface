import React from "react";
import { Link } from 'react-router-dom';
const Functions = () => {
    return(<div className="functions">
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
                        <Link to={"/enlist"} style={{ textDecoration: 'none' }}><p className="clickable">Список ЕН</p></Link>
                    </div>
                    <div className="funcgroup">                       
                        <div className="fheader"><h2>Налаштування</h2></div> 
                        <Link to={"/home"} style={{ textDecoration: 'none' }}><p className="clickable" onClick={()=>localStorage.setItem('loged', 0)}>Вийти</p></Link>
                        <p className="clickable">Змінити данні</p>
                    </div>               
                </div>);};
                export default Functions;