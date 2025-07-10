import { useState } from 'react'
import { useNavigate } from 'react-router'

function Activities() {
  //import the stuff we need from context
  const navigate = useNavigate
  //create state for the activities we will call from the api make sure you start as an empty array
  //create a useEffect that uses fetch or Axios to get all the activiites from the API and save them to state

  return (
    <>
    <h1>Map over the stateActivities and display each {actitivy.name} for each activity!! </h1>
    <p>Make each button or p tag clickable. useNavigate should be called for the onclick. UseNavigate will push them to the new page</p>
    <p onClick = {()=>navigate('/activities/{activity.id}')}>Activity 17</p>

    </>
  )
}

export default Activities