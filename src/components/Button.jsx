import React from 'react';
const Button = (props) =>{
    return(
        <div className="button clickable" onClick={props.onClick}><h3>{props.name}</h3></div> 
        
    );
};
export default Button;