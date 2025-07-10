import { useState } from 'react'
import axios from 'axios'


function ControlledForm() {
   //optional to create dynamic view between login and register
    const [regOrLog, setRegOrLog] = useState(true)
    //in an object more ideal for complex form data
    const [formObject, setFormObject] = useState({
        username:"",
        password:"",
    })
    //track inputs on the form
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //POST - Create
    const register = async(e)=>{
        e.preventDefault()
        const response = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup', {username : username,password:password}, 
            {
            headers: { 
                "Content-Type": "application/json" 
              },
        })
        localStorage.setItem("token",response.data.token)
    }


    const signIn = async (e)=>{
        const storedToken = localStorage.getItem("token")
            e.preventDefault()
            const response = await axios.get('https://fsa-jwt-practice.herokuapp.com/authenticate', {
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${storedToken}` 
                  }
            })
            console.log("?")
            console.log(response.data)
        
    }
  return (
    <>
     <form onSubmit={regOrLog ? register : signIn}>
        <h1>{regOrLog? "Register":"Login"}</h1>
            <div >
                <label htmlFor='userName' >Username</label>
                <input 
                value = {username} 
                name = "userName"
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <label> Password
                <input 
                name = "password" 
                type='password'  
                value = {formObject.password}
                onChange={
                    (e)=>setFormObject(()=>{return{...formObject, password:e.target.value}})
                    } />
            </label>
            <input type = "submit" value={`${regOrLog? "Register":"Login"}`} />
        </form>
        <button onClick={()=>setRegOrLog(!regOrLog)}>{!regOrLog? "New here? Register":"Already have an account? Login"}</button>
        <h1>Welcome {username}!</h1>
    </>
  )
}

export default ControlledForm