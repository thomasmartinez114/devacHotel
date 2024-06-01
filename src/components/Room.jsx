import React from "react"

// using props from Rooms obj
const Room = ({ id, name, beds, price, available }) => {
  return (
    <div className="room">
      <p>{name}</p>
      <p>Beds: {beds}</p>
      <p>Rate: ${price}/night</p>
      <b>{available ? "Available" : "Not Available"}</b>
      <hr></hr>
    </div>
  )
}

export default Room
