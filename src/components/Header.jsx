import React, { useState } from 'react'
import swiggy from "../assets/swiggy_logo_white.avif"
import { MdArrowOutward } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-[#ff5200] w-full p-2 flex justify-center'>
            <div className='w-[95%] md:w-[90%] lg:w-[85%] p-2 md:p-4 flex items-center justify-between mt-2 md:mt-3'>
                <div>
                    <img className='w-[100px] md:w-[120px] lg:w-[150px]' src={swiggy} alt="Swiggy logo" />
                </div>

                <button 
                    className='lg:hidden text-white text-3xl'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex text-white text-medium tracking-tight font-bold gap-7 items-center'>
                    <div className='list-none flex gap-7'>
                        <li className='cursor-pointer hover:opacity-80 transition-opacity'>swiggy corporate</li>
                        <li className='cursor-pointer hover:opacity-80 transition-opacity'>partner with us</li>
                    </div>
                    <div className='flex gap-7'>
                        <button className='cursor-pointer border-2 border-white rounded-2xl p-3 flex items-center gap-2 hover:bg-white hover:text-[#ff5200] transition-colors'>
                            Get the app <span className='w-3.5 text-xl'><MdArrowOutward /></span>
                        </button>
                        <button className='bg-black cursor-pointer py-3 px-7 rounded-2xl font-bold hover:bg-gray-800 transition-colors'>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='lg:hidden absolute top-[70px] left-0 w-full rounded-2xl opacity-[95%] bg-[#f96a28] border-t border-orange-400 z-50'>
                    <div className='flex flex-col items-center py-6 gap-5 text-white font-bold'>
                        <span className='cursor-pointer hover:opacity-80 transition-opacity'>swiggy corporate</span>
                        <span className='cursor-pointer hover:opacity-80 transition-opacity'>partner with us</span>
                        <button className='cursor-pointer border-2 border-white rounded-2xl py-2 px-4 flex items-center gap-2 hover:bg-white hover:text-[#ff5200] transition-colors'>
                            Get the app <span className='text-xl'><MdArrowOutward /></span>
                        </button>
                        <button className='bg-black cursor-pointer py-2 px-6 rounded-2xl font-bold hover:bg-gray-800 transition-colors'>
                            Sign in
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
 