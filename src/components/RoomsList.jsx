import React from "react"
import Room from "./Room"
import { useState } from "react"

const RoomsList = () => {
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
  )
}

export default RoomsList
