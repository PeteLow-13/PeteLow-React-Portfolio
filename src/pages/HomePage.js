import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';


function HomePage(){
    return(
        <Container>
            {/* <h2>About Me</h2>

            <img src='./assets/IMG_0670.jpeg' class="img-fluid" alt='Pete Low'/> 

            <p>I'm new to web-development having spent the majority of my career in the restaurant industry. My goal is to help your web operations run smoother and look better. I bring an eye on operations larger than that of your average developer. Your user experience is more important than anything else. </p>
            <a href="https://docs.google.com/document/d/e/2PACX-1vRFqP6CQYvX7ZnPlqmLWL9H0AnkR5qKOoxnnJ5A_GA5tLqbQR12TcPP36MXK8tqQgMgP_VL9XGGlNwe/pub" target="blank">Check out my Resume</a> */}
           
            <Row>
                <Col size='md-12'>
                <h2>About Me</h2>
                </Col>
            </Row>
            <Row>
                <Col size='md-6'>
                    <img src='./assets/IMG_0670.jpeg' class="img-fluid" alt='Pete Low'/> 
                </Col>
                <Col size='md-6'>
                    <p>I'm new to web-development having spent the majority of my career in the restaurant industry. My goal is to help your web operations run smoother and look better. I bring an eye on operations larger than that of your average developer. Your user experience is more important than anything else. </p>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRFqP6CQYvX7ZnPlqmLWL9H0AnkR5qKOoxnnJ5A_GA5tLqbQR12TcPP36MXK8tqQgMgP_VL9XGGlNwe/pub" target="blank">Check out my Resume</a>
                </Col>
            </Row>
        </Container> 
    );
}

export default HomePage;