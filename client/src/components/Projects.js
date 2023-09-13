import React from 'react';

const projectsData = [
  {
    title: "Project 1",
    description: "This is a brief description of Project 1.",
    imageUrl: "path_to_image_1.jpg",
    projectUrl: "http://example.com"
  },
  // ... other projects
];

function Projects() {
  return (
    <div className="projects-section">
      {projectsData.map(project => (
        <div key={project.title} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
