import React from "react"
import Task from './Task'
import './TaskList.css'

const TaskList = (props) => {
  return (
    <div className="py-5">
      <div className="task--status py-3">{props.status}</div>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onStatusChange={props.onStatusChange} />
      ))}
    </div>
  );
}

export default TaskList
