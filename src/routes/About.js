import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./About.css";

function About() {
  const handleEmailClick = () => {
    const email = 'uzairjeelani@gmail.com';
  
    // Creates a temporary textarea to copy the email to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = email;
  
    // Sets the textarea to be invisible
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
  
    // Appends the textarea to the document
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
            I am from Gastonia, North Carolina and I am currently enrolled at
            The University of North Carolina at Charlotte majoring in Computer Science.
          </p>
          <p>
          I discovered my passion for computer science during my sophomore year of college and instantly 
          came to the conclusion that getting into the technology space was for me. As I embarked on creating small projects using 
          HTML, CSS, and JavaScript, witnessing my ideas and hard work come to life solidified 
          my commitment to pursuing a computer science degree.
          </p>
          <p>
            Every day I strive to show the greatest part of who I am. I enjoy
            learning new things and meeting new people. During my free time, I will
            most likely be working out, hanging out with my friends, or keeping myself
            occupied with some sort of work or project.
          </p>
          <button className="cv-button">
            <a href="/Resume.docx.pdf" download="Uzairs_Updated_Resume.pdf">
              Download CV
            </a>
          </button>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>Associates Degree - Central Piedmont Community College</p>
          <p>Bachelors Degree - University of North Carolina at Charlotte</p>
          <p>Current Major GPA: 3.93/4.0</p>
          <p>4x Chancellors list</p>
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
              <li>- SQL</li>
              <li>- R</li>
            </ul>
          </div>
          <div className="skill-category">
            <p>Softwares/Databases</p>
            <ul>
              <li>- Adobe</li>
              <li>- AWS</li>
              <li>- Microsoft Office</li>
              <li>- MySQL</li>
              <li>- Oracle</li>
            </ul>
          </div>
          <div className="skill-category">
            <p>Soft Skills</p>
            <ul>
              <li>- Adaptability</li>
              <li>- Leadership</li>
              <li>- Problem Solving</li>
              <li>- Strong Work Ethic</li>
            </ul>
          </div>
        </div>
        <div className="experiences">
          <h2>Experience</h2>
          <div className="experience-item">
  <h3>Verizon Wireless Corporate</h3>
  <p>April 2021 - July 2022</p>
  <p>Sales Representative/Specialist</p>
  <ul>
    <li>
      - Troubleshooting technology specialist for tablets and mobile devices, 
      including Apple and Android products.
    </li>
    <li>
      - Achieved Salesman of the Month in the third month, 
      exceeding multiple sales target categories.
    </li>
  </ul>
</div>
<div className="experience-item">
  <h3>AT&T</h3>
  <p>August 2022 - January 2023</p>
  <p>IHX Field Sales Executive</p>
  <ul>
    <li>
      - Provided the highest level of management 
      white-glove service for all software sales.
    </li>
    <li>
      - Demonstrated strong sales skills with a proven 
      track record of driving sales growth and implementing 
      new business tactics.
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
