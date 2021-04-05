import React from 'react'
// import {Redirect} from 'react-router-dom'
import UserEdit from './UserEdit'
import ProjectsContainer from '../../containers/ProjectsContainer'
import WorksContainer from '../../containers/WorksContainer'

const User = (props) => {
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
      <ProjectsContainer user={user}/><br/>
      <WorksContainer user={user}/><br/>
      <h4>Edit User</h4>
      <UserEdit user={user}/>
    </div>
  )


}

export default User