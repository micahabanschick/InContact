import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'

class Projects extends Component {

    state = {}

    handleDelete = (project) => {
        this.props.deleteProject(project.id, project.user_id)
    }

    render() {
        return (
            <div>
                {
                    this.props.projects && this.props.projects.map(project =>
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>{project.title} - ${project.description}</Link>
                            <button onClick={() => this.handleDelete(project)}>Delete</button>
                        </li> 
                    )
                }
            </div>

        )
    }
}

export default connect(null, {deleteProject})(Projects)