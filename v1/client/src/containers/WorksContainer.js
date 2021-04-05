import React, { Component } from 'react'
import WorkInput from '../components/works/WorkInput'
import Works from '../components/works/Works'

class WorksContainer extends Component {


  render() {
    return (
      <div>
      {console.log(this.props)}
          <WorkInput user={this.props.user}/><br/>
          <Works index={this.props.work}/>
          {
            console.log(this.props.match)
          }
      </div>

    )

  }

}

export default WorksContainer