export default function projectsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PROJECT':
            let usersTwo = state.users.map(user => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
              }
            })
            return {...state, users: usersTwo}
        case 'EDIT_PROJECT':
            let usersThree = state.users.map(user => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
              }
            })
            return {...state, users: usersThree}
        case 'DELETE_PROJECT':
            let usersFour = state.users.map(user => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
              }
            })
            return {...state, users: usersFour}
        default:
            return state;
    }
}
  