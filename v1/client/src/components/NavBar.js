import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/users' style={{paddingRight: '10px'}}>Users  </Link>
      <Link to='/users/new'> Add User</Link>
    </div>

  )
}

export default NavBar