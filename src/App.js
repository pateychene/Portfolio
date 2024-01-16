// App.js
import React from 'react';
import Header from './components/header';
import Navbar from './components/Nav.js';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/main.scss';
import './styles/responsive.scss';

function App() {
    return (
        
            <div>
                <Header />
                <Navbar />
                <About />
                <Skills />
                <Projects />
                
    
                <footer>
                    {/* Copyright and additional information */}
                </footer>
            </div>
        
    );
}

export default App;
