import React, { useState } from 'react'
import './TasksPage.css'
import post_task from './assets/img/button.svg'
import TaskList from './TaskList'
import gradient from './assets/img/gradient.svg'

const tasks_statuses = ['unstarted', 'in progress', 'completed']

const TasksPage = (props) => {

  const [title, setTaskName] = useState('')
  const [description, setTaskDescr] = useState('')

  const onChangeTitle = e => {
    setTaskName(e.target.value)
  }

  const onChangeDescr = (e) => {
    setTaskDescr(e.target.value);
  };

  const resetForm = () => {
    setTaskName('')
    setTaskDescr('')
  }

  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description
    })
    resetForm()
  }

  const renderTaskLists = () => {
    const {tasks} = props
    return tasks_statuses.map((status, id) => {

      const statusTasks = tasks.filter((task) => task.status === status)
      return (
        <div className="task_statuses col-md-4 card border-0" key={id}>
          <TaskList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask}
          />
        </div>
      );
    })
  }

  return (
    <section className="hero py-3">
      <div className="container h-100 w-100">
        <div className="row d-flex justify-content-between pb-5">
          <div className="col-md-4 pt-5">
            <div className="add_task">
              <form onSubmit={onCreateTask}>
                <div className="form-group pb-1">
                  <input
                    className="task__name form-control rounded-0"
                    type="text"
                    placeholder="Task name"
                    value={title}
                    onChange={onChangeTitle}
                  />
                </div>

                <div className="form-group pb-1">
                  <textarea
                    className="task__desc form-control rounded-0"
                    placeholder="Task descr"
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    value={description}
                    onChange={onChangeDescr}
                  ></textarea>
                </div>
              </form>

              <div className="d-flex p-0">
                {/* <button type="submit" onSubmit={onCreateTask}> */}
                <a className="post-task__button ml-auto" href="#">
                  <img
                    src={post_task}
                    alt=""
                    className="post-task__button"
                    onClick={onCreateTask}
                  />
                </a>
                {/* </button> */}
              </div>
            </div>
          </div>
          {/*
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-2 mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2 mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2 mr-auto">
                <div>kfkfk</div>
                <div>fkfkf33</div>
              </div>
              <div className="col-md-2">
                <div>kfkfk</div>
                <div>fkfkf3313333</div>
              </div>
            </div>
          </div> */}
          {/* <img src={gradient} alt="" className="gradient" /> */}
        </div>

        <div className="task_block row d-flex justify-content-center position-relative">
          {renderTaskLists()}
        </div>
      </div>
    </section>
  );
}

export default TasksPage