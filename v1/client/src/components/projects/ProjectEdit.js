import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editProject} from '../../actions/projects/editProject'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ProjectEdit extends Component {

  state = {
    title: '',
    description: '',
    demo: '',
    tools: '',
    length: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let project = {...this.state, id: this.props.project.id, userId: this.props.project.userId}
    this.props.editProject(project)
    this.setState({
        title: '',
        description: '',
        demo: '',
        tools: '',
        length: ''
    })
  }

  render() {
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Edit Project
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <form onSubmit={this.handleSubmit}>
                    <label>Project Title: </label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>
                    <br/>
                    <label>Project Description: </label>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
                    <br/>
                    <label>Project Demo: </label>
                    <input type='text' placeholder='Demo' value={this.state.demo} name="demo" onChange={this.handleChange}/>
                    <br/>
                    <label>Project Tools: </label>
                    <input type='text' placeholder='Tools' value={this.state.tools} name="tools" onChange={this.handleChange}/>
                    <br/>
                    <label>Project Length: </label>
                    <input type='text' placeholder='Length' value={this.state.length} name="length" onChange={this.handleChange}/>
                    <br/><br/>
                    <input type="submit"/>
                </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

ProjectEdit.defaultProps = {
  projects: {}
}


export default connect(null, {editProject})(ProjectEdit)