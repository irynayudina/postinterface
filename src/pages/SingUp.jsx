import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import correctSignupInput from '../globals/CorrectSingupInput';
const SignUp = () => {
    const [name, setName] = useState('');    
    const [namebgc, setNamebgc] = useState("white");
    const [typeErrorname, setTypeErrorname] = useState('');
    function nameverifyer(){ 
        if(name.match(/^[А-ЯЄІЇа-яєії]+$/)){
            correctSignupInput[0]= true;    
            setTypeErrorname('');
            setNamebgc("white");
        }
        else{
            correctSignupInput[0]= false; 
            setTypeErrorname('Неправильний формат');
            setNamebgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        nameverifyer();changeLinks();
        localStorage.setItem('name', name);
    }, [name]);
    const [surname, setSurname] = useState('');    
    const [surnamebgc, setSurnamebgc] = useState("white");
    const [typeErrorsurname, setTypeErrorsurname] = useState('');
    function surnameverifyer(){ 
        if(surname.match(/^[А-ЯЄІЇа-яєії]+$/)){
            correctSignupInput[1]= true;    
            setTypeErrorsurname('');
            setSurnamebgc("white");
        }
        else{
            correctSignupInput[1]= false; 
            setTypeErrorsurname('Неправильний формат');
            setSurnamebgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        surnameverifyer();changeLinks();
        localStorage.setItem('surname', surname);
    }, [surname]);
    const [forename, setForename] = useState('');    
    const [forenamebgc, setForenamebgc] = useState("white");
    const [typeErrorforename, setTypeErrorforename] = useState('');
    function forenameverifyer(){ 
        if(forename.match(/^[А-ЯЄІЇа-яєії]+$/)){
            correctSignupInput[2]= true;    
            setTypeErrorforename('');
            setForenamebgc("white");
        }
        else{
            correctSignupInput[2]= false; 
            setTypeErrorforename('Неправильний формат');
            setForenamebgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        forenameverifyer();changeLinks();
        localStorage.setItem('forename', forename);
    }, [forename]); 
    const [phone, setPhone] = useState('');    
    const [phonebgc, setPhonebgc] = useState("white");
    const [typeErrorphone, setTypeErrorphone] = useState('');
    function phoneverifyer(){ 
        if(phone.match(/^\++3+8+[0-9]{10}$/)){
            correctSignupInput[3]= true;    
            setTypeErrorphone('');
            setPhonebgc("white");
        }
        else{
            correctSignupInput[3]= false; 
            setTypeErrorphone('Неправильний формат');
            setPhonebgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        phoneverifyer();changeLinks();
        localStorage.setItem('phone', phone);
    }, [phone]); 
    const [email, setEmail] = useState('');    
    const [emailbgc, setEmailgc] = useState("white");
    const [typeErroremail, setTypeErroremail] = useState('');
    function emailverifyer(){ 
        if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            correctSignupInput[4]= true;    
            setTypeErroremail('');
            setEmailgc("white");
        }
        else{
            correctSignupInput[4]= false; 
            setTypeErroremail('Неправильний формат');
            setEmailgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        emailverifyer();changeLinks();
        localStorage.setItem('email', email);
    }, [email]); 
    const [password, setPassword] = useState('');    
    const [passwordbgc, setPasswordbgc] = useState("white");
    const [typeErrorpassword, setTypeErrorpassword] = useState('');
    function passwordverifyer(){ 
        if(password.match(/^[a-zA-Z1-9~!@#$%^&*]+$/) && password.length >=8){
            correctSignupInput[5]= true;    
            setTypeErrorpassword('');
            setPasswordbgc("white");
        }
        else{
            correctSignupInput[5]= false; 
            setTypeErrorpassword('Неправильний формат');
            setPasswordbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        passwordverifyer();changeLinks();
        localStorage.setItem('password', password);
    }, [password]); 
    const [repeatpassword, setRepeatpassword] = useState('');    
    const [repeatpasswordbgc, setRepeatpasswordbgc] = useState("white");
    const [typeErrorrepeatpassword, setTypeErrorrepeatpassword] = useState('');
    function repeatpasswordverifyer(){ 
        if(repeatpassword.match(/^[a-zA-Z1-9~!@#$%^&*]+$/) && repeatpassword == password){
            correctSignupInput[6]= true;    
            setTypeErrorrepeatpassword('');
            setRepeatpasswordbgc("white");
        }
        else{
            correctSignupInput[6]= false; 
            setTypeErrorrepeatpassword('Паролі не співпадають');
            setRepeatpasswordbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        repeatpasswordverifyer();changeLinks();
    }, [repeatpassword]); 
    
    const [links, setLinks] = useState("/signup");
    function changeLinks(){
        if(correctSignupInput[0] === true && correctSignupInput[1] === true && correctSignupInput[2] === true && correctSignupInput[3] === true && correctSignupInput[4] === true && correctSignupInput[5] === true && correctSignupInput[6] === true){
            setLinks("/userpage");
            localStorage.setItem('loged', 1);
        }else{
            localStorage.setItem('loged', 0);
        }
    }
    return(
        <div className="the-root-body"><div className="sign-up"> 
        <div className="form">
            <form action="" onChange={changeLinks}>
                <h2>Реэстрація</h2>
                <FontAwesomeIcon icon={faWindowClose} color="white" className="closewin"/>
                <div>
                    <label htmlFor=""><p>Ім’я</p></label>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} style={{backgroundColor: namebgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorname}</p>
                    <label htmlFor=""><p>Прізвище</p></label>
                    <input type="text" value={surname} onChange={event => setSurname(event.target.value)} style={{backgroundColor: surnamebgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorsurname}</p>
                    <label htmlFor=""><p>По батькові</p></label>
                    <input type="text" value={forename} onChange={event => setForename(event.target.value)} style={{backgroundColor: forenamebgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorforename}</p>
                    <label htmlFor=""><p>Телефон</p></label>
                    <input type="text" value={phone} onChange={event => setPhone(event.target.value)} style={{backgroundColor: phonebgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorphone}</p>
                    <label htmlFor=""><p>Електронна пошта</p></label>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} style={{backgroundColor: emailbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErroremail}</p>
                    <label htmlFor=""><p>Пароль</p></label>
                    <input type="text" value={password} onChange={event => setPassword(event.target.value)} style={{backgroundColor: passwordbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorpassword}</p>
                    <label htmlFor=""><p>Повторіть пароль</p></label>
                    <input type="text" value={repeatpassword} onChange={event => setRepeatpassword(event.target.value)} style={{backgroundColor: repeatpasswordbgc}}/><p className="error" style={{top: "-10px", left: "1px"}}>{typeErrorrepeatpassword}</p>
                    
                    <Link to={links} style={{ textDecoration: 'none' }}><Button name={"Зареєструватися"}/></Link>
                    
                    <p className="small"><FontAwesomeIcon icon={faCheckSquare} className="checkregister"/>Реєструючись я погоджуюсь з правилами використання та  політикою конфіденційності</p>    
                </div>
            </form>
        </div> 
    </div></div>
    );
};
export default SignUp;