import React from 'react'
import { useState } from 'react';
import Button from '../components/Button';
import Place from '../components/Place';
const En = () => {
    // const [cityfrom, setCityfrom] = useState('');    
    // const [cityfrombgc, setCityfrombgc] = useState("white");
    // const [typeErrorcf, setTypeErrorcf] = useState('');
    // function cityfromverifyer(){ 
    //     if(cityfrom.match(/^[a-zA-Z]+$/)){
    //         correctInput[0]= true;    
    //         setTypeErrorcf('');
    //         setCityfrombgc("white");
    //     }
    //     else{
    //         // setCorrectInput(correctInput[0] = false);
    //         correctInput[0]= false; 
    //         setTypeErrorcf('Дозволені лише букви');
    //         setCityfrombgc("#f5c1c5");
    //     }            
    // }
    // useEffect(() => {
    //     cityfromverifyer();
    // }, [cityfrom]); 

    // inside the text field input value={cityfrom} onChange={event => setCityfrom(event.target.value)} style={{backgroundColor: cityfrombgc}}/><p className="error" style={{top: "-20px", left: "-150px"}}>{typeErrorcf}</p>
    return(
        <div className="the-root-body"><div className="en">
            <div className="plain-form">
                <h2>Створення електронної накладної</h2>
                <form action="">
                    {/* insside selsect  ref={selectedType} onClick={handleType}  onChange={event => setType(event.target.value)} */}
                <select name="select" className="type"> 
                <option value="doc">Документи</option>
                <option value="pos" selected>Посилка</option>
                <option value="pal">Палети</option>
                <option value="disk">Шини та диски</option>
                </select><br />
                    <label htmlFor=""><p>Відправник</p></label>
                    <input type="text" id="lastnamev" className="namefield"/>
                    <input type="text" id="namev" className="namefield"/>
                    <input type="text" id="forenamev" className="namefield"/>
                    <label htmlFor=""><p>тел.</p></label><input type="text" id="phonev" className="phonefield"/><br />

                    <label htmlFor=""><p>Відділення місто</p></label><input type="text"  className="cityfield"/>
                    <label htmlFor=""><p>відділення</p></label><input type="text"  className="cityfield"/><br />

                    <label htmlFor=""><p>Отримувач</p></label>
                    <input type="text" id="lastname" className="namefield"/>
                    <input type="text" id="name" className="namefield"/>
                    <input type="text" id="forename" className="namefield"/>
                    <label htmlFor=""><p>тел.</p></label><input type="text" id="phone" className="phonefield"/><br />

                    <label htmlFor=""><p>Відділення місто</p></label><input type="text" className="cityfield"/>
                    <label htmlFor=""><p>відділення</p></label><input type="text"  className="cityfield"/><br />
                    <Place />
                    <p className="clickable">+ додати місце</p><br />
                    <label htmlFor=""><p>Вартість доставки (автоматично по характеристикам)</p></label><div className="en-cost">000</div><p> грн.</p><br />
                    <input type="checkbox"/><p>Сплатити за отримувача</p><br />
                    <input type="checkbox"/><p>Зберігання протягом 5 днів</p><br />
                    <label htmlFor=""><p>Накладений платіж</p></label><div className="en-cost">000</div><p> грн.</p><br />
                    <label htmlFor=""><p className="com">Коментар</p></label><textarea name="comment" id="comment" cols="30" rows="4" maxLength="100"></textarea>
                    <Button name={"Сформувати накладну"}/>    
                </form>
            </div> 
        </div></div>
    );
};
export default En;