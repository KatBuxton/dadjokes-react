import React from 'react';
import { JokeUser } from '../JokeUser';
import "./style.css"
import { JokeText } from '../JokeText';

export const JokeBody = () => {
  return (
    <div className='joke__body'>
      <JokeUser />
      <JokeText />
    </div>
  )
}