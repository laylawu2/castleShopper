import axios from 'axios'

const authReducer = (state=null, action) => {
  console.log("ACTION.USER", action.user);
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  case LOGOUTUSER:
    return {}
  }
  return state
}

const LOGOUTUSER = 'LOGOUTUSER'


export const logoutUserAction = () => ({
  type: LOGOUTUSER
})


const AUTHENTICATED = 'AUTHENTICATED'

export const authenticated = user => {
  return ({
type: AUTHENTICATED, user
  })}

export const login = (username, password) =>
  dispatch => 
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))      

export const logout = () =>
  dispatch => {
    console.log("IN LOGOUT")
    return(
      axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))
    )
  }


export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default authReducer