import React, { Component } from 'react'
import WorkInput from '../components/works/WorkInput'
import Works from '../components/works/Works'

class WorksContainer extends Component {


  render() {
    return (
      <div>
          <WorkInput user={this.props.user}/><br/>
          {
            // <Works works={this.props.user && this.props.user.works}/>
            console.log(this.props.match)
          }
      </div>

    )

  }

}

export default WorksContainer