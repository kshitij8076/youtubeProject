import React, { useEffect , useState} from 'react'
import './PlayVideo.css'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const PlayVideo = () => {
  const fakeSnippet = {snippet:"this is fake to avoid error"}
  const {id} = useParams()
  const [videoDetail , setVideoDetail ] = useState(fakeSnippet)
  
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0])
    })
  },[id])

  // console.log(videoDetail)
  return (
    <div className='playvideo-container'>
      <div className="real-video">
      <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder="0" className="iframe" allowFullScreen> </iframe>
      </div>
      <div className="title-channel">
        <h2 >{videoDetail.snippet.title}</h2>
        <p> {videoDetail.snippet.channelTitle} <CheckCircleIcon/></p>
      </div>
     
    </div>
  )
}

export default PlayVideo
