import React from "react"
import Room from "./Room"
import DaysSelector from "./DaysSelector"
import { useState } from "react"

const RoomsList = () => {
  // Initialize the state to hold the selected value
  const [selectedDay, setSelectedDay] = useState("1")

  // console.log(selectedDay * 5)

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

  return (
    <>
      <DaysSelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <div className="room-list">
        {/* map through obj and render props within Room component */}
        {rooms.map((room) => {
          return (
            <>
              <Room
                key={room.id}
                type={room.type}
                price={room.price}
                available={room.available}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export default RoomsList
