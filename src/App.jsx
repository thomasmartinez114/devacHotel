import "./App.css"
import DaysSelector from "./components/DaysSelector"
import Header from "./components/Header"
import RoomsList from "./components/RoomsList"

const App = () => {
  return (
    <div>
      <Header />
      <DaysSelector />
      <RoomsList />
    </div>
  )
}

export default App
