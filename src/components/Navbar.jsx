import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css' 
const Navbar = () => {

  const [ inputData, setInputData] = useState();
  const inputEvent = (event) =>{
    console.log(event.target.value)
    setInputData(event.target.value)
  }


  const onsubmit = (event) => {
    event.preventDefault()
  }

  const logo = {
    width:"50px",
    height:"50px",
    color:"red",
    marginLeft:"100px"
  }
  const search = {
    width: "30px",
    height: "30px",
    color:"white",
    backgroundColor: "hsl(0, 0%, 18.82%)"
  }

  return (
   <div className="nav-container">
      <div className="logo">
        <YouTubeIcon className='youtube' style={logo}/>
        <p>YouTube</p>
      </div>
      <div className="search-bar">
        <form onSubmit={onsubmit}>
        <input type="text" className='search-input' placeholder='Search' value={inputData} onChange={inputEvent} />
        </form>
        <Link className='search-btn' to={`/${inputData}`}><SearchIcon style= {search}/></Link>
      </div>
   </div>
  )
}

export default Navbar
