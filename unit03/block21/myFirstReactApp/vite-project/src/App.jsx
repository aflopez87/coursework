import { useState } from 'react'
import { useEffect } from 'react'
import viteLogo from  '/vite.svg'

function App() {
  const [num, setNum] = useState(0)
  // const counter = (num)=> {
  //   setNum(()=>{})
  // }
  return (
    <div className='countContainer'>
    <h1>Hello {num}</h1>
    <button onClick={()=>setNum((prevState)=> prevState+1)}>Change the count</button>    
    </div>
  )
}

export default App