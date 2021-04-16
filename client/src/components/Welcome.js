import React from 'react'
import Slideshow from './Slideshow'

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
        
      {
      }
      <Slideshow/>
    </div>
  )


}

export default Welcome