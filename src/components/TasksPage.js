import React from 'react'
import './TasksPage.css'
import post_task from './assets/img/button.svg'

const TasksPage = () => {
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
      </div>
    </section>
  );
}

export default TasksPage