import React from 'react'

const About = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  console.log(user)
  return (
    
    <div>
      <h1>
        About:
        {user ? user.name : null} - {user ? user.email : null}
      </h1>
      {
      }
      <h2>
        Bio:
      </h2>
    </div>
  )


}

export default About