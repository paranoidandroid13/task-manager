import React, {useState, useEffect} from 'react'
import './Task.css'
import del from './assets/img/close.svg'

import styled from 'styled-components'
const tasks_statuses = ["unstarted", "in progress", "completed"];

const Card = styled.div`
  background: ${(props) =>
    props.status === tasks_statuses[0] ? "#D30A46" : "#0095D6" || "green"};
  background: ${(props) =>
    props.status === tasks_statuses[2] ? "#00E376" : ""};
`;

const Task = (props) => {

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value)
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function onDeleteTask() {
    props.onDeleteTask(props.task.id)
  }

  return (
    <Card
      status={props.task.status}
      className="card card-border rounded-0 mb-5 mt-3"
    >
      <div className="card-body px-0">
        <div className="d-flex align-items-baseline justify-content-between">
          <p className="card-title border-bottom pl-3">{props.task.title}</p>
          <form onChange={onStatusChange} className=" pl-5 selectForm">
            <select className="selectStatus" defaultValue={props.task.status}>
              {tasks_statuses.map((status) => {
                return (
                  <option value={status} key={status}>
                    {capitalize(status)}
                  </option>
                );
              })}
            </select>
          </form>
          <a className="post-task__button pr-3" href="#">
            <img
              src={del}
              width="10"
              height="10"
              alt=""
              className="card-body__delete"
              onClick={() => {onDeleteTask(props.task.id)}}
            />
          </a>
        </div>

        <p className="card-text px-3">{props.task.description}</p>
      </div>
    </Card>
  );
}

export default Task