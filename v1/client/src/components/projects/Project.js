import React from 'react'
import ProjectEdit from './ProjectEdit'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'

const Project = (props) => {
// debugger
  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let project = props.projects.filter(project => project.id === props.match.params.id)[0]

  let handleDelete = (work) => {
    this.props.deleteProject(project.id, project.user_id)
  }

  console.log(project)
  return (

    <div>
      <h2>
        {project ? project.title : null} - {project ? project.description : null}
      </h2>
      <h4>Edit Project</h4>
      <ProjectEdit project={project}/>
      <button onClick={() => handleDelete(project)}>Delete</button>
    </div>
  )


}

export default connect(null, {deleteProject})(Project)