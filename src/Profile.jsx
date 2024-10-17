import React from 'react'
import { useUser } from './Usercontext'
import { useContext } from 'react'

function Profile() {
    const {user, login, logout} = useUser()
  return (
   user?.firstname && <div>HI, {user?.firstname} {user?.lastname} Welcome to our site! the email you provided is {''}
    {user?.email}
    </div>
  )
}

export default Profile