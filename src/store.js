import { createStore } from 'redux'

function UserReducer(state = { user : null }, action) {
  
  let newState = { ...state };
  switch (action.type) {
  case 'LOGIN':
    newState.user = action.user;
    break;
  case 'LOGOUT':
    newState.user = null;    
    break;
  default:
    break;
  }
  return newState
}

export let store = createStore(UserReducer)