export const editProject = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${data.userId}/projects/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(project => dispatch({type: 'EDIT_PROJECT', payload: project}))
    }
    
}