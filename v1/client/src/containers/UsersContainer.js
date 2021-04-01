import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/users/fetchUsers'
import Users from '../components/users/Users'
import User from '../components/users/User'
import UserInput from '../components/users/UserInput'
import Projects from '../components/projects/Projects'
import Project from '../components/projects/Project'
import ProjectInput from '../components/projects/ProjectInput'
import Works from '../components/works/Works'
import Work from '../components/works/Work'
import WorkInput from '../components/works/WorkInput'
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
            <NavBar user={this.props.user}/>
            <Switch>
              <Route exact path='/users/:id/projects' render={(routerProps) => <Projects {...routerProps} project={this.props.project}/>}/>
              <Route path='/users/:id/projects/:projetId' render={(routerProps) => <Project {...routerProps} project={this.props.project}/>}/>
              <Route path='/users/:id/projects/new' render={(routerProps) => <ProjectInput {...routerProps} project={this.props.project}/>}/>

              <Route exact path='/users/:id/works' render={(routerProps) => <Works {...routerProps} work={this.props.work}/>}/>
              <Route path='/users/:id/works/:workId' render={(routerProps) => <Work {...routerProps} work={this.props.work}/>}/>
              <Route path='/users/:id/works/new' render={(routerProps) => <WorkInput {...routerProps} work={this.props.work}/>}/>
              
              <Route path='/users/new' component={UserInput}/>
              <Route exact path='/users/:id' render={(routerProps) => <User {...routerProps} user={this.props.user}/>}/>
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