import React from 'react'
import {Link} from 'react-router-dom'

const Users = (props) => {

  return (
    <div>
      {props.users.map(user =>
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name} - ${user.email}</Link>
        </li> )}
    </div>

  )
}

export default Users