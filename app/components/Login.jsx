import React from 'react'

export const Login = ({login}) => {
  console.log('......login:',login)
  return (

    <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" placeholder="username" />
    <input name="password" placeholder="password" type="password" />
    <input type="submit" value="Login" />
  </form>)
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'



export default connect (
  state => ({}),
  {login},
) (Login)
