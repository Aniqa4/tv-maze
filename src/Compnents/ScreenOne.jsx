import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ScreenOne() {
  const [shows, setShows] = useState([]);
 

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(res => res.json())
      .then(data => {
        setShows(data);
      })
  }, [])

  //console.log(shows);
  return (
    <div className='container'>
      <h1 className=' text-center mt-5 text-info'>Welcome to TV MAZE</h1>
      <div className='row justify-content-center gap-2'>
        {
          shows.map((show,index) =>
            <div key={index} className='col-5 border rounded-3 d-flex gap-5 p-3 bg-info-subtle'>
              <img src={show.show.image.medium} className='rounded-3' />
              <div>
                <h3>{show.show.name}</h3>
                <p>Language: {show.show.language}</p>
                <p>Runtime: {show.show.runtime}</p>
                <button className='btn btn-info'><Link to={`/${show.show.id}`}> More</Link></button>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default ScreenOne;
