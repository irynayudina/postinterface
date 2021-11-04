import React, { useRef } from "react";
import { useState } from "react";
import {useEffect} from 'react';
import correctInput from '../globals/CorrectInput';
import correctInputPlace from "../globals/CorrectPlaceInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import {calculateddeliveryCost} from '../globals/CalculateddeliveryCost';
const Place = (props) =>{   
    
    const [weight, setWeight] = useState(''); 
    const [weightbgc, setWeightbgc] = useState("white");
    function weightverifyer(){
        if(weight.match(/^[0-9]+\.+[0-9]+$/) || weight.match(/^[0-9]+$/) && weight <= 30){
            correctInputPlace[0] = true;
            console.log(correctInputPlace[0]);
            setWeightbgc("white");
        }
        else{
            correctInputPlace[0] = false;
            setWeightbgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        weightverifyer();
    }, [weight]);

    const [width, setWidth] = useState('');
    const [widthbgc, setWidthbgc] = useState("white");
    function widthverifyer(){
        if(width.match(/^[0-9]+\.+[0-9]+$/) || width.match(/^[0-9]+$/) && width <= 100){
            correctInputPlace[1] = true;
            setWidthbgc("white");
        }
        else{
            correctInputPlace[1] = false;
            setWidthbgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        widthverifyer();
    }, [width]);

    const [len, setLen] = useState('');
    const [lenbgc, setLenbgc] = useState("white");
    function lenverifyer(){
        if(len.match(/^[0-9]+\.+[0-9]+$/) || len.match(/^[0-9]+$/) && len <= 100){
            correctInputPlace[2] = true;
            setLenbgc("white");
        }
        else{
            correctInputPlace[2] = false;
            setLenbgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        lenverifyer();
    }, [len]);

    const [height, setHeight] = useState('');
    const [heightbgc, setHeightbgc] = useState("white");
    function heightverifyer(){
        if(height.match(/^[0-9]+\.+[0-9]+$/) || height.match(/^[0-9]+$/) && height <= 100){
            correctInputPlace[3] = true;
            setHeightbgc("white");
        }
        else{
            correctInputPlace[3] = false;
            setHeightbgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        heightverifyer();
    }, [height]);

    const [quantity, setQuantity] = useState('');
    const [quantitybgc, setQuantitybgc] = useState("white");
    function quantityverifyer(){
        if(quantity.match(/^[0-9]+\.+[0-9]+$/) || quantity.match(/^[0-9]+$/) && quantity <= 10){
            correctInputPlace[4] = true;
            setQuantitybgc("white");
        }
        else{
            correctInputPlace[4] = false;
            setQuantitybgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        quantityverifyer();
    }, [quantity]);

    const [cost, setCost] = useState('');
    const [costbgc, setCostbgc] = useState("white");
    function costverifyer(){
        if(cost.match(/^[0-9]+\.+[0-9]+$/) || cost.match(/^[0-9]+$/) && cost <= 50000){
            correctInputPlace[5] = true;
            setCostbgc("white");
        }
        else{
            correctInputPlace[5] = false;
            setCostbgc("#f5c1c5");
        }
        veryfyHandler();
    }
    useEffect(() => {
        costverifyer();
    }, [cost]);
    
    const [type, setType] = useState(''); 
    function handleType(){
        if(selectedType.current.value === 'doc'){
            calculateddeliveryCost[(props.id - 2)*3 + 2] = 1;
        }
        if(selectedType.current.value === 'pos'){
            calculateddeliveryCost[(props.id - 2)*3 + 2] = 1.1;
        }
        if(selectedType.current.value === 'pal'){
            calculateddeliveryCost[(props.id - 2)*3 + 2] = 1.2;
        }
        if(selectedType.current.value === 'disk'){
            calculateddeliveryCost[(props.id - 2)*3 + 2] = 1.3;
        }
        // if(selectedType.current.value)
        console.log(selectedType.current.value);
    }
    const [pack, setPack] = useState(0);
    const [checked, setChecked] = useState(false)
    function handleClick(){
        if(checkPack.current.checked){setChecked(true)}else{setChecked(false)}
        if(checked){
            if(parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 6300){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 20;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 10000) {
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 40;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 30000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 80;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 500000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 160;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 1000000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 200;
            }                
        }else{
            if(parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 6300){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 0;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 10000) {
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 0;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 30000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 0;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 500000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 0;
            }else if (parseInt(height,10)*parseInt(width,10)*parseInt(len,10) <= 1000000){
                calculateddeliveryCost[(props.id - 2)*3 + 1] = 0;
            }    
        }
        console.log("cost with or without pack");
        setPack(calculateddeliveryCost[(props.id - 2)*3 + 1]);
        veryfyHandler();
        console.log("the pack "+pack);
        console.log(calculateddeliveryCost[(props.id - 2)*3 + 1]);
    }
    useEffect(() => {
        handleClick();
    }, [checked]);
    useEffect(() => {
        handleClick();
    }, [pack]);

    function veryfyHandler(){
        for(var i = 0; i < correctInputPlace.length; i++){
            if(correctInputPlace[i] === false){
                correctInput[props.id] = false;
                break;
            }
            else{
                correctInput[props.id] = true;
            }
        }
        if(correctInput[props.id] === true){
            calculateddeliveryCost[(props.id - 2)*3] = ((parseInt(weight,10)*2 * parseInt(quantity,10) + parseInt(cost,10)+0.001));
            console.log("the fuck "+pack);
        }
    }
    const checkPack= useRef();
    const selectedType = useRef();
    return(
        <div className="place" id={props.id} >
        <h3>Характеристики</h3>
        <div className="closeplace"><FontAwesomeIcon icon={faWindowClose} color="black" onClick={() => props.remove(props)} style={props.dis}/></div>
        <label htmlFor="">Вид </label><select ref={selectedType} onClick={handleType} name="select" className="type" onChange={event => setType(event.target.value)}> 
        <option value="doc">Документи</option>
        <option value="pos" selected>Посилка</option>
        <option value="pal">Палети</option>
        <option value="disk">Шини та диски</option>
        </select><br /><div className="line"></div>                        
        <label htmlFor="">Вага(кг)</label><input type="number" min="1" max="30" className="weight" value={weight} onChange={event => setWeight(event.target.value)} style={{backgroundColor: weightbgc}}/>
        <label htmlFor="">Ширина(см)</label><input type="number" min="1" max="100" className="width" value={width} onChange={event => setWidth(event.target.value)} style={{backgroundColor: widthbgc}}/>
        <label htmlFor="">Довжина(см)</label><input type="number" min="1" max="100" className="length" value={len} onChange={event => setLen(event.target.value)} style={{backgroundColor: lenbgc}}/>
        <label htmlFor="">Висота(см)</label><input type="number" min="1" max="100" className="height" value={height} onChange={event => setHeight(event.target.value)} style={{backgroundColor: heightbgc}}/><br /><div className="line"></div>
        <label htmlFor="">Кількість</label><input type="number" min="1" max="10" className="quantity" value={quantity} onChange={event => setQuantity(event.target.value)} style={{backgroundColor: quantitybgc}}/>
        <label htmlFor="">Вартість(грн)</label><input type="number" min="1" max="50000" className="cost" value={cost} onChange={event => setCost(event.target.value)} style={{backgroundColor: costbgc}}/><br /><div className="line"></div>
        <input type="checkbox"  id="pack" ref={checkPack} onClick={handleClick} checked={checked}/><p>Пакування</p>
    </div>
    );
};
export default Place;