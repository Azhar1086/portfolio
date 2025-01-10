import './main2.css';
import pro from '../images/pro.png'
import github from '../images/github.png';
import linked_in from '../images/linked_in.png';

import { useEffect, useState } from 'react';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('mainy');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inViewport) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger once to check on load
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="mainy" className={`Main ${isVisible ? 'visible' : ''}`}>
      <div className="main_left">
        <h3 className="it_is_me">Hey! It's Me</h3>
        <h2 className="names">Muhammad Azhar</h2>
        <p className="i_am_a">
          I am a&nbsp;<span className="typewriter"></span>
        </p>
        <div className="flex1">
          <p className="follow_me">Follow me: </p>
          <div className="logos">
            
            <a href="https://github.com/Azhar1086" target="_blank" rel="noreferrer">
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/hafizazhar1086"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked_in} alt="" />
            </a>
           
          </div>
        </div>
        <div className="flex1">
          <a href="muhammad24azhar02@gmail.com">
            <button className="buttonc">E-Mail Me</button>
          </a>
          <button
            onClick={() =>
              window.open(
                "",
                "_blank"
              )
            }
            className="buttonb"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="right_main">
        <img
          className="behind_the_image"
          src={pro}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
