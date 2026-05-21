import React from 'react'

interface detailProps {
  name:string,
  age:number,
  isEligible: boolean
}

const Home = (props:detailProps) => {
  return (
    <div>
        <p>Hello, Your name is {props.name}</p>
        <p>{props.isEligible ? <p>Your age is {props.age} and you can vote</p> :<p>You cannot vote </p>}</p>
    </div>
  )
}

export default Home
