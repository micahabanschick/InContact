import React from 'react'
import WorksContainer from '../containers/WorksContainer'

const Resume = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  console.log(user)
  return (
    
    <div>
      <h2>
        {user ? user.name : null} - {user ? user.email : null}
      </h2>
      {
      }
      <WorksContainer user={user}/><br/>
    </div>
  )


}

export default Resume