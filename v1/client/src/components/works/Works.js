import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWork} from '../../actions/works/deleteWork'

class Works extends Component {

    state = {}
    
    handleDelete = (work) => {
        this.props.deleteWork(work.id, work.userId)
    }

    render() {
        if (!this.props.index.length > 0) {
            return (
                <h2>No Works have been recorded.</h2>
            )
        } else {
            return (
                <div>
                {console.log(this)}
                    { 
                        this.props.index.map(work => 
                            <li key={work.id}>
                            <Link to={`/works/${work.id}`}>{work.title} - ${work.organization}</Link>
                            <button onClick={() => this.handleDelete(work)}>Delete</button>
                            </li> 
                        )
                    }
                </div>

            )
        }
    }
}

export default connect(null, {deleteWork})(Works)