import React from 'react'

const Resume = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  console.log(user)
  return (
    
    <div>
      <h1>
        Resume:
        {user ? user.name : null} - {user ? user.email : null}
      </h1>
      {
      }
      <h2>
        Works:
      </h2>
    </div>
  )


}

export default Resume