import React, { Component } from 'react';

import ProgressBar from './ProgresBar';
import TaskTimeBox from './TaskTimeBox';

export default class TaskTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      startTime: null,
      endTime: null,
      elapsedTime: 0,
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { isRunning, isPaused, pausesCount, startTime, endTime, elapsedTime } = this.state;
    const { title, time, isEditable, onEdit } = this.props;
    const gettingTime = time * 60;
    const progressTime = gettingTime - elapsedTime;
    const getPercentProgressBar = ( elapsedTime / gettingTime ) * 100.0;

    return (
      <div className={`TaskTimer ${isEditable ? 'inactive' : null}`}>
        <h2>{title}</h2>

        { startTime ? <p>{ `Started at -> ${startTime}`}</p> : null }
        { endTime ? <p> {`Ended at -> ${endTime}`} </p> : null }
        
        <TaskTimeBox  progress={progressTime} paused={isPaused} />
        <ProgressBar percent={getPercentProgressBar} paused={isPaused} />

        <div>
          <button className="btn" onClick={this.handleStart} disabled={isRunning}>Start</button>
          <button className="btn" onClick={onEdit}  disabled={isEditable}>Edytuj</button>
          <button className="btn" onClick={this.handleStop}  disabled={!isRunning}>Stop</button>
          <button className="btn" onClick={this.togglePause} disabled={!isRunning}>{isPaused ? 'Wznów' : 'Pauza'} {pausesCount}</button>
        </div>
      </div>
    )
  }

  startTimer = () => {
    console.log('timer');
    const { time } = this.props;
    const timeInSeconds = time * 60;
    
    this.timerId = window.setInterval(() => {
      this.setState( (prevState) => {
        return {
          elapsedTime: prevState.elapsedTime + 0.1
        }
      }, () => {

        if(this.state.elapsedTime >= timeInSeconds){
          this.stopTimer();
        }

      });
    }, 100);
  }

  handleStart = () => {
    this.setState(()=> ({
      isRunning: true,
    }))

    this.startTimer();
  }

  stopTimer = () => {
    window.clearInterval(this.timerId);
  }

  handleStop = () => {
    this.stopTimer();

    this.setState(()=> ({
      isRunning: false,
      isPaused: false,
      elapsedTime: 0,
      pausesCount: 0
    }))
  }

  togglePause = () => {
    this.setState( (prevState) => {
      const isPaused = !prevState.isPaused;

      return {
        isPaused,
        pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
      };
    }, () => {
      this.state.isPaused ? this.stopTimer() : this.startTimer();
    });
  }

  actualTime = () => { 
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const totalSeconds = new Date().getTime() / 1000;
    var hours = Math.floor( totalSeconds / (60 * 60)) % 24;
    var minutes =  Math.floor( totalSeconds / 60 ) % 60;
    var seconds =  Math.floor(totalSeconds % 60);

    return  [hours, minutes, seconds].map(format).join(':');
  }
}