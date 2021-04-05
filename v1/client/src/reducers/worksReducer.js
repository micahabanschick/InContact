const initialState = {
  index: [],
  user: [],
  username: '',
  isAdmin: false
};

export default function worksReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_WORK':
          let userId = action.payload.data.relationships.user.data.id
          return Object.assign(state, { userId: userId }, { index: [...state.index, action.payload] })
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
  