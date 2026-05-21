import React, { useState } from 'react'

// Here we are creating a SignUp component that allows users to sign in and sign out. 
// We are using an interface to define the structure of the user object, which includes a name and an email. 
// The component maintains the state of the user, which can either be a user object or null (indicating that no user is signed in).
// The handleSign function sets the user state to a predefined user object, while the handleSignOut function resets it to null.
// The component renders buttons for signing in and signing out, as well as displaying the user's name and email if they are signed in.
const SignUp = () => {

    interface userProps {
    name:string,
    email:string
}

    const [user, setUser] = useState<userProps | null>(null) // Here we are using useState to manage the user state, 
    // which can either be of type userProps or null.

    const handleSign = () => {
        setUser({
            name:'Hiren',
            email:'Siyodiahiren7@gmail.com'
        })
    }

    const handleSignOut = () => {
        setUser(null)
    }

  return (
    <div>
      <button onClick={handleSign}>sign In</button>
      <button onClick={handleSignOut}>sign Out</button>
      <div>{user?.name}</div>
      {/* Here we are using optional chaining (?.) to safely access the name and email properties of the user object. */}
      <div>{user?.email}</div>
       {/* This means that if the user is null (i.e., no user is signed in), it will not throw an error and will simply render nothing for the name and email. */}
    </div>
  )
}

export default SignUp
