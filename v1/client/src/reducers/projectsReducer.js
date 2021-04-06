const initialState = {
  index: [],
  userId: "5",
  username: '',
  isAdmin: false
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_USER':
        console.log(state)
        console.log(action.payload.data)
        // history.push(`/users/${action.payload.data.id}/home`)
        let userId = action.payload.data.id
        return {...state, userId: userId}
      case 'ADD_PROJECT':
        console.log(state)
        // let project;
        // if (state.userId === action.payload.data.id) {
        //   project = action.payload
        // } else {
        //   project = {};
        // }
        console.log(action.payload)
        // console.log(project)
        return Object.assign(state, { index: [...state.index, action.payload.data] })
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
  