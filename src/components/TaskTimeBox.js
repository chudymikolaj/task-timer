import React from 'react';

function TaskTimeBox({progress}) {
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const hours = Math.floor(progress / (60 * 60)) % 24;
  const minutes = Math.floor(progress / 60) % 60;
  const seconds = Math.floor(progress % 60 );
   
  return (
    <h2>Czas: <span>{ progress <= 0 ? 'End time' : [hours, minutes, seconds].map(format).join(':') }</span></h2>
  )
}

export default TaskTimeBox;