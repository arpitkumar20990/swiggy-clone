import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Offers from './Offers';



const Hero = () => {
  return (
    <div className='w-full bg-[#ff5200]'>

      {/* introduction of page */}
      
      <div className='flex justify-center'>
        <div className='w-[75%] lg:w-[55%] md:text-4xl flex flex-col text-3xl p-4 font-bold text-white justify-center mt-10 md:mt-12 text-center'>
          <div>Order food & groceries. Discover best restaurants. Swiggy it!</div>
        </div>
      </div>


      {/* input for location and search  */}
      
      <div className='w-full flex flex-col md:flex-row gap-10 text-lg justify-center pb-2 mt-5 tracking-tight'>

        <div className='bg-white px-5 py-3 rounded-2xl md:w-[25%] flex items-center justify-center gap-2'>
          <span className='text-[#ff5200] text-2xl'><FaLocationDot /></span>
          <input className='w-full outline-none text-gray-900 font-semibold placeholder:text-gray-500 placeholder:font-semibold' type="text" placeholder='Enter your delivery location' />
          <span><IoIosArrowDown /></span>
        </div>


        <div className='bg-white px-5 py-3 rounded-2xl md:w-[30%] flex justify-between items-center'>
          <input className='w-full outline-none text-gray-900 font-semibold placeholder:text-gray-500 placeholder:font-semibold ' type="text" placeholder='Search for restaurant, item or more' />
          <span className=' text-2xl'><IoIosSearch /></span>
        </div>
      </div>
      

      {/* section for offers */}
        <div>
          <Offers/>
        </div>

    </div>
  )
}

export default Hero