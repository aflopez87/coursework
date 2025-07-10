import { useState } from 'react'
import {Route, Routes, Link} from 'react-router'
import Red from './components/Red'
import Purple from './components/Purple'
import Blue from './components/Blue'
import Colors from './components/Colors'
import Color from './components/Color'


function App() {


  return (
    <>
      <nav>
        <Link to ="/red">Red</Link>
        <Link to ="/blue">Blue</Link>
        <Link to ="/purple">Purple</Link>
      </nav>
     <Routes>
        <Route path="/" element = {<Colors/>}/>
        <Route path="/colors/:color" element = {<Color/>}/>
       
     </Routes>


     {/* <Routes>
        <Route path="/" element = {<h1>Hello I'm the home page!!</h1>}/>
        <Route path="/red" element = {<Red color = "Red"/>}/>
        <Route path="/purple" element = {<Purple color ="Purple"/>}/>
        <Route path="/blue" element = {<Blue color ="Blue"/>}/>
     </Routes> */}
    </>
  )
}

export default App