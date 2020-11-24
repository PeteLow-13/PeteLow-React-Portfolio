import React from 'react';
import Container from '../Container';
import Navbar from '../Navbar';
import './style.css';


function Header () {
    return (
        <Container>
            <h1>Pete Low</h1>
            <Navbar />
        </Container>
        
    );
}

export default Header;