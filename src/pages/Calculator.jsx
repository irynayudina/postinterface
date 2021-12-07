import React from 'react';
import { useRef } from 'react';
import {useEffect} from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import Place from '../components/Place';
import correctInput from '../globals/CorrectInput';
import {calculateddeliveryCost, outerCalculate} from '../globals/CalculateddeliveryCost';
const Calculator = () => {    
    let correctFormCalculator = false;    
    const [costShow, setCostShow] = useState(0);
    function veryfyHandler(){        
        for(var i = 0; i < correctInput.length; i++){
            if(correctInput[i] === false){
                correctFormCalculator = false;
                break;
            }
            else{
                correctFormCalculator = true;
            }
        }
        if(correctFormCalculator === true){
            let thefinalcost = 0;
            let placecost = 0;
            for(var i = 0; i < calculateddeliveryCost.length; i+=3){
                placecost = (calculateddeliveryCost[i]+calculateddeliveryCost[i+1])*calculateddeliveryCost[i+2];
                thefinalcost += placecost;
            }
            
            let distance = Math.abs( outerCalculate[0] - outerCalculate[2]);
            thefinalcost = thefinalcost + (thefinalcost * distance * 0.1);
            if(thefinalcost > 40){                
                setCostShow(thefinalcost);
            } else{ setCostShow(40);}
        }else{setCostShow(0);}
        console.log("form is correct: "+ correctFormCalculator);
    }
    const [places, setPlaces] = useState([{id: 2, dis:{display: 'none'}, corInpArr:"correctInput"}]);
    function addPlace(){
        correctInput.push(false);
        calculateddeliveryCost.push(0);
        calculateddeliveryCost.push(0);
        calculateddeliveryCost.push(1);
        setPlaces([...places, {id: (places[places.length - 1].id + 1), corInpArr:"correctInput"}]);
    }
    const removePlace = (place) => {
        setPlaces(places.filter(p => p.id !== place.id));
        for(var i =0; i<correctInput.length; i++){
            if(i === place.id){           
                correctInput.splice(i, 1);     
            }
        }for(var i =0; i<calculateddeliveryCost.length; i++){
            if(i === place.id){           
                calculateddeliveryCost.splice(i, 3);     
            }
        }
    }
   
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
        <div className="the-root-body"><div className="calculator"> 
        <div className="plain-form">
            <h2>Калькулятор вартості доставки</h2>
            <form action="">
                <label htmlFor="">Місто відправки</label>
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
                <label htmlFor="">Місто отримання</label>
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
                {
                    places.map((post)=><Place id={post.id} remove={removePlace} dis={post.dis} corInpArr={post.corInpArr}/>)
                }
                <p className="clickable" onClick={addPlace}>+ додати місце</p><br />
                <div className="botCalc">                     
                    <h2>Вартість: </h2><input className="contedCost" value={costShow.toFixed(1)} disabled="true" /><p> грн.</p>
                </div>
                <Button name={"Вирахувати вартість"} onClick={veryfyHandler}/>                      
            </form>
        </div>
    </div></div>
    );
};
export default Calculator;