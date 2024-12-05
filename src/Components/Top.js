import React from 'react';

function Top({ image, isTopPage }) {
  return (
    <div
      className="top-wrapper"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {isTopPage && (
        <>
          <h1>HIRANO RYUSHIN</h1>
          <p className='pc'>Welcome to my portfolio site, where I showcase my work, skills, and passion</p>
          <p className='iphone'>Welcome to my portfolio site,<br/> where I showcase my work, skills,<br/> and passion</p>
        </>
      )}
    </div>
  );
}

export default Top;