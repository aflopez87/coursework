import {useContext} from "react";
import { AuthContext } from "../UseContext";
import { useNavigate } from "react-router";

export default function Registration() {
    const {register} = useContext(AuthContext)
    const navigate = useNavigate();
    const signIn = async (formData)=>{
        const newUser = {
            firstname: formData.get("firstname"),
            lastname:formData.get("lastname"),
            email:formData.get("email"),
            password:formData.get("password")
        }
        await register(newUser)
    }
    return (
    <>
    <section>
    <h1>Registration Form</h1>
    <form action = {signIn}>
        <label>First Name:
            <input name = "firstname"/>
        </label>
        <label>Last Name:
            <input name = "lastname"/>
        </label>
        <label>Email:
            <input name = "email"/>
        </label>
        <label>Password:
            <input name = "password" type="password"/>
        </label>
        <input type="submit" value="Submit" className="submit"/>
    </form>
     <button onClick={()=>navigate("/login")}>Already have an account? Login!</button>
    </section>
    </>
    )
};