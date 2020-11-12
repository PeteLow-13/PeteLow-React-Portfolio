import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/index.js';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Wrapper from "./components/Wrapper";
import HomePage from './pages/HomePage.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Wrapper>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path ='/portfolio' component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
