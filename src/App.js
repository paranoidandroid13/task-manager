import React from 'react'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Task from './components/Task.js'
// import TaskList from './components/TaskList.js'
// import TasksPage from './components/TasksPage.js'
import Header from './components/Header'
// import Nav from './components/Nav'
import TasksPage from './components/TasksPage'
import Task from './components/Task'

function App() {
  return (
    <div className="App">
      <Header />
      <TasksPage />
      <Task />
    </div>
  );
}

export default App;
