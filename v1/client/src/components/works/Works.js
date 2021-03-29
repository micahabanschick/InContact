import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWork} from '../../actions/works/deleteWork'

class Works extends Component {

    state = {}
    
    handleDelete = (work) => {
        this.props.deleteWork(work.id, work.user_id)
    }

    render() {
        return (
            <div>
                {
                    this.props.projects && this.props.works.map(work =>
                    <li key={work.id}>
                        <Link to={`/works/${work.id}`}>{work.title} - ${work.orgaanization}</Link>
                        <button onClick={() => this.handleDelete(work)}>Delete</button>
                    </li> 
                    )
                }
            </div>

        )
    }
}

export default connect(null, {deleteWork})(Works)