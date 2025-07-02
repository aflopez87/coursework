import { useState } from 'react'


function UncontrolledForm() {

    const collectData = (data)=>{
        console.log(data.get("userName"),data.get("password"))
    }

  return (
    <>
        <form action={collectData}>
            <div >
                <label htmlFor='userName' >Username</label>
                <input name = "userName"/>
            </div>
            <label> Password
                <input name = "password" type='password'/>
            </label>
            <input type = "submit" value={"submit"}/>
        </form>
    </>
  )
}

export default UncontrolledForm