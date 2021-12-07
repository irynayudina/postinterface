import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import correctLoginInput from '../globals/CorectLoginInput';
import { useState, useEffect } from 'react';
import { faEye } from "@fortawesome/free-solid-svg-icons";
const LogIn = () => {
    const eye = <FontAwesomeIcon icon={faEye} />
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [passwordShown, setPasswordShown] = useState(false);
    const [identifier, setIdentifier] = useState('');    
    const [identifierbgc, setIdentifierbgc] = useState("white");
    const [typeErrorid, setTypeErrorid] = useState('');
    function identifierverifyer(){ 
        if(identifier.length <=100 &&( identifier.match(/^\++3+8+[0-9]{10}$/) || identifier.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
            correctLoginInput[0]= true;    
            setTypeErrorid(' ');
            setIdentifierbgc("white");
           
        }
        else{
            correctLoginInput[0]= false; 
            setTypeErrorid('Формат: +38********** або валідний email довжиною до 100 символів');
            setIdentifierbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        identifierverifyer();
    }, [identifier]); 
    const [password, setPassword] = useState('');    
    const [passwordbgc, setPasswordbgc] = useState("white");
    const [typeErrorps, setTypeErrorps] = useState('');
    function passwordverifyer(){ 
        
        if(password.match(/^[a-zA-Z1-9~!@#$%^&*]+$/) && password.length >=8  && password.length <=100){
            correctLoginInput[1]= true;    
            setTypeErrorps(' ');
            setPasswordbgc("white");
            
        }
        else{
            correctLoginInput[1]= false; 
            setTypeErrorps('Формат: букви та цифри, спеціальні символи ~!@#$%^&* довжиною до 100 символів');
            setPasswordbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        passwordverifyer();
    }, [password]); 
    const [link, setLink] = useState("/login");
    function changeLink(){
        if(identifier !== localStorage.getItem('email') || identifier !== localStorage.getItem('phone')){
            correctLoginInput[0]= false; 
            setTypeErrorid('Ідентиифікатор не існує');
            setIdentifierbgc("#f5c1c5");
        }
        if(password !== localStorage.getItem('password')){
            correctLoginInput[1]= false; 
            setTypeErrorps('Неправильний пароль для данного аккаунта (можливо аккаунт не існує)');
            setPasswordbgc("#f5c1c5");
        }
        if(correctLoginInput[0] === true && correctLoginInput[1] === true){
            setLink("/userpage");
            localStorage.setItem('loged', 1);
        }else{
            localStorage.setItem('loged', 0);
        }
        
    }
    return(
        <div className="the-root-body"><div className="log-in">
        <div className="form">
            <form action="" >
                <h2>Авторизація</h2>
                <Link to={"/home"} style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faWindowClose} color="white" className="closewin"/></Link>
                <div>
                    <label htmlFor=""><p>Телефон або електронна пошта</p></label>
                    <input placeholder="+38********** / usermail@gmail.com" type="text" value={identifier} onChange={event => setIdentifier(event.target.value)} style={{backgroundColor: identifierbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorid}</p>
                    <label htmlFor=""><p>Пароль</p></label>
                    <div className="wrapperinput">
                    <input placeholder="1#Gh34**5678" type={passwordShown ? "text" : "password"} value={password} onChange={event => setPassword(event.target.value)} style={{backgroundColor: passwordbgc}}/>
                    <div className="clickable i" onClick={togglePasswordVisiblity}>{eye}</div>
                    </div>
                    <p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorps}</p> 
                    <Link to={link} style={{ textDecoration: 'none' }}><Button onClick={changeLink} name={"Увійти"}/></Link>
                    <div className="left"><p className="clickable small">Відновити доступ</p></div>
                    <div className="right"><Link to={"/signup"} style={{ textDecoration: 'none' }}><p className="clickable small" style={{color: "white"}}>Реєстрація</p></Link></div>    
                </div>
            </form>
        </div> 
    </div></div>
    );
};
export default LogIn;