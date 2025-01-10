import React, { useEffect, useState } from 'react';
import './about_me.css';
import pro from '../images/pro.png'
const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('aboutMe');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on component mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="aboutMe"
      className={`about_me ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="heading">About Me</h2>
      <div className="about_me_info">
        <div className="about_me_left">
          <p>
            Hello! I'm Muhammad Azhar, a passionate MERN stack developer with a keen interest in both front-end and back-end technologies. I specialize in creating dynamic, responsive web applications. I am always eager to learn new things and improve my skills. Let's connect and collaborate on innovative projects!
          </p>
          <p>
            Skills: JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Git, REST APIs, and more.
          </p>
          <p>
            <strong>Looking forward to new challenges and opportunities!</strong>
          </p>
        </div>
        <div className="about_me_right">
          {/* Replace with your image URL */}
          <img src={pro} alt="Muhammad Azhar" className="profile_image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
