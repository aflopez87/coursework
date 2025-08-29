import { useState } from 'react'
import { useParams } from 'react-router'

function ActivityList() {
  const {activityId} = useParams
  //create state that will track a single activity from the API
  //create a useEffect that will use the activityId to query the activity from the API
  axios.get("URL/activities/"+activityId)
  return (
    <>
    <h1>Build a page to show activity details i.e name and description.</h1>
    </>
  )
}

export default Activity