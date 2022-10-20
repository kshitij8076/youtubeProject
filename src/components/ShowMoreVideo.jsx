import React, { useEffect , useState} from 'react'
import {Link } from 'react-router-dom'
import './ShowMoreVideo.css'
import { fetchFromApi } from '../utils/fetchFromApi'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ShowMoreVideo = (props) => {
    const name = props.channelName;
    const [storeChannelData, setStoreChannelData] = useState([])
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${name}`).then((data) => {setStoreChannelData(data.items)})
    },[name])
    // console.log(storeChannelData)
    return (

        <div className='show-more-card-container'>
        {storeChannelData.map((currentElement, idx) => {
          return (
          <Link style={{textDecoration:"none"}} to={`/video/${currentElement.id.videoId}`} >
          <div  key={idx} className="card" style={{width: "18rem",height:"20rem",  border: "2px solid hsla(0, 0%, 53.3%, 0.4)"}}>
            <img src={currentElement.snippet.thumbnails.high.url} alt="thumbnail" />
            <div className="card-body">
              <h1 className="card-title">{currentElement.snippet.title.slice(0,20)}..</h1>
              <p className="card-text">{currentElement.snippet.channelTitle} <CheckCircleIcon/> </p>
            </div>
          </div>
        </Link>
          )
        })}
     
      </div>
    )
}

export default ShowMoreVideo