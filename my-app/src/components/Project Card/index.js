import React from 'react';
import './style.css';

function ProjectCard(props) {
    
    return (
        // <div class="card border-info mb-3">
        <div className="card">
            <div className='img-container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className="card-body">
                <h5 className='project-title'>{props.title}Title</h5> 
                <p className="project-description">{props.description}</p>
                <a className='project-link' target='blank' href={props.link}>{props.title}</a>
            </div>
        </div>
    // </div>
    )
}

export default ProjectCard;