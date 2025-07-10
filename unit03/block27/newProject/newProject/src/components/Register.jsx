import { useState , useContext} from 'react'
import { AuthContext } from '../UseContext'

function Register() {
  //pass the username and password that the user fills out to this function
const {Register} = useContext(AuthContext)

  return (
    <>
    <form>
        <h1>Build your registration form with a username input and password input A button or submit input that calls Register</h1>
    </form>
    </>
  )
}

export default Register