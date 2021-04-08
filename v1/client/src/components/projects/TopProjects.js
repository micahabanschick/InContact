import React from 'react'
import Project from './Project'

const TopProjects = (props) => {

  console.log(props)

  console.log(props.project)

//   return (

//     <div>
//       <h2>
//         {props.project[0].title}
//       </h2>
//     </div>
//   )



    if (!props.project.index) {
        return (
            <h2>No projects have been recorded.</h2>
        )
    } else {
        return (
            <div>
            {
                console.log(this)
                // <Link to={`/projects/${project.id}`}>{project.title} - ${project.organization}</Link>
            }
                { 
                    props.project.index.map(p => 
                        <li key={p.id}>
                            <Project project={p}/>
                        </li> 
                    )
                }
            </div>

        )
    }


}

export default TopProjects