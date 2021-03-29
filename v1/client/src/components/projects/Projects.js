import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../../actions/projects/deleteProject'

const Projects = (props) => {

    console.log(props.projects)

    const handleDelete = (project) => {
        this.props.deleteProject(project.id, project.user_id)
    }

    return (
        <div>
            {
                props.projects && props.projects.map(project =>
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>{project.title} - ${project.description}</Link>
                        <button onClick={() => handleDelete(project)}>Delete</button>
                    </li> 
                )
            }
        </div>

    )
}

export default connect(null, {deleteProject})(Projects)