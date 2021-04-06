const initialState = {
  index: [],
  userId: "5",
  username: '',
  isAdmin: false
};

export default function worksReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_USER':
        console.log(state)
        console.log(action.payload.data)
        // history.push(`/users/${action.payload.data.id}/home`)
        let userId = action.payload.data.id
        return {...state, userId: userId}
      case 'ADD_WORK':
        return Object.assign(state, { index: [...state.index, action.payload] })
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
  