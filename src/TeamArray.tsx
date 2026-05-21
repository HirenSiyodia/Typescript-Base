import React from 'react'

interface TeamProps {
    Team : string[]
}

const TeamArray = (props:TeamProps) => {
  return (
    <div>
        <h2>Team Array</h2>
        <ul>
            {props.Team.map((team,index) => (
                <li key={index}>{team}</li>
            ))}
        </ul>
    </div>
  )
    
}
export default TeamArray
