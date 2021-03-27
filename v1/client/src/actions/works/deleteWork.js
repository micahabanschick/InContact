export const deleteWork = (workId, userId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/users/${userId}/works/${workId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'DELETE_WORK', payload: user}))
    }
}