import React, {useState} from 'react'
import axios from 'axios' 

const AuthContext = React.createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState()
    // saves token locally
    const [token, setToken] = useState(localStorage.getItem("token")||"")
    const [apiMessage, setApiMessage] = useState("Success!")
    //Post/Create need the URl, the resource to post/create, and the headers to set the content type
    const login = async (user)=>{
        try{
            const response = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',user,{
            headers:{
                "Content-Type":"application/json"
            }
            })
        setToken(response.data.token)
        // saves token locally
        localStorage.setItem("token", response.data.token)
        // alert(response.data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }
        const register = async (newUser)=>{
            try{
            const response = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',newUser,{
            headers:{
                "Content-Type":"application/json"
            }
            })
             setToken(response.data.token)
             console.log(response.data)
            }catch(err){
                alert(err.response.data.message)
            }
    }

    return(
    <AuthContext.Provider value = {{user, token, login, register, apiMessage, setUser}}>
        {children}
    </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}