import React, {useState} from 'react'


const UnsplashImage = ({ url, key }) => {
  return (
    <img src={url} key={key} />
  )
}

export default UnsplashImage
