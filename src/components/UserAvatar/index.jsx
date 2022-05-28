import React from 'react';
import "./style.css"
import avatarUrl from "./users/user01.png"


export const UserAvatar = () => {
  return (
    <img className="user-avatar" src={avatarUrl} alt="avatar uzivatele" />
  )
}