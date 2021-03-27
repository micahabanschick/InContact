export const addProject = (project, userId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${userId}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'ADD_PROJECT', payload: user})
          }
        }
      )
    }
}