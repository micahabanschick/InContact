import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
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
            if (p.id === project.id) {
                if (!!p.isStarred) {
                    p.isStarred = false
                } else {
                    p.isStarred = true
                }
            }
            return p
        })
        console.log(newProjects)
        this.setState({projects: newProjects})
    }

    toggleStarsOnly = (event) => {
        // event.preventDefault()
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Show/Hide Stars" onClick={this.toggleStarsOnly} />
                    </Form.Group>
                    {
                        this.state.projects.filter(pro => pro.isStarred === true).map(project =>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Show/Hide Stars" onClick={this.toggleStarsOnly} />
                    </Form.Group>
                    {
                        this.state.projects.map(project =>
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