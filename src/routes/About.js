import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./About.css";

function About() {
  const handleEmailClick = () => {
    const email = 'uzairjeelani@gmail.com';
  
    // Creates a temporary textarea to copy the email to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = email;
  
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
  
    document.body.appendChild(textarea);
  
    // Focuses and select the text inside the textarea
    textarea.focus();
    textarea.select();
  
    try {
      // Attempts to copy the selected text to the clipboard
      document.execCommand('copy');
      alert(`Email copied to clipboard: ${email}`);
    } catch (err) {
      console.error('Unable to copy email to clipboard', err);
    } finally {
      // Removes the temporary textarea
      document.body.removeChild(textarea);
    }
  };
  
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="info-container">
        <div className="personal-info">
          <h2>Introduction</h2>
          <p>
            I am from Charlotte, North Carolina and am a computer science graduate from the University of North Carolina at Charlotte.
          </p>
          <p>
          I discovered my passion for computer science early on in my academic college career and immediately knew that a career in
          technology was my calling. As I delved into creating projects and mastering full stack development and cloud
          computing, watching my ideas and hard work materialize cemented my commitment to pursuing a computer science degree.
          </p>
          <p>
            Every day I strive to show the greatest part of who I am. I enjoy
            learning new things and meeting new people. During my free time, I will
            most likely be working out, hanging out with my friends, or keeping myself
            occupied with some sort of work or project.
          </p>
          <a href="https://drive.google.com/file/d/11RZ_YCSmsJHNf6pHPh1Ze0bwZ_Nyiy0a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cv-button">
              Resume
          </button>
          </a>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>Bachelors Degree: University of North Carolina at Charlotte - May 2024</p>
          <p>Major: Computer Science</p>
          <p>Magna Cum Laude Graduate</p>
          <p>GPA: 3.77/4.0</p>
          <p>3x Chancellors list</p>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skill-category">
            <p>Web/Programming Languages</p>
            <ul>
              <li>- HTML</li>
              <li>- CSS</li>
              <li>- JavaScript</li>
              <li>- Java</li>
              <li>- Python</li>
              <li>- C#</li>
              <li>- SQL</li>
              <li>- R</li>
            </ul>
          </div>
          <div className="skill-category">
            <p>Tools</p>
            <ul>
              <li>- AWS</li>
              <li>- Pandas</li>
              <li>- React</li>
              <li>- Angular</li>
              <li>- Node.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <p>Data Visualizations</p>
            <ul>
              <li>- Tableau</li>
              <li>- Power BI</li>
            </ul>
          </div>
        </div>
        <div className="experiences">
          <h2>Experience</h2>
<div className="experience-item">
  <h3>AT&T</h3>
  <p>August 2022 - January 2023</p>
  <p>IHX Field Sales Executive</p>
  <ul>
    <li>
      - Employed strong communication and thinking skills 
      to gain control of interactions and close deals.
    </li>
    <li>
      - Exceeded 30+ new lines in the first month of 
      employment and provided the highest level of 
      management white-glove service for all software sales.
    </li>
  </ul>
</div>
<div className="experience-item">
  <h3>Verizon Wireless Corporate</h3>
  <p>April 2021 - July 2022</p>
  <p>Sales Representative/Specialist</p>
  <ul>
    <li>
      - Demonstrated outstanding ability to 
      multitask and work independently or as part of a team.
    </li>
    <li>
      - Salesman of the month in the third month of employment 
      and exceeding multiple sales target categories.
    </li>
  </ul>
</div>
        </div>
      </div>
      <div className="contact-info">
        <h2>Info/Contact Me</h2>
        <div className="contact-buttons">
          <a href="https://github.com/uzairjeelani" target="_blank" rel="noopener noreferrer">
            <button className="contact-button">
            <FaGithub size={30} style={{ marginRight: '8px' }} />
              GitHub
            </button>
          </a>
          <a href="http://www.linkedin.com/in/uzairjeel" target="_blank" rel="noopener noreferrer">
            <button className="contact-button">
            <FaLinkedin size={30} style={{ marginRight: '8px' }} />
              LinkedIn
            </button>
          </a>
          <button className="contact-button" onClick={handleEmailClick}>
            <FaEnvelope size={30} style={{ marginRight: '8px' }} />
              Email
            </button>
        </div>
      </div>
    </div>
  );
}

export default About;
