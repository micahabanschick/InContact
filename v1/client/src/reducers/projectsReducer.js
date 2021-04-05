const initialState = {
  index: [],
  user: [],
  username: '',
  isAdmin: false
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
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
          let userId = action.payload.data.relationships.user.data.id
          return Object.assign(state, { userId: userId }, { index: [...state.index, action.payload.data] })
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
  