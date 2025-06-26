
import React from 'react';

const MainVisual = () => {
  return (
    <div className="main-visual">
      <video autoPlay loop muted>
        <source src="/shark-video.mp4" type="video/mp4" />
      </video>
      <div className="main-visual-content">
        <h1>サメの世界へようこそ</h1>
        <p>神秘的な海のハンターたちを発見しよう</p>
      </div>
    </div>
  );
}

export default MainVisual;
