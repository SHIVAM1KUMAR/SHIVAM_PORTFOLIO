import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">
      
      
      {/* Technical Skills */}
      <div className="technical-skills">
        <h2>Technical Skills</h2>
        <div className="skill-bar">
          <span>HTML</span>
          <div className="progress">
            <div className="progress-fill html"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>CSS</span>
          <div className="progress">
            <div className="progress-fill css"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>JavaScript</span>
          <div className="progress">
            <div className="progress-fill js"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>React</span>
          <div className="progress">
            <div className="progress-fill react"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>Node.js</span>
          <div className="progress">
            <div className="progress-fill node"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>SQL</span>
          <div className="progress">
            <div className="progress-fill sql"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>Python</span>
          <div className="progress">
            <div className="progress-fill python"></div>
          </div>
        </div>
        <div className="skill-bar">
          <span>Java</span>
          <div className="progress">
            <div className="progress-fill java"></div>
          </div>
        </div>
      </div>
      
      {/* Soft Skills */}
      <div className="soft-skills">
        <h2>Soft Skills</h2>
        <div className="circular-skill">
          <div className="circle leadership">
            <span>Leadership<br />85%</span>
          </div>
          <div className="circle time">
            <span>Time Management<br />90%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
