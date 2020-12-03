import React from 'react';
import Container from '../components/Container';
import { Component } from 'react';
import ProjectCard from '../components/Project Card';
import portfolioContent from '../portfolioContent.json';
import Col from '../components/Col';
import Row from '../components/Row';


class Portfolio extends Component {
    state = {
        portfolioContent
    }
    
    
    render(){
        return(
            <Container>
                <Row>
                    <Col size='md-6'>
                        {portfolioContent.map(portfolioItem => (
                        <ProjectCard
                        id={portfolioItem.id}
                        key={portfolioItem.id}
                        title={portfolioItem.title}
                        image={portfolioItem.image}
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

