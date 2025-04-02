import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import './css/MainPage.css';
import {
  FaCode, FaUser,
  FaGithub, FaLinkedin
} from 'react-icons/fa';

/**
 * Banner component with background image and overlay
 */
const Banner = () => (
  <div className="banner-section">
    <img src="/img/Banner.jpg" alt="Profile Banner" className="banner-image" />
    <div className="banner-overlay" />
  </div>
);

/**
 * Social links component
 */
const SocialLinks = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/tina94happy', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tina-su-01b139210/', label: 'LinkedIn' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

/**
 * Profile images component
 */
const ProfileImages = () => (
  <div className="profile-images">
    <div className="profile-avatar">
      <img src="/img/1.JPG" alt="Tina Avatar" className="avatar-image" />
    </div>
  </div>
);

/**
 * Profile information component with user details and social links
 */
const ProfileInfo = () => (
  <div className="profile-info">
    <h1 data-text="TINA">TINA</h1>
    <p className="tagline">Cybersecurity | QA & SDET | Cloud & Automation</p>
    <div className="profile-description">
      <p>
        I’m Tina, a cybersecurity enthusiast and QA engineer passionate about building secure, automated systems.
        I love blending cloud, scripting, and DevOps to create efficient infrastructure and resilient apps.
      </p>
    </div>
    <SocialLinks />
  </div>
);

/**
 * Profile section component
 */
const ProfileSection = () => (
  <div className="profile-section">
    <ProfileImages />
    <ProfileInfo />
  </div>
);

/**
 * Navigation box component
 */
const NavigationBox = ({ title, path, icon, onClick }) => (
  <div className="box" onClick={() => onClick(path)}>
    <span className="box-icon">{icon}</span>
    <h2 className="box-title">{title}</h2>
  </div>
);

/**
 * Navigation menu component
 */
const NavigationMenu = () => {
    const navItems = [
      { title: 'Coding', path: '/coding', icon: <FaCode /> },
      { title: 'Me', path: '/me', icon: <FaUser /> },
      { title: 'Learning', path: '/learning', icon: <FaBook /> }  // 新增 Learning
    ];
  
    const navigate = useNavigate();
  
    const handleCardClick = (path) => {
      navigate(path);
    };
  
    return (
      <div className="box-container">
        {navItems.map((item, index) => (
          <div key={index} className="box-wrapper">
            <NavigationBox {...item} onClick={handleCardClick} />
          </div>
        ))}
      </div>
    );
  };
  

/**
 * Main page component
 */
const MainPage = () => {
  return (
    <div className="main-page">
      <Banner />
      <ProfileSection />
      <NavigationMenu />
    </div>
  );
};

export default MainPage;
