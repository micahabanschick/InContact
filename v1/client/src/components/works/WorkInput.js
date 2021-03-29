import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addWork} from '../../actions/works/addWork'

class WorkInput extends Component {

  state = {
    title: '',
    organization: '',
    length: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addWork(this.state, this.props.user.id)
    this.setState({
      title: '',
      organization: '',
      length: ''
    })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Work Title: </label>
                <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>
                <br/>
                <label>Work Organization: </label>
                <input type='text' placeholder='Organization' value={this.state.organization} name="organization" onChange={this.handleChange}/>
                <br/>
                <label>Work Length: </label>
                <input type='text' placeholder='Length' value={this.state.length} name="length" onChange={this.handleChange}/>
                <br/><br/>
                <input type="submit"/>
            </form>
        </div>
    )

  }
}


export default connect(null, {addWork})(WorkInput)