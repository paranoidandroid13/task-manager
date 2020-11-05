import React from 'react'
import './Task.css'

const Task = (props) => {
  
  const pic = {
    base_url: "https://api.unsplash.com/search/photos?query=neon&client_id=",
    api_key: 'qabqOKdRHqS8bGg-4VWwbM-Jmy-xkK3Vd8Wj5DZMmAg',
    fetchPic() {
      fetch(`${this.base_url}${this.api_key}`)
      .then((res) => res.json())
      .then((res) => res.results[0].urls.small)
    }
  }

  return (
    <div className="card rounded-0">
      <img src={`${this.pic.fetchPic()}`} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5>{props.task.status}</h5>
        <h3 className="card-title">{props.task.title}</h3>
        <p className="card-text">{props.task.description}</p>
      </div>
    </div>
  );
}

export default Task