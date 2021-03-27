import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUser} from '../../actions/users/addUser'

class UserInput extends Component {

  state = {
    name: '',
    password: '',
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: '',
      password: '',
      email: ''
    })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
              <br/>
              <label>Password: </label>
              <input type='text' placeholder='Password' value={this.state.password} name="password" onChange={this.handleChange}/>
              <br/>
              <label>Email: </label>
              <input type='text' placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange}/>
              <br/><br/>
              <input type="submit"/>
            </form>
        </div>
    )
  }
}

export default connect(null, {addUser})(UserInput)