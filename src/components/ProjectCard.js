// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
    const { name, description, technologies, githubLink, demoLink } = project;

    return (
        <div className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            {technologies && (
                <p className="technologies">
                    <strong>Technologies:</strong> {technologies.join(', ')}
                </p>
            )}
            <div className="project-links">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
                {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
