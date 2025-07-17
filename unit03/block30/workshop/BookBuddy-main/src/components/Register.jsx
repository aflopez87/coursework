import {useContext} from "react";
import { AuthContext } from "../UseContext";

export default function Registration() {
    const {register, apiMessage} = useContext(AuthContext)
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
        <input type="submit" value="submit"/>
    </form>
    <h4>{apiMessage}</h4>
    </>
    )
};