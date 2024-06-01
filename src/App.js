import "./App.css"

function App() {
  // hotel obj with rooms
  let hotel = {
    rooms: {
      single: {
        beds: 1,
        price: 100,
      },
      double: {
        beds: 2,
        price: 200,
      },
      suite: {
        beds: 1,
        price: 500,
      },
    },
  }

  return (
    <div className="App">
      <h1>Hotel Rooms</h1>
      <ul>
        {Object.keys(hotel.rooms).map((room) => (
          <li key={room}>
            <h2>{room.charAt(0).toUpperCase() + room.slice(1)} Room</h2>
            <p>Beds: {hotel.rooms[room].beds}</p>
            <p>Price: ${hotel.rooms[room].price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
