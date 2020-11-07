import React, {useState, useEffect} from 'react'
import './Task.css'

import styled from 'styled-components'

const Card = styled.div`
  background: ${(props) => (props === 'unstarted') ? 'red' : 'blue'}
`

const Task = (props) => {

  return (
    <Card props={props.task.status} className="card rounded-0">

      <div className="card-body px-0">
        <div className="d-flex align-items-center">
          <h3 className="card-title border-bottom">{props.task.title}</h3>
          <h5 className="pl-3">{props.task.status}</h5>
        </div>

        <p className="card-text">{props.task.description}</p>
      </div>

    </Card>

  );
}

export default Task