import React from 'react';
import About from './pages/About';
import Fop from './pages/Fop';
import Vacation from './pages/Vacation';
import Map from './pages/Map';
import Osoba from './pages/Osoba';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Calculator from './pages/Calculator';
import SignUp from './pages/SingUp';
import En from './pages/En';
import Userpage from './pages/Userpage';
import Header from "./components/Header";
import BotMenue from './components/BotMenue';
import Footer from './components/Footer';
import Reference from './pages/reference';
import './styles/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Enlist from './pages/EnList';
function App() {
  return (
    <BrowserRouter >  
    {/* <Switch>
      <Redirect to="/home" />
    </Switch> */}
    <Route path='/dovidka' component={() => { 
     window.location.href = "D:/CommonPersonal/interfaces/post/src/pages"; 
     return null;
    }}/>
    <Route path="/home">
    <Header/>
    <Home />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/about">
    <Header/>
    <About />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/vacation">
    <Header/>
    <Vacation />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/map">
    <Header/>
    <Map />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/fop">
    <Header/>
    <Fop />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/osoba">
    <Header/>
    <Osoba />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/login">
    <Header/>
    <LogIn />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/signup">
    <Header/>
    <SignUp />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/calculator">
    <Header/>
    <Calculator />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/en">
    <Header/>
    <En />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/userpage">
    <Header/>
    <Userpage />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/enlist">
    <Header/>
    <Enlist />
    <BotMenue />
    <Footer />
    </Route>
    <Route path="/reference">
    <Header/>
    <Reference />
    <BotMenue />
    <Footer />
    </Route>
    </BrowserRouter>
    // <div className="App">
    //   <Header/>
    //   <Home />
    //         <About />
    //         <Vacation />
    //         <Map />
    //         <Fop />
    //         <Osoba />
    //         <LogIn />
    //         <SignUp />
    //         <Calculator />
    //         <En />
    //         <Userpage />
    //   <BotMenue />
    //   <Footer />
    // </div>
  );
}

export default App;
