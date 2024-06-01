import React from "react"

// using props from Rooms obj
const Room = ({ beds, price }) => {
  return (
    <div>
      <p>{beds}</p>
      <p>{price}</p>
    </div>
  )
}

export default Room
