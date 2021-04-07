const initialState = {
  index: [
  //   {id: "1", title: "software engineer", organization: "google", length: "4", userId: "5"}
  ],
  // userId: "5",
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
        console.log(state)
        console.log(action.payload)
        // let index = { index: [action.payload.data.attributes] }
        return {...state, index: [{...action.payload.data, ...action.payload.data.attributes, userId: state.userId}, ...state.index]}
        // return Object.assign(state, { index: [state.index, {...action.payload.data.attributes, ...action.payload.data, userId: state.userId}] })
      case 'EDIT_WORK':
          // let usersThree = state.users.map(user => {
          //   if (user.id === action.payload.id) {
          //     return action.payload
          //   } else {
          //     return user
          //   }
          // })
          return Object.assign(state, {index: [{...action.payload.data, ...action.payload.data.attributes}]})
          // return {...state, index: [{...action.payload.data, ...action.payload.data.attributes, userId: state.userId}, ...state.index]}
      case 'DELETE_WORK':
          // let usersFour = state.users.map(user => {
          //   if (user.id === action.payload.id) {
          //     return action.payload
          //   } else {
          //     return user
          //   }
          // })
          console.log(state)
          console.log(action.payload)
          return {...state, index: [{...state.index.filter(work => work !== action.payload)}]}
      default:
          return state;
    }
}
  