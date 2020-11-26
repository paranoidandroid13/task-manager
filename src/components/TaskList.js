import React from "react"
import Task from './Task'
import './TaskList.css'

const TaskList = (props) => {
  return (
    <div className="task-statuses__block pt-2">
      <div className="task--status py-0">{props.status}</div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={props.onStatusChange}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList
