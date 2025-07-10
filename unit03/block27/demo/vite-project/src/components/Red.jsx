import { useState } from 'react'

function Red({color}) {


  return (
    <>
    <div classname = {color}>
        <h1>I'm {color}</h1>
    </div>
    </>
  )
}

export default Red