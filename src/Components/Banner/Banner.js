import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {API_KEY} from "../../Constants/Constants"
function Banner() {
   
  const [movie, setMovie] = useState()
  useEffect(() => {
    
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log(response.data.results[0]);
    })
     
  }, [])
  

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