import React from "react"

// using props from Rooms obj
const Room = ({ id, name, beds, price, available }) => {
  return (
    <>
      <hr></hr>
      <div className="room">
        <p>{name}</p>
        <p>Beds: {beds}</p>
        <p>Rate: ${price}/night</p>
        <b>
          {available ? (
            <button>Book Now</button>
          ) : (
            <p style={{ color: "red" }}>Not Available</p>
          )}
        </b>
      </div>
    </>
  )
}

export default Room
