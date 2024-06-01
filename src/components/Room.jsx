import React from "react"

// using props from Rooms obj
const Room = ({ id, name, beds, price }) => {
  return (
    <div className="room">
      <h2>{name}</h2>
      <p>Beds: {beds}</p>
      <p>Rate: ${price}/night</p>
    </div>
  )
}

export default Room
