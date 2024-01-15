// components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/ProjectData';
import '../styles/main.scss';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
