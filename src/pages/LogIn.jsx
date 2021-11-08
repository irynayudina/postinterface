import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import correctLoginInput from '../globals/CorectLoginInput';
import { useState, useEffect } from 'react';
const LogIn = () => {
    const [identifier, setIdentifier] = useState('');    
    const [identifierbgc, setIdentifierbgc] = useState("white");
    const [typeErrorid, setTypeErrorid] = useState('');
    function identifierverifyer(){ 
        if(identifier.match(/^\++3+8+[0-9]{10}$/) || identifier.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            correctLoginInput[0]= true;    
            setTypeErrorid('');
            setIdentifierbgc("white");
        }
        else{
            correctLoginInput[0]= false; 
            setTypeErrorid('Неправильний формат');
            setIdentifierbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        identifierverifyer();changeLink();
    }, [identifier]); 
    const [password, setPassword] = useState('');    
    const [passwordbgc, setPasswordbgc] = useState("white");
    const [typeErrorps, setTypeErrorps] = useState('');
    function passwordverifyer(){ 
        if(password.match(/^[a-zA-Z1-9~!@#$%^&*]+$/) && password.length >=8){
            correctLoginInput[1]= true;    
            setTypeErrorps('');
            setPasswordbgc("white");
        }
        else{
            correctLoginInput[1]= false; 
            setTypeErrorps('Неправильний формат');
            setPasswordbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        passwordverifyer();changeLink();
    }, [password]); 
    const [link, setLink] = useState("/login");
    function changeLink(){
        if(correctLoginInput[0] === true && correctLoginInput[1] === true){
            setLink("/userpage");
        }
    }
    return(
        <div className="the-root-body"><div className="log-in">
        <div className="form">
            <form action="" onChange={changeLink}>
                <h2>Авторизація</h2>
                <FontAwesomeIcon icon={faWindowClose} color="white" className="closewin"/>
                <div>
                    <label htmlFor=""><p>Телефон або електронна пошта</p></label>
                    <input type="text" value={identifier} onChange={event => setIdentifier(event.target.value)} style={{backgroundColor: identifierbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorid}</p>
                    <label htmlFor=""><p>Пароль</p></label>
                    <input type="text" value={password} onChange={event => setPassword(event.target.value)} style={{backgroundColor: passwordbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorps}</p>                       
                    <Link to={link} style={{ textDecoration: 'none' }}><Button name={"Увійти"}/></Link>
                    <div className="left"><p className="clickable small">Відновити доступ</p></div>
                    <div className="right"><p className="clickable small">Реєстрація</p></div>    
                </div>
            </form>
        </div> 
    </div></div>
    );
};
export default LogIn;