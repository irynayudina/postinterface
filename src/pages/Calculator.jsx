import React from 'react';
import {useEffect} from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import Place from '../components/Place';
import correctInput from '../globals/CorrectInput';
import {calculateddeliveryCost, thefinalcost} from '../globals/CalculateddeliveryCost';
const Calculator = () => {    
    let correctFormCalculator = false;

    const [cityfrom, setCityfrom] = useState('');    
    const [cityfrombgc, setCityfrombgc] = useState("white");
    const [typeErrorcf, setTypeErrorcf] = useState('');
    function cityfromverifyer(){ 
        if(cityfrom.match(/^[a-zA-Z]+$/)){
            correctInput[0]= true;    
            setTypeErrorcf('');
            setCityfrombgc("white");
        }
        else{
            // setCorrectInput(correctInput[0] = false);
            correctInput[0]= false; 
            setTypeErrorcf('Дозволені лише букви');
            setCityfrombgc("#f5c1c5");
        }            
    }
    useEffect(() => {
        cityfromverifyer();
    }, [cityfrom]); 

    const [cityto, setCityto] = useState('');  
    const [citytobgc, setCitytobgc] = useState("white");
    const [typeErrorct, setTypeErrorct] = useState('');
    function citytoverifyer(){
        if(cityto.match(/^[a-zA-Z]+$/)){
            correctInput[1] = true;
            setTypeErrorct('');
            setCitytobgc("white");
        }
        else{
            correctInput[1] = false;
            setTypeErrorct('Дозволені лише букви');
            setCitytobgc("#f5c1c5");
        }
    }
    useEffect(() => {
        citytoverifyer();
    }, [cityto]);
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
            let thefinalcost = 0;//city difference and 5 days storing
            let placecost = 0;
            for(var i = 0; i < calculateddeliveryCost.length; i+=3){
                placecost = (calculateddeliveryCost[i]+calculateddeliveryCost[i+1])*calculateddeliveryCost[i+2];
                thefinalcost += placecost;
                console.log(calculateddeliveryCost);
            }
            if(thefinalcost > 40){                
                setCostShow(thefinalcost);
            } else{ setCostShow(40);}
        }else{setCostShow(0);}
        console.log("form is correct: "+ correctFormCalculator);
    }
    const [places, setPlaces] = useState([{id: 2, dis:{display: 'none'}}]);
    function addPlace(){
        correctInput.push(false);
        calculateddeliveryCost.push(0);
        calculateddeliveryCost.push(0);
        calculateddeliveryCost.push(1);
        setPlaces([...places, {id: (places[places.length - 1].id + 1)}]);
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
        console.log("costs: "+calculateddeliveryCost);
    }
        
    return(
        <div className="the-root-body"><div className="calculator"> 
        <div className="plain-form">
            <h2>Калькулятор вартості доставки</h2>
            <form action="">
                <label htmlFor="">Місто</label><input type="text" className="fromCity" value={cityfrom} onChange={event => setCityfrom(event.target.value)} style={{backgroundColor: cityfrombgc}}/><p className="error" style={{top: "-20px", left: "-150px"}}>{typeErrorcf}</p>
                <label htmlFor="">Місто</label><input type="text" className="toCity" value={cityto} onChange={event => setCityto(event.target.value)} style={{backgroundColor: citytobgc}}/><p className="error" style={{top: "-20px", left: "-150px"}}>{typeErrorct}</p>
                {
                    places.map((post)=><Place id={post.id} remove={removePlace} dis={post.dis}/>)
                }
                <p className="clickable" onClick={addPlace}>+ додати місце</p><br />
                <input type="checkbox"  className="keep"/><p>Зберігання протягом 5 днів</p>
                <div className="botCalc">                     
                    <h2>Вартість: </h2><input className="contedCost" value={costShow.toFixed(0)} disabled="true" /><p> грн.</p>
                </div>
                <Button name={"Вирахувати вартість"} onClick={veryfyHandler}/>                      
            </form>
        </div>
    </div></div>
    );
};
export default Calculator;