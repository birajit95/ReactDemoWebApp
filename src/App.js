import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './menu/Navbar';
import {Switch, Route, Redirect} from 'react-router-dom';


const App = ()=>{
  return(
    <>
      <Navbar />
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/service' component={Service} />
         <Route exact path='/contact' component={Contact} />
         <Redirect to='/'/>
      </Switch>
    </>
  );
}

export default App;