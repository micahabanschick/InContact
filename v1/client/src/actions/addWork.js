export const addWork = (work, userId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${userId}/works`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(work)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch({type: 'ADD_WORK', payload: user})
          }
        }
      )
    }
}