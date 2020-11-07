import React, { useState, useEffect } from 'react'
import UnsplashImage from './UnsplashImage'
import Task from './Task'
import axios from 'axios'

const Unsplash = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const base_url = 'https://api.unsplash.com';
    const api_key = 'qabqOKdRHqS8bGg-4VWwbM-Jmy-xkK3Vd8Wj5DZMmAg';

    axios(
      `${base_url}/search/photos?count=10&query=dark&client_id=${api_key}`
    ).then((res) => setImages([...images, ...res.data.results]));
  }, []);


  return <div className="pics">
    {images.map(image => {
      return <Task url={image.urls.thumb} key={image.id} />
    })}
  </div>
}

export default Unsplash

// https://api.unsplash.com/photos/random?count=10&client_id=qabqOKdRHqS8bGg-4VWwbM-Jmy-xkK3Vd8Wj5DZMmAg
// https://api.unsplash.com/search/photos?count=10&query=neon&client_id=qabqOKdRHqS8bGg-4VWwbM-Jmy-xkK3Vd8Wj5DZMmAg