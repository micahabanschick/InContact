import React from 'react'
import ProjectEdit from './ProjectEdit'

const Project = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let project = props.projects.filter(project => project.id === props.match.params.id)[0]

  console.log(project)
  return (

    <div>
      <h2>
        {project ? project.title : null} - {project ? project.description : null}
      </h2>
      <h4>Edit Project</h4>
      <ProjectEdit project={project}/>
    </div>
  )


}

export default Project