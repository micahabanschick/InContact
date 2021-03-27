export const deleteProject = (projectId, userId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/users/${userId}/projects/${projectId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'DELETE_PROJECT', payload: user}))
    }
}