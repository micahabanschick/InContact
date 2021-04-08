import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../actions/projects/deleteProject'

class PortfolioProjects extends Component {

    state = {}

    handleDelete = (project) => {
        this.props.deleteProject(project.id, project.user_id)
    }

    render() {
        return (
            <h2>
                {this.props.project.userId}
            </h2>

        )
    }
}

export default connect(null, {deleteProject})(PortfolioProjects)