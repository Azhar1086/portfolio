import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import AboutMe from './components/About_me';
import Main from './components/Main';
import Skills from './components/Skills';
import WhyHireMe from './components/WhyHireMe';
import Projects from './components/projects';
import ContactForm from './components/ContactForm';
function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate async data fetching or any async operation
    const fetchData = async () => {
      // Simulate delay for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading state to false after delay (simulating data loaded)
    };

    fetchData(); // Call fetchData function
  }, []);
  return (
    <div>
    {isLoading ? (
        <div className="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>

      </div>
    ) :(
    <div className="App">
      
      <Navbar/>
      <Main id="mainy" />
      <AboutMe id="aboutMey" />
      <WhyHireMe />
      <Skills id="skills" />
      <Projects id="project" />
      <ContactForm id="contact" />
    </div>
    )
  }
  </div>
  );
}

export default App;
