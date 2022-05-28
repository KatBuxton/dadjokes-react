import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { UserName } from '../UserName';
import "./style.css"


export const JokeUser = () => {
  return (
    <div className="joke__user">
      <UserAvatar />
      <UserName />
    </div>
  )
}