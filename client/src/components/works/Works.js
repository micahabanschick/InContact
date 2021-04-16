import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWork} from '../../actions/works/deleteWork'
import Work from './Work'

class Works extends Component {

    state = {}
    
    handleDelete = (work) => {
        this.props.deleteWork(work.id, work.userId)
    }

    render() {
        console.log(this)
        if (!this.props.work.index.length) {
            return (
                <h2>No Works have been recorded.</h2>
            )
        } else {
            return (
                <div>
                {console.log(this)}
                    { 
                        this.props.work.index.map(work => 
                            <li key={work.id}>
                                <Work work={work}/>
                                </li> 
                                )
                                // <button onClick={() => this.handleDelete(work)}>Delete</button>
                    }
                </div>

            )
        }
    }
}

export default connect(null, {deleteWork})(Works)