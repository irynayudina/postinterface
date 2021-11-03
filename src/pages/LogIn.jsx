import React from 'react';
import ShowInView from '../globals/ShowInView';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import ViewArray from '../globals/ViewArray';
const LogIn = () => {
    if(ViewArray[6]){
        return(
            <div className="log-in">
            <div className="form">
                <form action="">
                    <h2>Авторизація</h2>
                    <FontAwesomeIcon icon={faWindowClose} color="white" className="closewin"/>
                    <div>
                        <label htmlFor=""><p>Телефон або електронна пошта</p></label><input type="text" />
                        <label htmlFor=""><p>Пароль</p></label><input type="text" />                        
                        <Button name={"Увійти"}/>
                        <div className="left"><p className="clickable small">Відновити доступ</p></div>
                        <div className="right"><p className="clickable small" onClick={() => ShowInView(7)}>Реєстрація</p></div>    
                    </div>
                </form>
            </div> 
        </div>
        );
    }
    else{
        return("");
    }
};
export default LogIn;