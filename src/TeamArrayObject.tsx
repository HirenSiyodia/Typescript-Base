import React from 'react'

interface playersProps {
    Players: {
        Name: string,
        Age: number,
        Team: string
     }[]
    }
const TeamArrayObject = (props: playersProps) => {
  return (
    <div>
      <h2>Team Array Object</h2>
      {props.Players.map((item, index) => (
        <div key={index}>
            <p>{item.Name}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamArrayObject
