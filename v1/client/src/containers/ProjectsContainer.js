import React, { Component } from 'react'
import ProjectInput from '../components/ProjectInput'
import Projects from '../components/Projects'

class ProjectsContainer extends Component {


  render() {
    return (
      <div>
          <ProjectInput user={this.props.user}/><br/>
          <Projects projects={this.props.user && this.props.user.projects}/>
      </div>

    )

  }

}

export default ProjectsContainer