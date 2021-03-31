import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/users' style={{paddingRight: '10px'}}>Users  </Link>
      <Link to='/users/new'> Add User</Link>
      {
      // <Link to='/users/:id'>Home</Link>
      }    
    </div>

  )
}

export default NavBar