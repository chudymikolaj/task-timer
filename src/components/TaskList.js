import React from 'react';

const TaskList = props => {
  const {
    title,
    time,
    text,
    onStart,
    onUpdate,
    onRemove,
  } = props;

  return (    
    <li className="TaskList__task">
      <div className="TaskList__task__column">
        <h5 className="TaskList__task__title">Tytuł: {title}</h5>
        <p className="TaskList__task__description">Czas: {time} min</p>
        <p className="TaskList__task__description">Opis: {text}</p>
      </div>
      <div className="TaskList__task__column">
        <button className="btn" onClick={onStart}>Zacznij</button>
        <button className="btn" onClick={onUpdate}>Zmień</button>
        <button className="btn" onClick={onRemove}>Usuń</button>
      </div>
    </li>  
  )
}

export default TaskList