import React from 'react';
import { JokeUser } from '../JokeUser';
import "./style.css"
import { JokeText } from '../JokeText';

export const JokeBody = () => {
  return (
    <>
      <JokeUser />
      <JokeText />
    </>
  )
}