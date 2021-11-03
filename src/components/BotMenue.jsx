import React from 'react'
import ShowInView from '../globals/ShowInView';
const BotMenue = () => {
    return(
        <div className="bot-menue">
            <div className="calc clickable" onClick={() => ShowInView(8)}><h2>Калькулятор</h2></div>
            <div className="track clickable"><h2>Відстежити</h2></div>
        </div>
    );
};
export default BotMenue;