import { useState } from 'react'
import {useNavigate} from 'react-router'
function Colors({color}) {
    const navigate = useNavigate()

  return (
    <>
    <div className = {color}>
        <button onClick={()=>{navigate("/colors/blue")}}>Visit Blue</button>
        <button onClick={()=>{navigate("/colors/red")}}>Visit Red</button>
        <button onClick={()=>{navigate("/colors/purple")}}>Visit Purple</button>
    </div>
    </>
  )
}

export default Colors