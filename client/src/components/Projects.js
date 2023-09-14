import React from 'react';
import { motion } from "framer-motion";


const projectsData = [
  {
    title: "Project 1",
    description: "This is a brief description of Project 1.",
    imageUrl: "rock.png",
    projectUrl: "https://github.com/ace18zz/Rock-Paper-Scissors-Multiplayer-Game"
  },
  {
    title: "Project 2",
    description: "This is a brief description of Project 1.",
    imageUrl: "news-page.png",
    projectUrl: "https://github.com/ace18zz/news-summary-challenge"
  },
  // ... other projects
];


function Projects() {
  return (
    <div className="projects-section">
      {projectsData.map((project, index) => (
        <motion.div 
          key={project.title} 
          className="project-card"
          initial={{ opacity: 0, x: 200 }}  
          animate={{ opacity: 1, x: 0 }}  
          transition={{ delay: 0.2 * index, duration: 0.8 }}
          whileHover={{ scale: [null, 1.5, 1.4], zIndex: 10 }}  // 鼠标悬停的动画效果
        >
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} />
          </a>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

        </motion.div>
      ))}
    </div>
  );
}



export default Projects;
