import React from 'react'
import Button from '../components/Button';
import Place from '../components/Place';
const En = () => {
    return(
        <div className="the-root-body"><div className="en">
            <div className="plain-form">
                <h2>Створення електронної накладної</h2>
                <form action="">
                    <label htmlFor=""><p>Відправник</p></label><input type="text" id="lastnamev" className="namefield"/><input type="text" id="namev" className="namefield"/><input type="text" id="forenamev" className="namefield"/>
                    <label htmlFor=""><p>тел.</p></label><input type="text" id="phonev" className="phonefield"/><br />
                    <label htmlFor=""><p>Відділення місто</p></label><input type="text"  className="cityfield"/>
                    <label htmlFor=""><p>відділення</p></label><input type="text"  className="cityfield"/><br />
                    <label htmlFor=""><p>Отримувач</p></label><input type="text" id="lastname" className="namefield"/><input type="text" id="name" className="namefield"/><input type="text" id="forename" className="namefield"/>
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