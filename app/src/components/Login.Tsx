import React, { FC } from 'react'

export const Login:FC =() => {
  return (
    <>
      <form>
        <label>Username</label>
        <input type="email" placeholder="Enter Username"/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"/>
        <input  className="signInButton" type="submit" value="Sign In"/>
      </form>
    </>
  )
}
