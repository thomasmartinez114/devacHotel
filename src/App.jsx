import "./App.css"
import { useState } from "react"
import Room from "./components/Room"

const App = () => {
  // hotel obj with rooms
  const [rooms, setRooms] = useState([
    {
      id: 1,
      beds: 1,
      price: 100,
    },
    {
      id: 2,
      beds: 2,
      price: 200,
    },
    {
      id: 3,
      beds: 1,
      price: 500,
    },
  ])

  return (
    <div>
      <div>
        {rooms.map((room) => {
          return <Room key={room.id} beds={room.beds} price={room.price} />
        })}
      </div>
    </div>
  )
}

export default App
