import React from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
const SignUp = () => {
    return(
        <div className="the-root-body"><div className="sign-up"> 
        <div className="form">
            <form action="">
                <h2>Реэстрація</h2>
                <FontAwesomeIcon icon={faWindowClose} color="white" className="closewin"/>
                <div>
                    <label htmlFor=""><p>Ім’я</p></label><input type="text" />
                    <label htmlFor=""><p>Прізвище</p></label><input type="text" />
                    <label htmlFor=""><p>По батькові</p></label><input type="text" />
                    <label htmlFor=""><p>Телефон</p></label><input type="text" />
                    <label htmlFor=""><p>Електронна пошта</p></label><input type="text" />
                    <label htmlFor=""><p>Пароль</p></label><input type="text" />
                    <label htmlFor=""><p>Повторіть пароль</p></label><input type="text" />
                    
                    <Button name={"Зареєструватися"}/>
                    
                    <p className="small"><FontAwesomeIcon icon={faCheckSquare} className="checkregister"/>Реєструючись я погоджуюсь з правилами використання та  політикою конфіденційності</p>    
                </div>
            </form>
        </div> 
    </div></div>
    );
};
export default SignUp;