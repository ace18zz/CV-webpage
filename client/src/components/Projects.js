import React from "react";
import { motion } from "framer-motion";
import '../css/Project.css';


const projectsData = [
  {
    title: "RPS Multiplayer Game",
    description: "This is a brief description of Project 1.",
    imageUrl: "rock.png",
    projectUrl:
      "https://github.com/ace18zz/Rock-Paper-Scissors-Multiplayer-Game",
  },
  {
    title: "News website",
    description: "This is a brief description of Project 1.",
    imageUrl: "news-page.png",
    projectUrl: "https://github.com/ace18zz/news-summary-challenge",
  },
  {
    title: "Chitter",
    description: "This is a brief description of Project 1.",
    imageUrl: "dark.png",
    projectUrl: "https://github.com/ace18zz/Chitter",
  },
  {
    title: "My webpage",
    description: "This is a brief description of Project 1.",
    imageUrl: "my.png",
    projectUrl: "https://github.com/ace18zz/CV-webpage",
  },
  {
    title: "Mini-Wechat",
    description: "This is a brief description of Project 1.",
    imageUrl: "join.jpeg",
    projectUrl: "https://github.com/ace18zz/CV-webpage",
  },
  {
    title: "Mini-Wechat",
    description: "This is a brief description of Project 1.",
    imageUrl: "join.jpeg",
    projectUrl: "https://github.com/ace18zz/CV-webpage",
  },
  // ... other projects
];

// const hoverTransition = {
//   duration: 0.3,
//   yoyo: Infinity,
// };

// const exitHoverTransition = {
//   duration: 0.15,
//   ease: "easeOut",
// };

function Projects() {
  return (
    <div className="projects-section">
      <div className="project-wrapper">
        <div className="project-cards-container">
          {projectsData.map((project, index) => renderProject(project, index))}
          {projectsData.map((project, index) => renderProject(project, index))}
        </div>
      </div>
    </div>
  );
}

function renderProject(project, index) {
  return (
    <motion.div 
      key={project.title + index}  // 使用索引来确保键是唯一的
      className="project-card"
      initial={{ opacity: 0, x: 200 }}  
      animate={{ opacity: 1, x: 0 }}  
      transition={{ delay: 0.2 * index, duration: 0.8 }}
      whileHover={{ scale: [null, 1.5, 1.4], zIndex: 10 }}  
    >
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <img src={project.imageUrl} alt={project.title} />
        <h2>{project.title}</h2>
      </a>
      <p>{project.description}</p>
    </motion.div>
  );
}


export default Projects;
