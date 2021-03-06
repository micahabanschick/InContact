import React from 'react'
import ProjectEdit from './ProjectEdit'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'
import Container from 'react-bootstrap/Container'

const Project = (props) => {
// debugger
  console.log(props)

  let {id, title, description, demo, tools, userId} = props.project

  let handleDelete = (project) => {
    props.deleteProject(project.id, project.userId)
  }

  let style = {
    background: "rgb(111,205,81)",
    padding: "3em"
  }

  const handleStar = (event) => {
    event.preventDefault()
    console.log(props.project)
    if (!!props.project.isStarred) {
      event.target.style.backgroundColor = 'white'
    } else {
      event.target.style.backgroundColor = 'yellow'
    }
    // event.target.style.backgroundColor = 'yellow'
    console.log(props.project)
    props.handleStar(props.project)
  }

  console.log(props.project)
  return (
    <Container style={style}>
      <button style={{backgroundColor: "yellow"}} onClick={handleStar}>Star/Unstar</button>
      <h2>{id}<br/>{title}<br/>{description}<br/>{demo}<br/>{tools}<br/>{userId}</h2>
      <ProjectEdit project={props.project}/>
      <button onClick={() => handleDelete(props.project)}>Delete</button>
    </Container>
  )


}

export default connect(null, {deleteProject})(Project)