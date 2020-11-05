import React from 'react'
import { connect } from 'react-redux'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import TasksPage from './components/TasksPage'
import TaskList from './components/TaskList'
import Task from './components/Task'


function App(props) {
  return (
    <div className="App">
      <Header />
      <TasksPage tasks={props.tasks} />
      {/* <TaskList tasks={props.tasks}/> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

export default connect(mapStateToProps)(App);
