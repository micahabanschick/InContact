import React from 'react'
import Work from './Work'

const TopWorks = (props) => {

  console.log(props)

  console.log(props.work)

//   return (

//     <div>
//       <h2>
//         {props.work[0].title}
//       </h2>
//     </div>
//   )



    if (!props.work.index) {
        return (
            <h2>No Works have been recorded.</h2>
        )
    } else {
        return (
            <div>
            {
                console.log(this)
                // <Link to={`/works/${work.id}`}>{work.title} - ${work.organization}</Link>
            }
                { 
                    props.work.index.map(work => 
                        <li key={work.id}>
                            <Work work={work}/>
                        </li> 
                    )
                }
            </div>

        )
    }


}

export default TopWorks