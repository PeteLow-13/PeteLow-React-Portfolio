import React from 'react';
import Container from '../components/Container';
import { Component } from 'react';
import ProjectCard from '../components/Project Card';
import portfolioContent from '../portfolioContent.json';
import Col from '../components/Col';
import Row from '../components/Row';
import sk8tool from '../assets/sk8tool.png'
import burgerApp from '../assets/burgerApp.png'
import skatefinder from '../assets/skatefinder.png'
import weatherdashboard from '../assets/weatherdashboard.png'
import scheduler from '../assets/scheduler.png'
import codeQuiz from '../assets/codeQuiz.png'

const portfolioImages = [sk8tool, burgerApp, skatefinder, weatherdashboard, scheduler, codeQuiz]


class Portfolio extends Component {
    state = {
        portfolioContent
    }
    
    
    render(){
        return(
            <Container>
                <Row>
                    <Col size='md-6'>
                        {this.state.portfolioContent.map((portfolioItem, i) => (
                        <ProjectCard
                        id={portfolioItem.id}
                        key={portfolioItem.id}
                        title={portfolioItem.title}
                        image={portfolioImages[i]}
                        description={portfolioItem.description}
                        link={portfolioItem.link} 
                        />
                        ))}
                    </Col>
                </Row>
             </Container>
    );
    }
}

export default Portfolio;

