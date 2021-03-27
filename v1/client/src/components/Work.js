import React from 'react'
import WorkEdit from './WorkEdit'

const Work = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let work = props.works.filter(work => work.id === props.match.params.id)[0]

  console.log(work)
  return (

    <div>
      <h2>
        {work ? work.title : null} - {work ? work.organization : null}
      </h2>
      <h4>Edit Work</h4>
      <WorkEdit work={work}/>
    </div>
  )


}

export default Work