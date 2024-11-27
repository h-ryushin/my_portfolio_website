import React from 'react';
import soundjump from "../src/soundjump.png"

function ProjectCard() {
  // プロジェクト情報の配列
  const projects = [
    { name: "Unity Game", tool: "Unity, C#", image: soundjump },
    { name: "React App", tool: "React, JavaScript", image: "react.png" },
  ];

  return (
    <div className="project-list">
        <div className="project-card">
          <div
            className="projectImage"
          >
            <a href='https://unityroom.com/games/soundjump'>
            <img src={projects[0].image}/>
            </a>
          </div>
          {/* プロジェクト名 */}
          <h5>{projects[0].name}</h5>
          {/* 使用ツール */}
          <p>{projects[0].tool}</p>
        </div>
    </div>
  );
}

export default ProjectCard;