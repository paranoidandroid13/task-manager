import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import TasksPage from './components/TasksPage'
import { editTask, createTask, deleteTask } from "./actions/index";

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status}))
  }

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }))
  }

  const onDeleteTask = (id) => {
    props.dispatch(deleteTask(id))
  }

  return (
    <div className="App">
      <Header />
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

export default connect(mapStateToProps)(App);
