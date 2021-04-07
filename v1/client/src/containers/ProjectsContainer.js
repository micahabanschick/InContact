import React, { Component } from 'react'
import ProjectInput from '../components/projects/ProjectInput'
import Projects from '../components/projects/Projects'
import PortfolioProjects from '../pages/PortfolioProjects'

class ProjectsContainer extends Component {


  render() {
    return (
      <div>
        <PortfolioProjects project={this.props.project}/>
        <ProjectInput project={this.props.project}/><br/>
        <Projects project={this.props.project}/>
      {
            console.log(this.props.match)
          }
      </div>

    )

  }

}

export default ProjectsContainer