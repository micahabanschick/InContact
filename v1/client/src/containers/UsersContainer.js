import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/users/fetchUsers'
import Users from '../components/users/Users'
import User from '../components/users/User'
import UserInput from '../components/users/UserInput'
import NavBar from '../components/NavBar'

class UsersContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
      return (
          <div>
            <h1>Inside Users Container</h1>
            {
              console.log(this.props)
            }
            <NavBar/>
            <Switch>
              <Route path='/users/new' component={UserInput}/>
              <Route path='/users/:id' render={(routerProps) => <User {...routerProps} user={this.props.user}/>}/>
              <Route exact path='/users' render={(routerProps) => <Users {...routerProps} user={this.props.user}/>}/>
            </Switch>         
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)