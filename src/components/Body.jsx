import React, { useState } from 'react'
import BotMenue from '../components/BotMenue';
import DocumentView from '../components/DocumentView';
import Footer from '../components/Footer';
import Header from "../components/Header";
import About from '../pages/About';
import Fop from '../pages/Fop';
import Vacation from '../pages/Vacation';
import Map from '../pages/Map';
import Osoba from '../pages/Osoba';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Calculator from '../pages/Calculator';
import SignUp from '../pages/SingUp';
import En from '../pages/En';
import Userpage from '../pages/Userpage';
const Body = () => {
    const [count, setCount] = useState(0)
    function decrement() {
      setCount(count + 1)
    }
    return(
        <div className="the-root-body" onClick = {decrement}> 
            

            {/* <DocumentView /> */}
            
            <Home />
            {/* <About /> */}
            {/* <Vacation /> */}
            {/* <Map /> */}
            {/* <Fop /> */}
            {/* <Osoba /> */}
            {/* <LogIn /> */}
            {/* <SignUp /> */}
            {/* <Calculator /> */}
            {/* <En /> */}
            {/* <Userpage /> */}

            <BotMenue />
            <Footer />
        </div>
    );
};
export default Body;