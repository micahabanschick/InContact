const initialState = {
  index: [],
  users: [],
  username: '',
  isAdmin: false
};

export default function worksReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_WORK':
            let usersTwo = state.users.map(user => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
              }
            })
            return {...state, ...action.payload.data, index: [...state.index, action.payload], user: usersTwo}
        case 'EDIT_WORK':
            let usersThree = state.users.map(user => {
              if (user.id === action.payload.id) {
                return action.payload
              } else {
                return user
              }
            })
            return {...state, users: usersThree}
        case 'DELETE_WORK':
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
  