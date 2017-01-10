import axios from 'axios'

//------------- Auth Reducer --------------
const authReducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  case LOGOUTUSER:
    return {}
  }
  return state
}

// --------------- Actions ------------------
const LOGOUTUSER = 'LOGOUTUSER'
const AUTHENTICATED = 'AUTHENTICATED'

// --------------- Action Creators ------------------
export const authenticated = user => {
  return ({
    type: AUTHENTICATED, user
  })}

export const signup = (firstName,lastName,email,username,password) => 
    dispatch => 
      axios.post('/api/signup', {
        firstName,lastName,email,username,password
      })
      .then(() => dispatch(login(email,password)))
      .catch(err => console.log(err))
    
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
