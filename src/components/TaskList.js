import React from 'react';

const TaskList = props => {
  return (
    <ul className="TaskList">
      {
        props.tasks.map( task => {
          return (
            <li key={task.uuid} className="TaskList__task">
              <div className="TaskList__task__column">
                <h5 className="TaskList__task__title">Tytuł: {task.title}</h5>
                <p className="TaskList__task__description">Czas: {task.time} min</p>
                <p className="TaskList__task__description">Opis: {task.text}</p>
              </div>
              <div className="TaskList__task__column">
                <button className="btn">Zacznij</button>
                <button className="btn" onClick={(e) => {props.removeTask(task.uuid)}}>Usuń</button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TaskList