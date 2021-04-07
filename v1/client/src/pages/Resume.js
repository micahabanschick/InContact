import React from 'react'
// import WorksContainer from '../containers/WorksContainer'

const Resume = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  //.index.filter(work => work.id === props.match.params.id)[0]

  console.log(props.work)
  return (
    
    <div>
      <h2>
        {props.work.userId}
      </h2>
      {
        // <WorksContainer work={work} work={props.work}/><br/>
      }
    </div>
  )


}

export default Resume