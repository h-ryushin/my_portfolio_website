import React from 'react';
import soundjump from "../img/soundjump.png";

function ProjectCard() {
  // プロジェクト情報の配列
  const projects = [
    { name: "SoundJump", tool: "Unity, C#", image: soundjump, link: 'https://unityroom.com/games/soundjump' },
    { name: "React App", tool: "React, JavaScript", image: "react.png", link: 'https://reactjs.org/' },
  ];

  return (
    <div className="project-list">
      <div className='project-list-wrapper'>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="projectImage">
            <a href={project.link}>
              <img src={projects[0].image} alt={`${project.name}の写真`} />
            </a>
          </div>
          {/* プロジェクト名 */}
          <h5>{project.name}</h5>
          {/* 使用ツール */}
          <p>{project.tool}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ProjectCard;