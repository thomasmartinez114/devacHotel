import React, { useState } from "react"

const DaysSelector = ({ selectedDay, setSelectedDay }) => {
  // Handle the change event for the select element
  const handleChange = (e) => {
    const newValue = e.target.value
    // console.log("e Value:", newValue) // Log the event value
    setSelectedDay(newValue)
  }

  // debug: log the selected day whenever it updates
  console.log("Selected Day:", selectedDay)

  return (
    <div>
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
      <p>Selected Day: {selectedDay}</p>
    </div>
  )
}

export default DaysSelector
