import React from 'react';
import soundjump from "../img/soundjump.png";
import realbaseball from "../img/realbaseball.png"

function ProjectCard() {
  // プロジェクト情報の配列
  const projects = [
    { name: "SoundJump", tool: "Unity, C#", image: soundjump, link: 'https://unityroom.com/games/soundjump' },
    { name: "RealBaseBall", tool: "Unity, C#", image: realbaseball, link: 'https://unityroom.com/games/realbaseball_sappu' },
  ];

  return (
    <div className="project-list">
      <div className='project-list-wrapper'>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="projectImage">
            <a href={project.link}>
              <img src={project.image} alt={`${project.name}の写真`} />
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