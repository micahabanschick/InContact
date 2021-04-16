import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProject} from '../../actions/projects/addProject'

class ProjectInput extends Component {

  state = {
    title: '',
    description: '',
    demo: '',
    tools: '',
    length: '',
    starred: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('a')
    this.props.addProject(this.state, this.props.user.id)
    console.log('g')
    console.log(this)
    // this.setState({
    //   title: '',
    //   description: '',
    //   demo: '',
    //   tools: '',
    //   length: ''
    // })
  }

  render() {
    return (
        <div>
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
        </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    project: state.project
  }
}


export default connect(mapStateToProps, {addProject})(ProjectInput)