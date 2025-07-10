import { useState } from 'react'
import { useParams } from 'react-router'

function Color() {
    const {color} = useParams()
    console.log(color)
  return (
    <>
    <div className = {color}>
        <h1>I'm {color}</h1>
    </div>
    </>
  )
}

export default Color