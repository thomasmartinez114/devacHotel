import "./App.css"
import { useState } from "react"
import Room from "./components/Room"

const App = () => {
  // hotel obj with rooms
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Providence",
      beds: 1,
      price: 100,
      available: 1,
    },
    {
      id: 2,
      name: "Warwick",
      beds: 2,
      price: 200,
      available: 1,
    },
    {
      id: 3,
      name: "East Greenwich",
      beds: 1,
      price: 500,
      available: 0,
    },
  ])

  return (
    <div>
      <h1>Devacc Hotel</h1>
      <div className="room-list">
        {/* map through obj and render props within Room component */}
        {rooms.map((room) => {
          return (
            <Room
              key={room.id}
              name={room.name}
              beds={room.beds}
              price={room.price}
              available={room.available}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
