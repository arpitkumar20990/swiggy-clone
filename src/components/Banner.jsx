import React from 'react'
import banner from "../assets/App_download_banner.avif"

const Banner = () => {
  return (
    <div className='sm:w-[85%] w-full  mx-auto flex  items-center '>
      
        <img src={banner} alt="App download banner" />
      
    </div>
  )
}

export default Banner   