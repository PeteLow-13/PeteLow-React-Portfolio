import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
// import { Component } from 'react';

function Contact () {
    return (
       <Container>
           <Row>
               <Col size='md-6'>
                    <div class="card border-info mb-3">
                        <img src="assets/IMG_0221.jpeg" class="card-img-top" alt="Keyboard and Flip phone"/>
                        <div class="card-header">
                            <h2 class="card-title">Contact Me</h2>
                            <p class="card-text">I look forward to connecting with you.</p>
                        </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Call: (206)-617-8254</li>
                                <li class="list-group-item">Email: pedritolow@gmail.com</li>
                                <li class="list-group-item">Connect on Social:</li>
                                <a href="https://www.linkedin.com/in/peter-low-312a88183" class="card-link" target="blank">LinkedIn</a>
                            <a href="https://github.com/PeteLow-13" class="card-link" target="blank">Github</a>
                            </ul>
                        <div class="card-body">
                            
                            <a href="https://www.linkedin.com/in/peter-low-312a88183" class="card-link" target="blank">LinkedIn</a>
                            <a href="https://github.com/PeteLow-13" class="card-link" target="blank">Github</a>
                        </div>
                    </div>
               </Col>
           </Row>

       </Container>
    );
}

export default Contact;