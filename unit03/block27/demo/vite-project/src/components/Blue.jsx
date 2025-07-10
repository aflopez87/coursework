import { useState } from 'react'

function Blue({color}) {


  return (
    <>
    <div className = {color}>
        <h1>I'm {color}</h1>
    </div>
    </>
  )
}

export default Blue