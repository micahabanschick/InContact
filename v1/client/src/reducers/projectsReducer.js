const initialState = {
  index: [
  //   {id: "1", title: "something", description: "micah@micah.com", demo: "sdfsd", tools: "dsfsd", length: "4", userId: "5", attributes: 
  //     {id: "1", title: "InContact", description: "The portfolio creating toolset every job seeker needs.", demo: "https://github.com/micahabanschick/InContact.git",tools: "React-Redux, Javascript, and Ruby on Rails", length: "1971-01-01"}
  //   }
  ],
  // userId: "5",
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
        return {...state, index: [{...action.payload.data, ...action.payload.data.attributes, userId: state.userId}, ...state.index]}
      case 'EDIT_PROJECT':
          // let usersThree = state.users.map(user => {
          //   if (user.id === action.payload.id) {
          //     return action.payload
          //   } else {
          //     return user
          //   }
          // })
          return {...state, index: [{...action.payload.data, ...action.payload.data.attributes, userId: state.userId}, ...state.index]}
      case 'DELETE_PROJECT':
          // let usersFour = state.users.map(user => {
          //   if (user.id === action.payload.id) {
          //     return action.payload
          //   } else {
          //     return user
          //   }
          // })
          return {...state, index: state.index.filter(project => project !== action.payload)}
      default:
          return state;
    }
}
  