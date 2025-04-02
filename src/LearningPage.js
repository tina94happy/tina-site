import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/LearningPage.css';

const notes = [
  {
    title: 'Advent of Cyber 2024 Day 1',
    link: 'https://medium.com/@wantingsu64/e6eb081f983d',
    description: 'Cyber, OPSEC, digital identities'
  },
  {
    title: 'Docker & Kubernetes',
    link: 'https://medium.com/@wantingsu64/to-be-continu-62542c401506',
    description: 'To Be Continue'
  },
  {
    title: 'DevSecOps Concepts',
    link: 'https://medium.com/@wantingsu64/to-be-continu-62542c401506',
    description: 'To Be Continue'
  },
  {
    title: 'SQL & Data Pipelines',
    link: 'https://medium.com/@wantingsu64/to-be-continu-62542c401506',
    description: 'To Be Continue'
  },
  {
    title: 'Backend Architecture',
    link: 'https://medium.com/@wantingsu64/to-be-continu-62542c401506',
    description: 'To Be Continue'
  },
  {
    title: 'Cybersecurity Cheatsheet',
    link: 'https://medium.com/@wantingsu64/to-be-continu-62542c401506',
    description: 'To Be Continue'
  }
];

const LearningPage = () => {
  return (
    <div className="learning-page">
      <div className="profile-header">
        <h1>Learning</h1>
        <div className="profile-links">
          <a href="https://github.com/tina94happy" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tina-su-01b139210/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="overview-section">
        <h1>What I'm Learning 📘</h1>
        <div className="overview-blocks">
          {notes.map((note, index) => (
            <div key={index} className="overview-block">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <a href={note.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                View Note
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="button-container">
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default LearningPage;