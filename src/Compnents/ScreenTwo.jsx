import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function ScreenTwo() {
  const data=useLoaderData();
  const parameter=useParams();
  const id=parameter.id;
  const show=data.find(x=>x.show.id==id)
  console.log(show);
  return (
    <div>ScreenTwo</div>
  )
}

export default ScreenTwo;