import React from "react"
import { useState } from "react"

const RoomsList = () => {
  // Initialize the state to hold the selected value
  const [selectedDay, setSelectedDay] = useState("1")
  const [roomPrice, setRoomPrice] = useState("100")
  // debug: log the selected day whenever it updates
  console.log("Days:", selectedDay)

  // hotel obj with rooms
  const rooms = [
    {
      id: 1,
      type: "Single Bed",
      price: 100,
      available: 1,
    },
    {
      id: 2,
      type: "Double Bed",
      price: 200,
      available: 1,
    },
    {
      id: 3,
      type: "Suite",
      price: 500,
      available: 0,
    },
  ]

  // Handle the change event for the select element
  const handleChange = (e) => {
    const newValue = e.target.value
    // console.log("e Value:", newValue) // Log the event value
    setSelectedDay(newValue)
  }

  // handleBook
  const handleBook = (price, type) => {
    // e.preventDefault()
    console.log("Room Booked")
    console.log(price)
    let total = price * selectedDay
    // console.log(`Total for booking room: ${type} is $${total}`)
    // alert(`Booking Price: $${total}`)
    // update p tag when book pressed
    // document.getElementById(
    //   "booking-cost"
    // ).innerHTML = `<p style='color: green;'>Total cost for ${amountOfDays} days is: <span style=' font-weight: bold'>$${total}</span></p>`
    alert(`Total for booking ${type} for ${selectedDay} day(s) is $${total}`)
  }

  return (
    <>
      <form>
        <label htmlFor="days">Select Days: </label>
        <select
          name="Number of Days"
          id="days"
          value={selectedDay}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form>
      <div className="room-list">
        {/* map through obj and render props within Room component */}
        {rooms.map((room) => {
          return (
            <>
              <hr></hr>
              <div className="room">
                <p className="room-type">{room.type}</p>
                <p>Rate: ${room.price}/night</p>
                {room.available ? (
                  <button onClick={() => handleBook(room.price, room.type)}>
                    Book
                  </button>
                ) : (
                  <p style={{ color: "red" }}>Not Available</p>
                )}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default RoomsList
