import React from 'react'

    interface detailsProps {
        Details : {
            Fname: string,
            Lname: string,
            Age: number
        }
    }

const PersonDetails = (props:detailsProps) => {

  return (
    <div>
      <div>First Name is : {props.Details.Fname}</div>
      <div>Last Name is : {props.Details.Lname}</div>
      <div>Age is : {props.Details.Age}</div>
    </div>
  )
}

export default PersonDetails
