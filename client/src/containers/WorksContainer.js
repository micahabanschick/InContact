import React, { Component } from 'react'
import WorkInput from '../components/works/WorkInput'
import Works from '../components/works/Works'
import Resume from '../pages/Resume'

class WorksContainer extends Component {


  render() {
    return (
      <div>
      {console.log(this.props)}
          <Resume work={this.props.work}/>
          <WorkInput work={this.props.work}/><br/>
          <Works work={this.props.work}/>
          {
            console.log(this.props.match)
          }
      </div>

    )

  }

}

export default WorksContainer