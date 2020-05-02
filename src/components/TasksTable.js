import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from './AddTask';
import EditorTask from './EditorTask';
import TaskList from './TaskList';
import TaskTimer from './TaskTimer';

export default class TasksTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskIndex: '',
      title: '',
      time: '',
      text: '',
      isEditable: false,
      tasks: [
        {
          'uuid': uuidv4(),
          'title': 'Nauka React.js',
          'text': 'Od zera do bohatera!!!',
          'time': '2'
        }
      ]
    }
  }

  render() {
    const { title, time, text, tasks, isEditable, taskIndex } = this.state;

    return (
      <React.Fragment>
        <AddTask 
          onAddTask={this.handleSubmit}
        />

        <ul className="TaskList">
          {tasks.map( task => (
            <TaskList 
              key={task.uuid}
              title={task.title} 
              text={task.text}
              time={task.time}
              onStart={(e) => { this.handleStartTask({taskIndex: task.uuid, title: task.title, time: task.time, text: task.text}) }}
              onUpdate={(e) => { this.editTask(task.uuid) }} 
              onRemove={(e) => { this.removeTask(task.uuid) }}
            />
          ))}
        </ul>

        
        {isEditable ?
          <EditorTask
            title={title}
            time={time}
            text={text}
            isEditable= {isEditable}
            onChangeTask={this.handleConfirm}
          />
        :
          <TaskTimer
            taskIndex={taskIndex}
            title={title}
            time={time}
            isEditable={isEditable}
            onEdit={this.handleEdit}
          />
        }
      </React.Fragment>
    )
  }

  handleStartTask = (handleTaskData) => {
    this.setState(handleTaskData);
  }

  handleConfirm = (editedTask) => {
    this.setState({ isEditable: false });

    if(this.state.taskIndex.length) {
      this.updateTask( this.state.taskIndex, editedTask);
    }
  }

  handleEdit = (isEditable) => {
    this.setState(isEditable);
  }

  handleSubmit = (createTask) => {
    this.setState( prevState => {
      const tasks = [ ...prevState.tasks, createTask];
      return { tasks };
    })
  }

  editTask = (taskIndex) => {
    this.setState({ taskIndex: taskIndex, isEditable: true });
  }

  updateTask = (taskIndex, updatedTask) => {
    this.setState( prevState => {
      const tasks = prevState.tasks.map( task => task.uuid === taskIndex ? updatedTask : task);

      return { tasks };
    })
  }

  removeTask = (indexToRemove) => {
    this.setState( prevState => {
      const tasks = prevState.tasks.filter((task) => task.uuid !== indexToRemove);
      
      return { tasks };
    });
  }

}
