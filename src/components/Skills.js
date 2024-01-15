// components/Skills.js
import React from 'react';
import reactLogo from '../images/React-icon.svg.png';
import jsLogo from '../images/JavaScript-logo.png';
import sassLogo from '../images/Sass_Logo.png';
import nodejsLogo from '../images/Node.js_logo.png';
import expressLogo from '../images/Express.png';
import mongodbLogo from '../images/MongoDB_SpringGreen.png';
import '../styles/main.scss';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul className="skills-list">
                <li>
                    <img src={reactLogo} alt="React Logo" />
                </li>
                <li>
                    <img src={jsLogo} alt="JavaScript Logo" />
                </li>
                <li>
                    <img src={sassLogo} alt="Sass Logo" />
                </li>
                <li>
                    <img src={nodejsLogo} alt="Node.js Logo" />
                </li>
                <li>
                    <img src={expressLogo} alt="Express Logo" />
                </li>
                <li>
                    <img src={mongodbLogo} alt="MongoDB Logo" />
                </li>
                {/* Add more skills with their logos */}
            </ul>
        </section>
    );
}

export default Skills;
