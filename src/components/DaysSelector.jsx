import React from "react"

const DaysSelector = () => {
  return (
    <div>
      <form>
        <label for="days">Select Days: </label>
        <select name="Number of Days" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form>
    </div>
  )
}

export default DaysSelector
