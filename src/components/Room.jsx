import React from "react"

const Room = ({ beds, price }) => {
  return (
    <div>
      <p>{beds}</p>
      <p>{price}</p>
    </div>
  )
}

export default Room
