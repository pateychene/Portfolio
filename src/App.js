// App.js
import React from 'react';
import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/main.scss';
import './styles/responsive.scss';

function App() {
    return (
        
            <div>
                <Header />
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
