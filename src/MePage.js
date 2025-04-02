import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase,FaLaptopCode, FaCertificate, FaTimes, FaList } from 'react-icons/fa';
import './css/MePage.css';

const TimelineItem = ({ year, title, subtitle, description, icon, isLeft, category }) => (
  <div className={`timeline-item ${isLeft ? 'left' : 'right'} ${category}`}>
    <div className="timeline-content">
      <div className={`timeline-icon ${category}`}>{icon}</div>
      <div className="timeline-date">{year}</div>
      <h3 className="timeline-title">{title}</h3>
      <div className="timeline-subtitle">{subtitle}</div>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

const FilterButton = ({ active, onClick, children, category }) => (
  <button className={`filter-btn ${active ? 'active' : ''}`} onClick={onClick} data-category={category}>
    {children}
  </button>
);

const MePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const experiences = [
    {
      year: '2024 – 2025',
      title: 'Washington University in St. Louis',
      subtitle: 'Master of Information Systems Management',
      description: 'GPA 4.0. Coursework: IT Architecture, CTF, Intro to Cybersecurity | AWS/Azure Cloud Labs | K8s Architecture Labs',
      icon: <FaGraduationCap />, category: 'education'
    },
    {
      year: '2018 – 2023',
      title: 'Fu Jen Catholic University',
      subtitle: 'BS - Finance & International Business and Information Mgmt',
      description: 'Graduated with GPA 3.86. Outstanding Student Award & Python TA. Studied Finance, ML, and Data Mining.',
      icon: <FaGraduationCap />, category: 'education'
    },
    {
      year: '2023 – 2024',
      title: 'Security Engineer',
      subtitle: 'Galaxy Software Services',
      description: 'Integrated OSS vuln scanning in CI/CD with GitHub/GitLab/Jenkins. Delivered training to 40+ clients. Built Python-based scanning in Linux.',
      icon: <FaLaptopCode />, category: 'work'
    },
    {
      year: '2022 – 2023',
      title: 'SDET Intern',
      subtitle: 'Jkopay Corporation',
      description: 'Led Agile team for ad project. Simulated HTTP using Mockoon for gov APIs. Built auto accounting tool (Python+SQL), saving 60% manual time.',
      icon: <FaBriefcase />, category: 'work'
    },
    {
      year: '2021 – 2022',
      title: 'QA Engineer Intern',
      subtitle: 'CHT Security',
      description: 'Expanded SOC testing. Automated UI test with Selenium/Allure using Page Object Model, cutting time by 70%.',
      icon: <FaBriefcase />, category: 'work'
    },
    {
      year: '2021 – 2022',
      title: 'Capstone Project: iMirror',
      subtitle: 'Virtual Avatar Social Media with NFT',
      description: 'Used C# Normcore for real-time voice. Back-end with MySQL/phpMyAdmin. Built NFT trading backend.',
      icon: <FaGraduationCap />, category: 'work'
    },
    {
      title: 'Certifications & Skills',
      subtitle: 'CEH, Azure DP-900, Checkmarx, AWS Cloud Practitioner',
      description: 'Skills: Python, Shell, SQL, Docker, Jenkins, k8s, Git, Splunk, Azure DevOps, Terraform, Power BI, MySQL.',
      icon: <FaCertificate />, category: 'certification'
    }
  ];

  const overviewData = {
    education: [
      'MSIM at WashU (2024-2025)',
      'FJU BS in Finance & Information System (2018-2023)',
      'Capstone Project: iMirror'
    ],
    work: [
      'Security Engineer at Galaxy Software',
      'SDET Intern at Jkopay',
      'QA Engineer Intern at CHT Security'
    ],
    certifications: [
      'Certified Ethical Hacker (CEH)',
      'Microsoft Azure DP-900 & AWS Cloud Practitioner',
      'Skills: Python, SQL, Shell, Docker, Jenkins, K8s, AWS, Web, Power BI, Azure'
    ]
  };

  const filteredExperiences = experiences.filter(exp => activeFilter === 'all' ? true : exp.category === activeFilter);
  const handleFilter = (category) => setActiveFilter(category);
  const clearFilter = () => setActiveFilter('all');

  return (
    <div className="me-page">
      <div className="profile-header">
        <h1>About Me</h1>
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
        <h1>Overview</h1>
        <div className="overview-blocks">
          <div className="overview-block">
            <h2>Education</h2>
            <ul>
              {overviewData.education.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="overview-block">
            <h2>Work Experience</h2>
            <ul>
              {overviewData.work.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="overview-block">
            <h2>Certifications & Skills</h2>
            <ul>
              {overviewData.certifications.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          <FilterButton active={activeFilter === 'all'} onClick={() => handleFilter('all')} category="all">
            <FaList /> All
          </FilterButton>
          <FilterButton active={activeFilter === 'education'} onClick={() => handleFilter('education')} category="education">
            <FaGraduationCap /> Education
          </FilterButton>
          <FilterButton active={activeFilter === 'work'} onClick={() => handleFilter('work')} category="work">
            <FaBriefcase /> Work
          </FilterButton>
          <FilterButton active={activeFilter === 'certification'} onClick={() => handleFilter('certification')} category="certification">
            <FaCertificate /> Certifications
          </FilterButton>
          {activeFilter !== 'all' && (
            <button className="clear-filter" onClick={clearFilter}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {filteredExperiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} isLeft={index % 2 === 0} />
        ))}
      </div>

      <div className="button-container">
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default MePage;
