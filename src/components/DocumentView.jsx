import React from 'react';
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
const DocumentView = () => {
    return(
        <div className="view"> 
          <Home />
          <About />
          <Vacation />
          <Map />
          <Fop />
          <Osoba />
          <LogIn />
          <SignUp />
          <Calculator />
          <En />
          <Userpage />
        </div>
    );
};
export default DocumentView;