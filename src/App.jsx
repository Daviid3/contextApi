import { useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'
import { UserProvider } from './Usercontext'
import Profile from './profile'

function App() {

  return (
    <UserProvider>
     <Profile/>
     <LoginForm/>
    </UserProvider>
  )
}

export default App
