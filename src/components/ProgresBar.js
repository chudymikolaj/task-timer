import React from 'react';

function ProgressBar({percent, paused}) {
  const progressWidth = percent >= 100 ? Math.floor(percent) : percent;

  return (
    <div className={`TimerProgress  ${paused ? 'TimerProgress--Paused' : null}`}>
      <div className="TimerProgress-Bar" style={{width: `${progressWidth}%`}}></div>
    </div>
  )
}

export default ProgressBar;