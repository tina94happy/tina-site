import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/CodingPage.css';

const CodingPage = () => {
  const projects = [
    {
      title: "Simple-FastAPI-On-AWS-EC2-Docker",
      description: "FastAPI project hosted on EC2 with Docker",
      tech: ["FastAPI", "AWS EC2", "Docker", "Python"],
      link: "https://github.com/tina94happy/Simple-FastAPI-On-AWS-EC2-Docker"
    },
    {
      title: "BookMaintainBackStage",
      description: "Backstage management system for book inventory",
      tech: ["JavaScript", "Vue", "Express"],
      link: "https://github.com/tina94happy/BookMaintainBackStage"
    },
    {
      title: "JavaMaze",
      description: "A classic maze game implemented in Java",
      tech: ["Java", "OOP", "Game Design"],
      link: "https://github.com/tina94happy/JavaMaze"
    },
    {
      title: "CX-api-tester",
      description: "API testing project for CX One",
      tech: ["Python", "API", "Automation"],
      link: "https://github.com/tina94happy/CX-api-tester"
    },
    {
      title: "pdf-merger",
      description: "Merge multiple PDFs using Python",
      tech: ["Python", "PDF", "Automation"],
      link: "https://github.com/tina94happy/pdf-merger"
    },
    {
      title: "Simple-FastAPI-Demo",
      description: "Simple FastAPI project demo",
      tech: ["Python", "FastAPI"],
      link: "https://github.com/tina94happy/Simple-FastAPI-Demo"
    }
  ];

  return (
    <div className="coding-page">
      <div className="profile-header">
        <h1>Tina's Code Portfolio</h1>
        <div className="profile-links">
          <a href="https://github.com/tina94happy" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tina-su-01b139210/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="coding-container">
        <div className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <Link to="/" className="back-home-btn">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
