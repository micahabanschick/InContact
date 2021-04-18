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

    handleStar = (project) => {
        let newProjects = this.state.projects.map(p => {
            if (p === project) {
                if (!p.isStarred) {
                    p.isStarred = true
                } else {
                    p.isStarred = false
                }
            }
            return p
        })
        this.setState({projects: newProjects})
    }

    toggleStarsOnly = (event) => {
        event.preventDefault()
        if (!this.state.starsOnly) {
            this.setState({starsOnly: true})
        } else {
            this.setState({starsOnly: false})
        }
    }

    render() {
        console.log(this)
        if (!this.props.project.index) {
            return (
                <h2>No Projects have been recorded.</h2>
            )
        } else if (!!this.state.starsOnly) {
            return (
                <div>
                    <button onClick={this.toggleStarsOnly()}></button>
                    {
                        this.props.project.index.filter(pro => pro.starred === true).map(project =>
                            <li key={project.id}>
                                <Project 
                                    project={project}
                                    handleStar={this.handleStar}
                                />
                            </li> 
                        )
                                // <button onClick={() => this.handleDelete(project)}>Delete</button>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.toggleStarsOnly()}></button>
                    {
                        this.props.project.index.map(project =>
                            <li key={project.id}>
                                <Project 
                                    project={project}
                                    handleStar={this.handleStar}
                                />
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