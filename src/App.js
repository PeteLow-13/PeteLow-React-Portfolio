import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Wrapper from "./components/Wrapper";
import HomePage from './pages/HomePage.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>   
          <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/HomePage' component={HomePage} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path ='/Portfolio' component={Portfolio} />
          <Footer />
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
