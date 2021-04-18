import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'
import Project from './Project'

class Projects extends Component {

    state = {
        projects: this.props.project.index.map(p => {
            return Object.assign({}, p, {isStarred: false})
        }),
        starsOnly: false
    }

    handleDelete = (project) => {
        this.props.deleteProject(project.id, project.userId)
    }

    handleStar = () => {
        if (this.state.starred === false) {
            this.setState((prevState) => {
                prevState.starred = true
            })
        } else {
            this.setState((prevState) => {
                prevState.starred = false
            })
        }
    }

    render() {
        console.log(this)
        if (!this.props.project.index) {
            return (
                <h2>No Projects have been recorded.</h2>
            )
        } else if (this.state.starred === false) {
            return (
                <div>
                    <button onClick={this.handleStar()}></button>
                    {
                        this.props.project.index.filter(pro => pro.starred === false).map(project =>
                            <li key={project.id}>
                                <Project project={project}/>
                            </li> 
                        )
                                // <button onClick={() => this.handleDelete(project)}>Delete</button>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handleStar()}></button>
                    {
                        this.props.project.index.filter(pro => pro.starred === true).map(project =>
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