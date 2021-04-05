import React, { Component } from 'react'
import ProjectInput from '../components/projects/ProjectInput'
import Projects from '../components/projects/Projects'

class ProjectsContainer extends Component {


  render() {
    return (
      <div>
          <ProjectInput user={this.props.user}/><br/>
          <Projects projects={this.props.user && this.props.user.projects}/>
          {console.log(this.props.match)}
      </div>

    )

  }

}

export default ProjectsContainer