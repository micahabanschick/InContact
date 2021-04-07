import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'
import Project from './Project'

class Projects extends Component {

    state = {}

    handleDelete = (project) => {
        this.props.deleteProject(project.id, project.userId)
    }

    render() {
        console.log(this)
        if (!this.props.project.index) {
            return (
                <h2>No Projects have been recorded.</h2>
            )
        } else {
            return (
                <div>
                    {
                        this.props.project.index.map(project =>
                            <li key={project.id}>
                                <Project project={project}/>
                                </li> 
                                )
                                // <button onClick={() => this.handleDelete(project)}>Delete</button>
                    }
                </div>
            )
        }
    }
}

export default connect(null, {deleteProject})(Projects)