import React, {useState} from 'react'
import axios from 'axios' 

const AuthContext = React.createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [apiMessage, setApiMessage] = useState("Success!")
    //Post/Create need the URl, the resource to post/create, and the headers to set the content type
    const login = async (user)=>{
        const response = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',user,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        setToken(response.data.token)
        // alert(response.data.message)
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
                setApiMessage(err.response.data.message)
            }
        
       
    }

    return(
    <AuthContext.Provider value = {{user, token, login, register, apiMessage}}>
        {children}
    </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}