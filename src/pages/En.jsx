import React from 'react'
import { useRef } from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button';
import Place from '../components/Place';
import {calculateddeliveryCosten, outerCalculate} from '../globals/CalculateddeliveryCost';
import correctInput from '../globals/CorrectInput';
import correctInputEn from '../globals/corinpen';
const En = () => {    
    const [costShow, setCostShow] = useState(0);   

    const [vn, setVn] = useState('');    
    const [vnbgc, setVnbgc] = useState("white");
    const [typeErrorvn, setTypeErrorvn] = useState('');
    function vnverifyer(){ 
        if(vn.match(/^[a-zA-Z]+$/)){
            correctInputEn[0]= true;    
            setTypeErrorvn('');
            setVnbgc("white");
        }
        else{
            correctInputEn[0]= false; 
            setTypeErrorvn('Лише букви');
            setVnbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnverifyer();
    }, [vn]); 

    const [vnn, setVnn] = useState('');    
    const [vnnbgc, setVnnbgc] = useState("white");
    const [typeErrorvnn, setTypeErrorvnn] = useState('');
    function vnnverifyer(){ 
        if(vnn.match(/^[a-zA-Z]+$/)){
            correctInputEn[1]= true;    
            setTypeErrorvnn('');
            setVnnbgc("white");
        }
        else{
            correctInputEn[1]= false; 
            setTypeErrorvnn('Лише букви');
            setVnnbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnnverifyer();
    }, [vnn]);

    const [vnnn, setVnnn] = useState('');    
    const [vnnnbgc, setVnnnbgc] = useState("white");
    const [typeErrorvnnn, setTypeErrorvnnn] = useState('');
    function vnnnverifyer(){ 
        if(vnnn.match(/^[a-zA-Z]+$/)){
            correctInputEn[2]= true;    
            setTypeErrorvnnn('');
            setVnnnbgc("white");
        }
        else{
            correctInputEn[2]= false; 
            setTypeErrorvnnn('Лише букви');
            setVnnnbgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnnnverifyer();
    }, [vnnn]);

    const [tel, setTel] = useState('');    
    const [telbgc, setTelgc] = useState("white");
    const [typeErrortel, setTypeErrortel] = useState('');
    function telverifyer(){ 
        if(tel.match(/^\++3+8+[0-9]{10}$/)){
            correctInputEn[3]= true;    
            setTypeErrortel('');
            setTelgc("white");
        }
        else{
            correctInputEn[3]= false; 
            setTypeErrortel('Формат +38**********');
            setTelgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        telverifyer();
    }, [tel]);

    const [vn2, setVn2] = useState('');    
    const [vnbgc2, setVnbgc2] = useState("white");
    const [typeErrorvn2, setTypeErrorvn2] = useState('');
    function vnverifyer2(){ 
        if(vn2.match(/^[a-zA-Z]+$/)){
            correctInputEn[4]= true;    
            setTypeErrorvn2('');
            setVnbgc2("white");
        }
        else{
            correctInputEn[4]= false; 
            setTypeErrorvn2('Лише букви');
            setVnbgc2("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnverifyer2();
    }, [vn2]); 

    const [vnn2, setVnn2] = useState('');    
    const [vnnbgc2, setVnnbgc2] = useState("white");
    const [typeErrorvnn2, setTypeErrorvnn2] = useState('');
    function vnnverifyer2(){ 
        if(vnn2.match(/^[a-zA-Z]+$/)){
            correctInputEn[5]= true;    
            setTypeErrorvnn2('');
            setVnnbgc2("white");
        }
        else{
            correctInputEn[5]= false; 
            setTypeErrorvnn2('Лише букви');
            setVnnbgc2("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnnverifyer2();
    }, [vnn2]);

    const [vnnn2, setVnnn2] = useState('');    
    const [vnnnbgc2, setVnnnbgc2] = useState("white");
    const [typeErrorvnnn2, setTypeErrorvnnn2] = useState('');
    function vnnnverifyer2(){ 
        if(vnnn2.match(/^[a-zA-Z]+$/)){
            correctInputEn[6]= true;    
            setTypeErrorvnnn2('');
            setVnnnbgc2("white");
        }
        else{
            correctInputEn[6]= false; 
            setTypeErrorvnnn2('Лише букви');
            setVnnnbgc2("#f5c1c5");
        }            
    }
    useEffect(() => {
        vnnnverifyer2();
    }, [vnnn2]);

    const [tel2, setTel2] = useState('');    
    const [telbgc2, setTelgc2] = useState("white");
    const [typeErrortel2, setTypeErrortel2] = useState('');
    function telverifyer2(){ 
        if(tel2.match(/^\++3+8+[0-9]{10}$/)){
            correctInputEn[7]= true;    
            setTypeErrortel2('');
            setTelgc2("white");
        }
        else{
            correctInputEn[7]= false; 
            setTypeErrortel2('Формат +38**********');
            setTelgc2("#f5c1c5");
        }            
    }
    useEffect(() => {
        telverifyer2();
    }, [tel2]);

    const [comment, setComment] = useState('');    
    const [commentbgc, setCommentgc] = useState("white");
    const [typeErrorcomment, setTypeErrorcomment] = useState('');
    function commentverifyer(){ 
        if(comment.match(/^[0-9a-zA-Z\,\.\-\#\(\)]+$/) || comment.length === 0){
            correctInputEn[8]= true;    
            setTypeErrorcomment('');
            setCommentgc("white");
        }
        else{
            correctInputEn[8]= false; 
            setTypeErrorcomment("Лише букви . , - () # не більше 100 символів");
            setCommentgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        commentverifyer();
    }, [comment]);

    const [pluspay, setPluspay] = useState('');    
    const [pluspaybgc, setPluspaybgc] = useState("white");
    const [typeErrorpluspay, setTypeErrorpluspay] = useState('');
    function pluspayverifyer(){ 
        if(pluspay.match(/^[0-9]+\.+[0-9]+$/) || pluspay.match(/^[0-9]+$/)  && pluspay <= 50000){
            correctInputEn[9]= true;    
            setTypeErrorpluspay('');
            setPluspaybgc("white");
        }
        else{
            correctInputEn[9]= false; 
            setTypeErrorpluspay('До 100');
            setPluspaybgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        pluspayverifyer();
    }, [pluspay]);

    let correctFormEn = false;
    function veryfyHandler(){        
        for(var i = 0; i < correctInputEn.length; i++){
            if(correctInputEn[i] === false){
                correctFormEn = false;
                break;
            }
            else{
                correctFormEn = true;
            }
        }
        if(correctFormEn === true){
            let thefinalcost = 0;
            let placecost = 0;
            for(var i = 0; i < calculateddeliveryCosten.length; i+=3){
                placecost = (calculateddeliveryCosten[i]+calculateddeliveryCosten[i+1])*calculateddeliveryCosten[i+2];
                thefinalcost += placecost;
            }
            if(checkedkeep){
                outerCalculate[1] = thefinalcost/10;
                thefinalcost += outerCalculate[1];
            }
            let distance = Math.abs( outerCalculate[0] - outerCalculate[2]);
            thefinalcost = thefinalcost + (thefinalcost * distance * 0.1);
            if(thefinalcost > 40){                
                setCostShow(thefinalcost);
            } else{ setCostShow(40);}
            alert("Номер вашої накладної: "+50001478940000+costShow);
        }else{setCostShow(0);}
        console.log("form is correct: "+ correctFormEn);
        console.log({costShow});
    }
    const [places, setPlaces] = useState([{id: 10, corInpArr: 2, dis:{display: 'none'}, corInpArr:"correctInputEn"}]);
    function addPlace(){
        correctInputEn.push(false);
        calculateddeliveryCosten.push(0);
        calculateddeliveryCosten.push(0);
        calculateddeliveryCosten.push(1);
        setPlaces([...places, {id: (places[places.length - 1].id + 1), corInpArr:"correctInputEn"}]);
    }
    const removePlace = (place) => {
        setPlaces(places.filter(p => p.id !== place.id));
        for(var i =0; i<correctInputEn.length; i++){
            if(i === place.id){           
                correctInputEn.splice(i, 1);     
            }
        }for(var i =0; i<calculateddeliveryCosten.length; i++){
            if(i === place.id){           
                calculateddeliveryCosten.splice(i, 3);     
            }
        }
    }
    const checkKeep = useRef();
    const [checkedkeep, setcheckedkeep] = useState(false);
    function handleKeep(){
        if(checkKeep.current.checked){setcheckedkeep(true)}else{setcheckedkeep(false)}
        
    }
    useEffect(() => {
        handleKeep();
    }, [checkedkeep]);
    const [cf, setCf] = useState(''); 
    const [ct, setCt] = useState(''); 
    const selectedCf = useRef();
    const selectedCt = useRef();
    function handleCf(event){
        setCf(event.target.value)
        if(selectedCf.current.value === "vin"){
            outerCalculate[0] = 1;
        }if(selectedCf.current.value === "dni"){
            outerCalculate[0] = 2;
        }if(selectedCf.current.value === "zap"){
            outerCalculate[0] = 3;
        }if(selectedCf.current.value === "kiev"){
            outerCalculate[0] = 4;
        }if(selectedCf.current.value === "horn"){
            outerCalculate[0] = 5;
        }if(selectedCf.current.value === "lviv"){
            outerCalculate[0] = 6;
        }if(selectedCf.current.value === "myk"){
            outerCalculate[0] = 7;
        }if(selectedCf.current.value === "od"){
            outerCalculate[0] = 8;
        }if(selectedCf.current.value === "pol"){
            outerCalculate[0] = 9;
        }if(selectedCf.current.value === "har"){
            outerCalculate[0] = 10;
        }
    }
    function handleCt(event){
        setCt(event.target.value);
        if(selectedCt.current.value === "vin"){
            outerCalculate[2] = 1;
        }if(selectedCt.current.value === "dni"){
            outerCalculate[2] = 2;
        }if(selectedCt.current.value === "zap"){
            outerCalculate[2] = 3;
        }if(selectedCt.current.value === "kiev"){
            outerCalculate[2] = 4;
        }if(selectedCt.current.value === "horn"){
            outerCalculate[2] = 5;
        }if(selectedCt.current.value === "lviv"){
            outerCalculate[2] = 6;
        }if(selectedCt.current.value === "myk"){
            outerCalculate[2] = 7;
        }if(selectedCt.current.value === "od"){
            outerCalculate[2] = 8;
        }if(selectedCt.current.value === "pol"){
            outerCalculate[2] = 9;
        }if(selectedCt.current.value === "har"){
            outerCalculate[2] = 10;
        }
    }
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
            <div className="en">
            <div className="plain-form">
                <h2>Створення електронної накладної</h2>
                <form action="">
                    <label htmlFor=""><p>Відправник</p></label>
                    <input type="text" placeholder="Прізвище" className="namefield" value={vn} onChange={event => setVn(event.target.value)} style={{backgroundColor: vnbgc}}/><p className="erroren" style={{top: "155px", left: "715px"}}>{typeErrorvn}</p>
                    <input type="text" placeholder="Ім'я" id="namev" className="namefield" value={vnn} onChange={event => setVnn(event.target.value)} style={{backgroundColor: vnnbgc}}/><p className="erroren" style={{top: "155px", left: "850px"}}>{typeErrorvnn}</p>
                    <input type="text" placeholder="По батькові" id="forenamev" className="namefield" value={vnnn} onChange={event => setVnnn(event.target.value)} style={{backgroundColor: vnnnbgc}}/><p className="erroren" style={{top: "155px", left: "980px"}}>{typeErrorvnnn}</p>

                    <label htmlFor=""><p>тел.</p></label>
                    <input type="text" id="phonev" className="phonefield" value={tel} onChange={event => setTel(event.target.value)} style={{backgroundColor: telbgc}}/><p className="erroren" style={{top: "155px", left: "1145px"}}>{typeErrortel}</p><br />
                    
                    <label htmlFor=""><p>Відділення місто</p></label>
                    <select onClick={handleCf } ref={selectedCf} onChange={event => setCf(event.target.value)} name="select" className="fromCity"> 
                    <option value="vin">Вінниця</option>
                    <option value="dni" selected>Дніпро</option>
                    <option value="zap">Запоріжжя</option>
                    <option value="kiev">Київ</option>
                    <option value="horn">Кривий Ріг</option>
                    <option value="lviv">Львів</option>
                    <option value="myk">Миколаїв</option>
                    <option value="od">Одеса</option>
                    <option value="pol">Полтава</option>
                    <option value="har">Харків</option>
                    </select>   
                    <label htmlFor=""><p>відділення</p></label>
                    <select name="vid1" className="cityfield">
                        <option value="1">№1</option>
                        <option value="2">№2</option>
                        <option value="3">№3</option>
                        <option value="4" selected>№4</option>
                    </select><br />

                    <label htmlFor=""><p>Отримувач</p></label>
                    <input type="text" placeholder="Прізвище" className="namefield" value={vn2} onChange={event => setVn2(event.target.value)} style={{backgroundColor: vnbgc2}}/><p className="erroren" style={{top: "238px", left: "710px"}}>{typeErrorvn2}</p>
                    <input type="text" placeholder="Ім'я" id="namev" className="namefield" value={vnn2} onChange={event => setVnn2(event.target.value)} style={{backgroundColor: vnnbgc2}}/><p className="erroren" style={{top: "238px", left: "845px"}}>{typeErrorvnn2}</p>
                    <input type="text" placeholder="По батькові" id="forenamev" className="namefield" value={vnnn2} onChange={event => setVnnn2(event.target.value)} style={{backgroundColor: vnnnbgc2}}/><p className="erroren" style={{top: "238px", left: "980px"}}>{typeErrorvnnn2}</p>

                    <label htmlFor=""><p>тел.</p></label>
                    <input type="text" id="phonev" className="phonefield" value={tel2} onChange={event => setTel2(event.target.value)} style={{backgroundColor: telbgc2}}/><p className="erroren" style={{top: "238px", left: "1143px"}}>{typeErrortel2}</p><br />
                    
                    <label htmlFor=""><p>Відділення місто</p></label>
                    <select onClick={handleCt } ref={selectedCt} onChange={event => setCt(event.target.value)} name="select" className="fromCity"> 
                    <option value="vin">Вінниця</option>
                    <option value="dni" selected>Дніпро</option>
                    <option value="zap">Запоріжжя</option>
                    <option value="kiev">Київ</option>
                    <option value="horn">Кривий Ріг</option>
                    <option value="lviv">Львів</option>
                    <option value="myk">Миколаїв</option>
                    <option value="od">Одеса</option>
                    <option value="pol">Полтава</option>
                    <option value="har">Харків</option>
                    </select>
                    <label htmlFor=""><p>відділення</p></label>
                    <select name="vid2" className="cityfield">
                        <option value="1">№1</option>
                        <option value="2">№2</option>
                        <option value="3">№3</option>
                        <option value="4" selected>№4</option>
                    </select><br />
                    {
                    places.map((post)=><Place id={post.id} remove={removePlace} dis={post.dis} corInpArr={post.corInpArr}/>)
                    }
                    <p className="clickable" onClick={addPlace}>+ додати місце</p><br />
                    <input type="checkbox"  id="pack" ref={checkKeep} onClick={handleKeep} checked={checkedkeep} className="keep"/><p>Зберігання протягом 5 днів</p><br />
                    <label htmlFor=""><p>Вартість доставки (автоматично по характеристикам)</p></label>
                    <input className="en-cost" value={costShow.toFixed(0)} disabled="true" /><p> грн.</p><br />
                    <input type="checkbox"/><p>Сплатити за отримувача</p><br />                   

                    <label htmlFor=""><p>Накладений платіж</p><br />
                    </label><input type="number" min="1" max="50000" className="cost" value={pluspay} onChange={event => setPluspay(event.target.value)} style={{backgroundColor: pluspaybgc}}/><p> грн.</p><br />
                    <label htmlFor=""><p className="com">Коментар</p></label>
                    <textarea name="comment" id="comment" cols="30" rows="4" maxLength="100" value={comment} onChange={event => setComment(event.target.value)} style={{backgroundColor: commentbgc}}></textarea><p className="erroren" style={{top: "732px", left: "710px"}}>{typeErrorcomment}</p>
                    <Button name={"Сформувати накладну"} onClick={veryfyHandler}/>    
                </form>
            </div> 
        </div>
            </div>
        </div> 
        </div>
    );
};
export default En;