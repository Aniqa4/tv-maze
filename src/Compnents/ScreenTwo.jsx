import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function ScreenTwo() {
  const data = useLoaderData();
  const parameter = useParams();
  const id = parameter.id;
  const show = data.find(x => x.show.id == id)
  console.log(show);
  return (
    <div className='container border rounded mt-5 p-5 bg-info-subtle'>
      <h5>Summary:</h5>
      <div dangerouslySetInnerHTML={{ __html: show.show.summary }}>
      </div>
      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal">Book a ticket now</button>
    </div>
  )
}

export default ScreenTwo;