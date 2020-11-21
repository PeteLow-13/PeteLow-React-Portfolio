import React from 'react';
import Container from '../components/Container';
import { Component } from 'react';
import ProjectCard from '../components/Project Card';
import portfolioContent from '../portfolioContent.json';


class Portfolio extends Component {
    state = {
        portfolioContent
    }
    
    
    render(){
        return(
            <Container>
                {this.state.portfolioContent.map(portfolioItem => (
                <ProjectCard
                id={portfolioItem.id}
                key={portfolioItem.id}
                title={portfolioItem.title}
                image={portfolioItem.image}
                description={portfolioItem.description}
                link={portfolioItem.link} 
                />
                ))}
             </Container>
    );
    }
}

export default Portfolio;

