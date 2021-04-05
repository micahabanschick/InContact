// import { v5 as uuidv5 } from 'uuid';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const initialState = {
  index: [],
  isAdmin: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return {users: action.payload}
      case 'ADD_USER':
        console.log(state)
        console.log(action.payload.data)
        history.push(`/users/${action.payload.data.id}`)
        return {...state, ...action.payload.data, index: [...state.index, action.payload]}
        case 'FETCH_USER':
          // let user = state.user.map(u => {
            //   if (u.id === action.payload.id) {
              //     return action.payload
              //   } else {
                //     return u
                //   }
                // })
               
                history.push(`/users/${state.id}`)
                return null
    case 'EDIT_USER':
      let users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: users}
    case 'ADD_PROJECT':
      let usersTwo = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: usersTwo}
    // case 'EDIT_PROJECT':
    //   let usersThree = state.users.map(user => {
    //     if (user.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return user
    //     }
    //   })
    //   return {...state, users: usersThree}
    // case 'DELETE_PROJECT':
    //   let usersFour = state.users.map(user => {
    //     if (user.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return user
    //     }
    //   })
    //   return {...state, users: usersFour}
    case 'ADD_WORK':
      let usersFive = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: usersFive}
    // case 'EDIT_WORK':
    //   let usersSix = state.users.map(user => {
    //     if (user.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return user
    //     }
    //   })
    //   return {...state, users: usersSix}
    // case 'DELETE_WORK':
    //   let usersSeven = state.users.map(user => {
    //     if (user.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return user
    //     }
    //   })
    //   return {...state, users: usersSeven}
    default:
      return state
  }
}