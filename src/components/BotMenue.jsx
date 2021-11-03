import React from 'react'
import { Link } from 'react-router-dom';
const BotMenue = () => {
    return(
        <div className="bot-menue">
            <Link to="/calculator" style={{ textDecoration: 'none' }}><div className="calc clickable"><h2>Калькулятор</h2></div></Link>
            <div className="track clickable"><h2>Відстежити</h2></div>
        </div>
    );
};
export default BotMenue;