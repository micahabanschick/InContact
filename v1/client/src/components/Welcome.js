import React from 'react'
import reduxLogo from '../assets/logo512.png'

const Welcome = (props) => {

  console.log(props.match.path)
  
  return (

    <div>
      <h1>Welcome to InContact</h1>
      <h2>The one location to find all about YOU</h2>
      <p>
        This is the landing page for a smooth welcome to the site before choosing to login. Once the user finds this page, they can click on the burger menu on the left and find "login" which they can click and will take them to the login page. Then they will login and be taken to their own custom account page, full of various options and inputs such as potential projects and works.
        <br/><br/>
        Enjoy!
      </p>
        <img src={reduxLogo} alt="redux logo"/>
        <img src={reduxLogo} alt="redux logo"/>
      {
      }
    </div>
  )


}

export default Welcome