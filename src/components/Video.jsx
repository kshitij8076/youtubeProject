import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import './Video.css'
import { fetchFromApi } from "../utils/fetchFromApi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Video = () => {

  const {link} = useParams()
  const [store , setStore ] = useState(link)
  const [videos , setVideos ] = useState([])

  useEffect(() =>{
    setStore(link)
    fetchFromApi(`search?part=snippet&q=${store}`).then((data) =>{setVideos(data.items) })
  },[link])

  return (
    <>
    <div className="main-div">
    {videos.map((elements, index) => {
      return (
        <Link to={`/video/${elements.id.videoId}`} style={{textDecoration:"none"}}>
        <div className="card-container" key={index} >
          <div className="card" style={{width: "20rem", height:"20rem",  border: "2px solid hsla(0, 0%, 53.3%, 0.4)"}}>
            <img src={elements.snippet.thumbnails.high.url} alt="image" />
            <div className="card-body">
              <Link to={`/video/${elements.id.videoId}`} className="card-title" style={{fontSize:"1.2rem" , textDecoration:"none"}}>{elements.snippet.title.slice(0,23)}..</Link>
              <br/>
              <Link to={`/channel/${elements.snippet?.channelId}`} style={{textDecoration:"none"}} className="card-text ">{elements.snippet.channelTitle} <CheckCircleIcon/></Link>
            </div>
        </div>
      </div>
      </Link>
      )
    })}
      </div>
    </>
  );
};

export default Video;
