import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './VideoDetails.css'
import { PlayVideo , ShowMoreVideo } from './export'
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetails = () => {
  const { id } = useParams()
  const [channelName , setChannelName  ] = useState()

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setChannelName(data.items[0].snippet.channelTitle)
    })
  },[id])

  return (
    <>
    <div className="videodetail-container">
      <PlayVideo/>
      <ShowMoreVideo channelName= {channelName} />
    </div>
   
    </>
  )
}

export default VideoDetails
