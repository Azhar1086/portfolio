import React from 'react';
import './skills.css';
import './new.css';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="heading1">Projects</h2>
      <h3 className="heading2">Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML" />
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS" />
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="JavaScript" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Node JS" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Express JS" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Mongo DB" />
        </div>
      </div>

    </div>
  );
};

export default Skills;
