import { useState } from 'react'
import {useNavigate} from 'react-router'

function Purple({color}) {
    const navigate = useNavigate()

  return (
    <>
    <div classname = {color}>
        <h1>I'm {color}</h1>
        <button onClick={()=>{navigate("/blue")}}>Visit Blue</button>
         <button onClick={()=>{navigate("/red")}}>Visit Red</button>
    </div>
    </>
  )
}

export default Purple