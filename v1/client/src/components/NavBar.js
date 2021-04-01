import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  const navStyle = {
    color: 'rgb(190,255,90)',
    textDecoration: 'none'
  }

  if (!props.user.id) {
    return (
      <nav>
      {console.log(props)}
        <Link style={navStyle} to='/users/new'> Add User</Link>
        <Link style={navStyle} to='/users/:id'>Home</Link>
      </nav>
    )
  } else {
    return (
      <nav>
      {console.log(props)}
        <Link style={navStyle} to='/users/:id/projects'>Projects  </Link>
        <Link style={navStyle} to='/users/:id/projects/new'> Add Project</Link>

        <Link style={navStyle} to='/users/:id/works'>Works  </Link>
        <Link style={navStyle} to='/users/:id/works/new'> Add Work</Link>

        <Link style={navStyle} to='/users/:id'>Home</Link>
      </nav>
    )
  }
}

export default NavBar