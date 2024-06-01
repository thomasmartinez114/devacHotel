import React from "react"

// using props from Rooms obj
const Room = ({ id, type, price, available }) => {
  // handleBook
  const handleBook = (event) => {
    event.preventDefault()
    // console.log("Room Booked")
    let amountofDays = document.getElementById("days").value
    let total = price * amountofDays
    // console.log(total)
    alert(`Booking Price: $${total}`)
  }

  const availableBookForm = (
    <form>
      <label>Booking Days </label>
      <input type="number" id="days" /> <br />
      <br />
      <button onClick={handleBook}>Book Now</button>
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
