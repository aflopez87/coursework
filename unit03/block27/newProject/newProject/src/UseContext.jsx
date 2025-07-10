import React, {useState} from 'react'
import axios from 'axios' 

const AuthContext = React.createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [apiMessage, setApiMessage] = useState("Sucess!")
    //Post/Create need the URl, the resource to post/create, and the headers to set the content type
    const login = async (usr)=>{
        const response = axios.post('https://fitnesstrac-kr.herokuapp.com/api/users/login',usr,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        setUser(response.data.user)
        setToken(response.data.token)
        alert(response.data.message)
    }
        const register = async (newUser)=>{
        const response =axios.post('https://fitnesstrac-kr.herokuapp.com/api/users/login',newUser,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        setUser(response.data.user)
        setToken(response.data.token)
        alert(response.data.message)
    }

    return(
    <AuthContext.Provider value = {{user, token, login, register}}>
        {children}
    </AuthContext.Provider>
    )
}




export {AuthContext, AuthProvider}