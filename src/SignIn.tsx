import React, { useState } from 'react'

const SignIn = () => {
    const [isSignedIn, setSignedIn] = useState(false);

    const handlesignIn = () => {
        setSignedIn(true);
        console.log('User Signed In')
    }

    const handlesignOut = () => {
        setSignedIn(false);
        console.log('User Signed Out')
    }


  return (
    <div>
      <button onClick={handlesignIn}>Sign In </button>
      <button onClick={handlesignOut}>Sign Out </button>
      <div>{isSignedIn ? <p>user sign in</p> : <p>use not In</p>}</div>
    </div>
  )
}

export default SignIn
