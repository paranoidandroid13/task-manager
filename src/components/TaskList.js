import React from "react"
import Task from './Task'
import './TaskList.css'

const TaskList = (props) => {
  return (
    <div>
      <div className="task--status text-uppercase py-3">
        {props.status}
      </div>
      {props.tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  )
}

export default TaskList
