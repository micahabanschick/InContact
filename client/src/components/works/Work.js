import React from 'react'
import WorkEdit from './WorkEdit'
import {connect} from 'react-redux'
import {deleteWork} from '../../actions/works/deleteWork'
import Container from 'react-bootstrap/Container'

const Work = (props) => {

  console.log(props)
  
  let {id, title, organization, length, userId} = props.work

  let handleDelete = (work) => {
    props.deleteWork(work.id, work.userId)
  }

  let style = {
    background: "rgb(111,205,81)",
    padding: "3em"
  }

  console.log(props.work)
  return (

    <Container style={style}>
      <h2>{id}<br/>{title}<br/>{organization}<br/>{userId}</h2>
      <WorkEdit work={props.work}/>
      <button onClick={() => handleDelete(props.work)}>Delete</button>
    </Container>
  )


}

export default connect(null, {deleteWork})(Work)