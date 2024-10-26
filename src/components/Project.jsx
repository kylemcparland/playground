import React from "react";
import "../styles/Project.css";

const Project = () => {
  return (
    <div className="project-container">
      <a
        className="project-name"
        href="https://github.com/kylemcparland/photolabs"
      >
        Photolabs
      </a>
      <p className="project-description">
        PhotoLabs is a full-stack, React-based single-page application (SPA)
        that enables users to dynamically explore and interact with photos.
        Users can sort images by topic and mark them as favourites, utilizing
        React's state management system. This project focuses on the front-end,
        client-side user experience, and integrates various technologies
        including React, PostgreSQL, Node.js, and Express.
      </p>
      <div className="project-photo">
        <img src="https://github.com/kylemcparland/photolabs/blob/main/screenshots/PL-2.gif?raw=true" />
      </div>
    </div>
  );
};

export default Project;
