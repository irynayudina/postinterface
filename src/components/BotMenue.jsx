import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react' 
const BotMenue = () => {
    const [show, setShow] = useState('none');
const showDropdown = (e)=>{
    setShow("inline-block");
}
const hideDropdown = e => {
    setShow('none');
}
    return(
        <div>
            <div className="bot-menue">
                <Link to="/calculator" style={{ textDecoration: 'none' }}><div className="calc clickable" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}><h2>Калькулятор</h2></div></Link>
                <div className="track clickable"><h2>Відстежити</h2></div>
            </div>            
            <div className="refwrap"><div className="refHover" id="calcRef" style={{display:show}} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}><a href="/reference#calcost" style={{textDecoration:'none'}}>?</a></div></div>
        </div>
        
    );
};
export default BotMenue;