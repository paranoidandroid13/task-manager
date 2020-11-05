import React, { useState } from 'react'
import './TasksPage.css'
import post_task from './assets/img/button.svg'
import TaskList from './TaskList'

const tasks_statuses = ['unstarted', 'in progress', 'completed']

const TasksPage = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskDescr, setTaskDescr] = useState('')
  const onChangeTitle = e => {
    setTaskName(e.target.value)
  }

  const onChangeDescr = (e) => {
    setTaskDescr(e.target.value);
  };

  const renderTaskLists = () => {
    const {tasks} = props
    return tasks_statuses.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status)
      return <div className="col-md-4 card bg-primary" key={id}>
          <TaskList key={status} status={status} tasks={statusTasks} />
        </div>
    })
  }

  return (
    <section className="hero pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 border">
            <div className="add_task">
              <div className="form-group">
                <input
                  className="task__name form-control rounded-0"
                  type="text"
                  placeholder="Task name"
                  value={taskName}
                  onChange={onChangeTitle}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  placeholder="Task descr"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  value={taskDescr}
                  onChange={onChangeDescr}
                ></textarea>
              </div>

              <div className="d-flex p-0 border">
                <a className="post-task__button ml-auto" href="#">
                  <img src={post_task} alt="" className="post-task__button" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-8 border">
            <div className="row border">
              <div className="col-md-2 border mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2 border mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2 border mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2 border">
                <div>kfkfk</div>
                <div>fkfkf3313333</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center position-relative">
          {renderTaskLists()}
        </div>
      </div>
    </section>
  );
}

export default TasksPage