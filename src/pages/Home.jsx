import React from 'react';
import Logo from '../components/Logo';
import ViewArray from '../globals/ViewArray';
const Home = () => {
    if(ViewArray[0]){
        return(
            <div className="home"> 
            <div>
                <Logo />
                <h2>Швидка доставка в усі міста України</h2>
            </div>
            </div>
        );
    }
    else{
        return("");
    }    
};
export default Home;
