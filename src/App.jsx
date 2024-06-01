import "./App.css"
import { useState } from "react"
import Room from "./components/Room"

const App = () => {
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
    <div>
      <h1>Devac Hotel</h1>
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
    </div>
  )
}

export default App
