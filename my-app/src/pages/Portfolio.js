import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Portfolio () {
    return (
        <Container style={{ marginTop: 20 }}>
            <Row>
                <Col size='md-12'>
                    <h2>Portfolio</h2>
                </Col>
            </Row>
            <Row>
                <Col size='md-12'>
                    <div class="card border-info mb-3">
                        <div class="card">
                            <img src="assets/sk8tool.png" class="card-img-top" alt="Sk8Tool screenshot"/>
                            <div class="card-body">
                                <h5 class="card-title">Sk8Tool</h5>
                                <p class="card-text">Sk8Tool is Saktefinder but improved. We've added a database to store skate spots and optimized the perfromance of it's first iteration</p>
                                <a href="https://sk8fndr.herokuapp.com/" class="card-link" target="blank">Sk8Tool</a>
                            </div>
                        </div>
                    </div>
                    <div class="border-info mb-3">
                        <div class="card">
                            <img src="assets/burgerApp.png" class="card-img-top" alt="Burger Party Screen Shot"/>
                            <div class="card-body">
                                <h5 class="card-title">Burger Party</h5>
                                <p class="card-text">A fun app to save burgers you'd like to eat</p>
                                <a href="https://morning-meadow-19398.herokuapp.com/" class="card-link" target="blank">Burger Party</a>
                            </div>
                        </div>
                    </div>
                    <div class="card border-info mb-3">
                        <div class="card">
                            <img src="assets/skatefinder.png" class= "img-fluid" alt="SkateFinder-screenshot"/>
                            <div class="card-body">
                                <h5 class="card-title">Skatefinder</h5>
                                <p class="card-text">We designed SkateFinder to help skaters and their families find skateparks and shops. They can also see get weather information about days when they plan to visit.</p> 
                                    <a href="https://danielyu0864.github.io/Project-01-Skatefinder/" class="card-link" target="blank">Skatefinder</a>
                                </div>
                        </div>
                    </div>
                    <div class="card border-info mb-3">
                        <div class="card">
                            <img src="assets/weatherdashboard.png" class="card-img-top" alt="Weather dashboard screen shot"/>
                            <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">An app to check the weather where you are and where you're going</p>
                                <a href="https://petelow-13.github.io/WeatherApp/" class="card-link" target="blank">Weather Dashboard</a>
                            </div>
                        </div>
                    </div>
                    <div class="card border-info mb-3">
                        <div class="card border-info mb-3">
                            <img src="assets/scheduler.png" class="card-img-top" alt="DayScheduler screenshot"/>
                            <div class="card-body">
                                <h5 class="card-title">DayScheduler</h5>
                                <p class="card-text">A tool to help plan your day utilizing Moment.</p>
                                <a href="https://petelow-13.github.io/DayScheduler/" class="card-link" target="blank">DayScheduler</a>
                            </div>
                        </div>
                    </div>
                    <div class="card border-info mb-3">
                        <div class="card">
                            <img src="assets/codeQuiz.png" class="card-img-top" alt="CodeQuiz Screenshot"/>
                            <div class="card-body">
                                <h5 class="card-title">Code Quiz Game</h5>
                                <p class="card-text">A brief quiz about coding using java script</p>
                                <a href="https://petelow-13.github.io/QuizGame-plow/" class="card-link" target="blank">Code Quiz</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            

        </Container>
    );
}

export default Portfolio;
