import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import IMG_0670 from '../assets/IMG_0670.jpeg';

function HomePage(){
    return(
        <Container>
            <Row>
                <Col size='md-12'>
                <h2>About Me</h2>
                </Col>
            </Row>
            <Row>
                <Col size='md-6'>
                    <img src={ IMG_0670 } class="img-fluid" alt='Pete Low'/>  
                </Col>
                <Col size='md-6'>
                    <p>I'm new to web development, having completed the Univeristy of Washington's coding bootcamp. I'm ready to jump in and help with your projects and show you what I can do. I'm excited to embark on this new career journey in a field I love.</p>
                    <p>Before learning to code I spent 15 years working in kitchens in almost every role. I've trained and developed countless cooks and worked to find ways to optimize efficiency and develop skills. Problem solving and training are my specialties. I love working with people from all different backgrounds and learning from others.</p>
                    <p>During my 4 years spent in Operations I learned what it takes to keep business up and running. Coming up with solutions to problems on the fly and ensuring that if we ran into a challenge we could find a solution. I learned so many new skills that opened my eyes to so things I hadn't learned before.</p>
                    <p>I'm looking to take the many skills I've aquired over the years into web development. This latest career shift is the latest challenge that I intend to learn everything I can from. </p>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRFqP6CQYvX7ZnPlqmLWL9H0AnkR5qKOoxnnJ5A_GA5tLqbQR12TcPP36MXK8tqQgMgP_VL9XGGlNwe/pub" target="blank">Please check out my Resume</a>
                </Col>
            </Row>
        </Container> 
    );
}

export default HomePage;