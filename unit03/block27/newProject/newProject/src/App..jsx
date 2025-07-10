import { useState } from 'react'
import {Route, Routes, Link} from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Activities from './components/AllActivities'
import Activity from './components/Activity'

function App() {


  return (
    <>
    <nav>
      <Link to="/"> Login</Link>
      <Link to="/register"> Make a new Accout!</Link>
      <Link to="/activities"> View Activities!</Link>
    </nav>
    <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/activities" element={<Activities/>}/>
      <Route path ="/activities/:activityId" element={<Activity/>}/>
    </Routes>
    </>
  )
}

export default App