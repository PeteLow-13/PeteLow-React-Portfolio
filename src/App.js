import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderNav from './components/HeaderNav/index.js';
import Wrapper from "./components/Wrapper";
import HomePage from './pages/HomePage.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import Footer from './components/Footer/index.js';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Wrapper>   
          <HeaderNav />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path ='/Portfolio' component={Portfolio} />
          <Footer />
        </Wrapper>
      </Router> 
    </div>
    
  );
}

export default App;
