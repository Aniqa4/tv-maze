import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function ScreenTwo() {
  const data = useLoaderData();
  const parameter = useParams();
  const id = parameter.id;
  const show = data.find(x => x.show.id == id)

  
  //console.log(show);
  return (
    <div className='container border rounded mt-5 p-5 bg-info-subtle'>
      <h5>Summary:</h5>
      <div dangerouslySetInnerHTML={{ __html: show.show.summary }}>
      </div>
      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal">Book a ticket now</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Book A Ticket</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form className='row gap-1 m-5 p-5'>
                <input type="text" name="showName" defaultValue={show.show.name} disabled/>
                <input type="text" name="price" defaultValue="$100" disabled/>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                <input type="email" name="email" placeholder='Enter Your Email Address'/>
                <input type="text" name="number" placeholder='Enter Your Phone Number'/>
                <input type="number" name="amount" placeholder='Number of Tickets'/>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreenTwo;