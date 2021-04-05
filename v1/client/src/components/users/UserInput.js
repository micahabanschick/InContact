import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../../actions/users/addUser'
import usersReducer from '../../reducers/usersReducer'

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
    console.log(this.props.history)
    console.log(this.state)
    // this.props.history.push(`/users/${this.state.id}`)
    this.setState({
      // {name, password, email} = this.state
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    })
  }
  
  render() {
    console.log(this)
    if (this.props.user.id) {
      return (
        <Redirect to={`/users/${this.props.user.id}`} />
      )
    } else {
    // debugger
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
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {addUser})(UserInput)