import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWork} from '../actions/deleteWork'

const Works = (props) => {

    let handleDelete = (work) => {
        this.props.deleteWork(work.id, work.user_id)
    }

    return (
        <div>
        {props.works.map(work =>
            <li key={work.id}>
                <Link to={`/works/${work.id}`}>{work.title} - ${work.orgaanization}</Link>
                <button onClick={() => handleDelete(work)}>Delete</button>
            </li> )}
        </div>

    )
}

export default connect(null, {deleteWork})(Works)