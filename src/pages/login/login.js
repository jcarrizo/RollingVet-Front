import React from 'react'
import '../login/login.css'

const Login = () => {
  return (
    <div className="main">
      <p className="sign" align="center">Sign in</p>
      <form className="form1">
        <input className="un " type="text" align="center" placeholder="Username"></input>
        <input className="pass" type="password" align="center" placeholder="Password"></input>
        <a className="submit" align="center">Sign in</a>
      </form >
    </div>
  )
}

export default Login;