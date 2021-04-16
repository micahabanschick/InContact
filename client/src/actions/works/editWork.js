export const editWork = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users/${data.userId}/works/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(work => dispatch({type: 'EDIT_WORK', payload: work}))
    }
    
}