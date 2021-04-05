export const fetchUser = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${data.id}`)
      .then(response => response.json())
      .then(user => dispatch({type: 'FETCH_USER', payload: user}))
    }
    
}