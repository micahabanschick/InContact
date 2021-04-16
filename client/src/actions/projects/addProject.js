export const addProject = (project, userId) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch(`http://localhost:3001/api/v1/users/${userId}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(user => {
      console.log('d')
      if (user.error) {
        alert(user.error)
      } else {
        dispatch({type: 'ADD_PROJECT', payload: user})
      }
    })
    console.log('e')
  }
  // console.log('f')
}