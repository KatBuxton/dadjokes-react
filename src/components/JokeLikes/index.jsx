import React, { useState } from 'react';
import "./style.css"

export const JokeLikes = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  return (
    <div className="joke__likes">
      <button
        id="btn-up"
        className="btn-like btn-like--up"
        onClick={() => setLikes(likes + 1)}></button>
      <span id="likes-up" className="likes-count likes-count--up">{likes}</span>
      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={() => setDislikes(dislikes + 1)}></button>
      <span id="likes-down" className="likes-count likes-count--down">{dislikes}</span>
    </div>
  )
}