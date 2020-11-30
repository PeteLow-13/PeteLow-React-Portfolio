import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import IMG_0221 from '../assets/IMG_0221.jpeg';
import './contact.css'

function Contact () {
    return (
       <Container>
           <Row>
               <Col size="md-6">
                    <div className="card">
                        <img src={ IMG_0221 } className="card-img-top" alt="Keyboard and Flip phone"/>
                        <div class="card-header">
                            <h2 className="card-title">Contact Me</h2>
                            <p className="card-text">I look forward to connecting with you.</p>
                        </div>
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item">Call: (206)-617-8254</li>
                                <li className="list-group-item">Email: pedritolow@gmail.com</li>
                                <li className="list-group-item">Connect on Social:  <a href="https://www.linkedin.com/in/peter-low-312a88183" class="card-link" target="blank">LinkedIn</a>
                            <a href="https://github.com/PeteLow-13" class="card-link" target="blank">Github</a></li>
                               
                            </ul>
                    </div>
               </Col>
           </Row>
       </Container>
    );
}

export default Contact;