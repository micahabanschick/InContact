import React from 'react'
import ProjectEdit from './ProjectEdit'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'
import Container from 'react-bootstrap/Container'

const Project = (props) => {
// debugger
  console.log(props)

  let {id, title, description, demo, tools, length, userId} = props.project

  let handleDelete = (project) => {
    props.deleteProject(project.id, project.userId)
  }

  let style = {
    background: "rgb(111,205,81)",
    padding: "3em"
  }

  console.log(props.project)
  return (
    <Container style={style}>
      <h2>{id}<br/>{title}<br/>{description}<br/>{demo}<br/>{tools}<br/>{userId}</h2>
      <ProjectEdit project={props.project}/>
      <button onClick={() => handleDelete(props.project)}>Delete</button>
    </Container>
  )


}

export default connect(null, {deleteProject})(Project)