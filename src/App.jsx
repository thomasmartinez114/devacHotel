import "./App.css"
import DaysSelector from "./components/DaysSelector"
import RoomsList from "./components/RoomsList"

const App = () => {
  return (
    <div>
      <h1>Devac Hotel</h1>
      <DaysSelector />
      <RoomsList />
    </div>
  )
}

export default App
