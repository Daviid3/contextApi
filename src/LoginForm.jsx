import React from 'react'
import { useUser } from './Usercontext'

function LoginForm() {
 const {user, login, logout, setuser, update} = useUser()

 const handleclick = () => {
    login("jon", "doe", "jon@gmail.com")
 }

 const handlesetuser = () => {
    setuser({
        firstname: "me",
        lastname: "you",
        email: "me@gmail.com"
    })
 }

 const updateuser = () => {
    update(
        "jackie", "chan", "chan@gmail.com" 
    )
 }
  return  (
   <div>LoginForm
    <button onClick={handleclick}>signin</button>
    <button onClick={()=>logout()}>signout</button>
    <button onClick={handlesetuser}>testsetuser</button>
    <button onClick={updateuser}>update</button>
   </div>
  )
}

export default LoginForm