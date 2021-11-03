import React from 'react';
import {useEffect} from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import Place from '../components/Place';
import correctInput from '../globals/CorrectInput';
import ViewArray from '../globals/ViewArray';
import calculateddeliveryCost from '../globals/CalculateddeliveryCost';
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
            calculateddeliveryCost[0] += 1;
            // (в*ш*д * 10 + вага *8 + вартість*0,01) * кількість * документи1 \посилка1,1 \палети1,5 \шини та диски 2
        }
        console.log("form is correct: "+ correctFormCalculator);
    }
    const [places, setPlaces] = useState([{id: 2, dis:{display: 'none'}}, {id: 3}]);
    function addPlace(){
        correctInput.push(false);
        setPlaces([...places, {id: (places[places.length - 1].id + 1)}]);
    }
    const removePlace = (place) => {
        setPlaces(places.filter(p => p.id !== place.id));
        for(var i =0; i<correctInput.length; i++){
            if(i === place.id){           
                correctInput.splice(i, 1);     
            }
        }
    }
        
    if(ViewArray[8]){
        return(
            <div className="calculator"> 
            <div className="plain-form">
                <h2>Калькулятор вартості доставки</h2>
                <form action="">
                    <label htmlFor="">Місто</label><input type="text" className="fromCity" value={cityfrom} onChange={event => setCityfrom(event.target.value)} style={{backgroundColor: cityfrombgc}}/><p className="error" style={{left: "480px"}}>{typeErrorcf}</p>
                    <label htmlFor="">Місто</label><input type="text" className="toCity" value={cityto} onChange={event => setCityto(event.target.value)} style={{backgroundColor: citytobgc}}/><p className="error" style={{left: "680px"}}>{typeErrorct}</p>
                    {
                        places.map((post)=><Place id={post.id} remove={removePlace} dis={post.dis}/>)
                    }
                    <p className="clickable" onClick={addPlace}>+ додати місце</p><br />
                    <input type="checkbox"  className="keep"/><p>Зберігання протягом 5 днів</p>
                    <div className="botCalc">                     
                        <h2>Вартість: </h2><div className="contedCost">{calculateddeliveryCost[0].toFixed(0)}</div><p> грн.</p>
                    </div>
                    <Button name={"Вирахувати вартість"} onClick={veryfyHandler}/>                      
                </form>
            </div>
        </div>
        );
    }
    else{
        return("");
    } 
};
export default Calculator;