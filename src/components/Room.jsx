import React from "react"

// using props from Rooms obj
const Room = ({ id, type, price, available }) => {
  // handleBook
  const handleBook = (e) => {
    e.preventDefault()
    console.log("Room Booked")
    // let total = price * selectedDay
    // console.log(total)
    // alert(`Booking Price: $${total}`)
    // update p tag when book pressed
    // document.getElementById(
    //   "booking-cost"
    // ).innerHTML = `<p style='color: green;'>Total cost for ${amountOfDays} days is: <span style=' font-weight: bold'>$${total}</span></p>`
    // alert(`Total cost for ${selectedDay} days is: $${total}`)
  }

  // const availableBookForm = (
  //   <form>
  //     <label>Booking Days </label>
  //     {/* <input
  //       type="number"
  //       id="days"
  //       onChange={(e) => {
  //         setAmountOfDays(e.target.value)
  //       }}
  //     />{" "} */}
  //     <br />
  //     <br />
  //     {/* <button onClick={handleBook}>Book Now</button> */}
  //     {/* <p id="booking-cost"></p> */}
  //   </form>
  // )

  return (
    <>
      <hr></hr>
      <div className="room">
        <p className="room-type">{type}</p>
        <p>Rate: ${price}/night</p>
        {available ? (
          <button onClick={handleBook}>Book</button>
        ) : (
          <p style={{ color: "red" }}>Not Available</p>
        )}
      </div>
    </>
  )
}

export default Room
