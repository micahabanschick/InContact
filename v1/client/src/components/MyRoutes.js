import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from './users/Users'
import User from './users/User'
import Projects from './projects/Projects'
import Project from './projects/Project'
import ProjectInput from './projects/ProjectInput'
import Works from './works/Works'
import Work from './works/Work'
import WorkInput from './works/WorkInput'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import ProjectsContainer from '../containers/ProjectsContainer'
import WorksContainer from '../containers/WorksContainer'

const MyRoutes = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  // let user = props.user.index.filter(user => user.id === props.match.params.id)[0]

  return (
    <Switch>
      <Route exact path='/users/:id/home' render={(routerProps) => <Home {...routerProps} user={props.user} project={props.project} work={props.work}/>}/>
      <Route exact path='/users/:id/profile' render={(routerProps) => <User {...routerProps} user={props.user} project={props.project} work={props.work}/>}/>
      <Route exact path='/users/:id/about' render={(routerProps) => <About {...routerProps} user={props.user}/>}/>
      <Route exact path='/users/:id/contact' render={(routerProps) => <Contact {...routerProps} user={props.user}/>}/>
      <Route exact path='/users/:id/resume' render={(routerProps) => <WorksContainer {...routerProps}/>}/>
      <Route exact path='/users/:id/projects' render={(routerProps) => <ProjectsContainer {...routerProps}/>}/>
    {
      // <Route exact path='/users/:userId/projects/new' render={(routerProps) => <ProjectInput {...routerProps} project={props.project}/>}/>
      // <Route path='/users/:userId/projects/:id' render={(routerProps) => <Project {...routerProps} project={props.project}/>}/>
      
      // <Route exact path='/users/:userId/works' render={(routerProps) => <Works {...routerProps} work={props.work}/>}/>
      // <Route exact path='/users/:userId/works/new' render={(routerProps) => <WorkInput {...routerProps} work={props.work}/>}/>
      // <Route path='/users/:userId/works/:id' render={(routerProps) => <Work {...routerProps} work={props.work}/>}/>
      
      // <Route exact path='/users' render={(routerProps) => <Users {...routerProps} user={props.user}/>}/>
    }
    </Switch> 
  )
}

export default MyRoutes