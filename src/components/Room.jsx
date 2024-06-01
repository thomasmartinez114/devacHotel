import React from "react"

// using props from Rooms obj
const Room = ({ id, type, price, available }) => {
  const handleBook = () => {
    console.log("Room Booked")
  }

  const availableBookForm = (
    <form>
      <label>Booking Days </label>
      <input type="text" id="days" />
    </form>
  )

  return (
    <>
      <hr></hr>
      <div className="room">
        <p className="room-type">{type}</p>
        <p>Rate: ${price}/night</p>
        {available ? (
          availableBookForm
        ) : (
          <p style={{ color: "red" }}>Not Available</p>
        )}
      </div>
    </>
  )
}

export default Room
