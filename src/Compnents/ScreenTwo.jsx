import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function ScreenTwo() {
  const data = useLoaderData();
  const parameter = useParams();
  const id = parameter.id;
  const show = data.find(x => x.show.id == id)

  const [expand, setExpand] = useState(false)
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    const storedBookingHistory = localStorage.getItem('BookingHistory');
    if (storedBookingHistory) {
      const parsedBookingHistory = JSON.parse(storedBookingHistory);
      setBookingHistory(parsedBookingHistory);
    }
  }, []);

  const handleExpand = () => {
    setExpand(true);
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const showName = form.showName.defaultValue;
    const price = form.price.defaultValue;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const amount = form.amount.value;
    const booking = { showName, price, name, email, number, amount };

    // Update the booking history array in state
    const updatedBookingHistory = [...bookingHistory, booking];
    setBookingHistory(updatedBookingHistory);

    // Store the updated booking history array in the local storage
    localStorage.setItem('BookingHistory', JSON.stringify(updatedBookingHistory));

    form.reset();

  }

  //console.log(show);
  return (
    <div className='row m-5 gap-5'>
      <div className='col border rounded p-5 bg-info-subtle'>
        <h5>Summary:</h5>
        <div dangerouslySetInnerHTML={{ __html: show.show.summary }}>
        </div>
        <button onClick={handleExpand} className='btn btn-info' disabled={expand}>Book a ticket now</button>
        {
          expand && (
            <form onSubmit={handleBooking} className='row gap-1 p-5'>
              <input type="text" name="showName" defaultValue={show.show.name} disabled />
              <input type="text" name="price" defaultValue="$100" disabled />
              <input type="text" name="name" placeholder='Enter Your Name' />
              <input type="email" name="email" placeholder='Enter Your Email Address' />
              <input type="text" name="number" placeholder='Enter Your Phone Number' />
              <input type="number" name="amount" placeholder='Number of Tickets' />
              <input type="submit" value="Submit" />
            </form>)
        }
      </div>
      <div className='col-3'>
        <h4>Booking History</h4>
        {bookingHistory.length === 0 ? (
          <p>No booking history available.</p>
        ) : (
          <ul>
            {bookingHistory.map((booking, index) => (
              <li key={index}>
                <strong>Show Name:</strong> {booking.showName}<br />
                <strong>Price:</strong> {booking.price}<br />
                <strong>Name:</strong> {booking.name}<br />
                <strong>Email:</strong> {booking.email}<br />
                <strong>Phone Number:</strong> {booking.number}<br />
                <strong>Amount:</strong> {booking.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ScreenTwo;