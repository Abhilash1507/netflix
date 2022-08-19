import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios  from "../../Axios";
import {API_KEY, imageUrl} from "../../Constants/Constants";
import YouTube from 'react-youtube';
function RowPost(props) {
 
  const [movie, setMovie] = useState([])
  const [urlId, setUrlID] = useState('')

 useEffect(() => {
   
   axios.get(props.url).then((response)=>{
     console.log(response.data)
     setMovie(response.data.results);
   }).catch(err=>{
    //  alert('Network Error')
   })
  
 }, [])

 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }
  };
   
  const movieTrailor=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length !==0){
            setUrlID(response.data.results[0])
        }else{
         alert('Trailer not found..')
        }
    })
  }

  return (
    <div className='row'>
        <h2 className='h2' >{props.title}</h2>
        <div className='posters' >
          
          {
            movie.map((obj)=>
           
              <img onClick={()=>movieTrailor(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />

            )
          }
       
                
        </div>
       {  urlId && <YouTube opts={opts} videoId={urlId.key}/>}


    </div>
  )
}

export default RowPost