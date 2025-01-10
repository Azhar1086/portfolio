import React from 'react';
import './why.css';
import scholar from '../images/scholarship.png';
import project from '../images/project.png';
import codechef from '../images/codechef.png';
import leetcode from '../images/leetcode.png';

const WhyHireMe = () => {
  return (
    <div>
      <h2 className="heading1">Why Hire Me?</h2>
      <div className="neww">
        <div className="modiv">
          <div className="flex2">
            <div className="box">
              <img src={scholar} alt="" className="why_logo" />
              <h4 className="mid_text">2019</h4>
              <p className="main_text_why">NTSE Scholar</p>
            </div>
            <div className="box">
              <img src={project} alt="" className="why_logo" />
              <h4 className="mid_text">6+</h4>
              <p className="main_text_why">Completed Projects</p>
            </div>
          </div>
        </div>
        <div className="modiv">
          <div className="flex2">
            <div className="box">
              <img src={codechef} alt="" className="why_logo" />
              <h4 className="mid_text">4★</h4>
              <p className="main_text_why">Codechef Rating</p>
            </div>
            <div className="box">
              <img src={leetcode} alt="" className="why_logo" />
              <h4 className="mid_text">150</h4>
              <p className="main_text_why">LeetCode Problems Solved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
