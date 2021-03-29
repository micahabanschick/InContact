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
    this.setState(
      {[event.target.name]: event.target.value},
      () => console.log('Login: ' + JSON.stringify(this.state))
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
    console.log(this.state)
    this.setState({
      // {name, password, email} = this.state
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    })
  }

  render() {
    return (
        <div>
          <h2>Inside User Input</h2>
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