import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
      <div className='content'>
        <h1 className='title'>movie name</h1>
        <div className='banner_Buttons'>
          <button className='button'>play</button>
          <button className='button'>my List</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner