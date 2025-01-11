import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading state to false after delay (simulating data loaded)
    };

    fetchData(); // Call fetchData function
  }, []);

  return (
    <Router basename="/portfolio"> {/* Ensure the basename matches your repository name */}
      {isLoading ? (
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/why-hire-me" element={<WhyHireMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
