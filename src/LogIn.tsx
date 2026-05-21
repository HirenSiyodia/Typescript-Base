import React, {useState} from 'react'

const LogIn = () => {
  const [isSignedIn, setSignedIn] = useState(true); //This true and false is used to show the user is sign in or not. 
  // if it is true then user is sign in and if it is false then user is not sign in. it shows type of boolean.
  
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

export default LogIn
