import axios from 'axios'

const authReducer = (state={}, action) => {
  console.log("ACTION.USER", action.user);
  switch(action.type) {
  case AUTHENTICATED:
    return action.user  
  }
  return state
}


const AUTHENTICATED = 'AUTHENTICATED'

export const authenticated = user => {
  console.log("USER:", user);
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
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default authReducer