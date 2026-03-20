import React from 'react'
import swiggy from "../assets/swiggy.svg"
import playstore from "../assets/playstore.avif"
import applestore from "../assets/applestore.avif"

const Footer = () => {
    const company = [
        "About Us",
        "Swiggy Corporate",
        "Careers",
        "Team",
        "Swiggy One",
        "Swiggy Instamart",
        "Swiggy Dineout",
        "Minis",
        "Pyng"
    ]
    const contact = [
        "Help & Support",
        "Partner With Us",
        "Ride With Us",

    ]

    const legal = [
        "Terma & Conditions",
        "Cookies policy",
        "Privacy policy",

    ]
    const life = [
        "Explore with swiggy",
        "Swiggy News",
        "Snackable",

    ]
    const cities = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Chennai",
        "Kolkata",
        "Chandigarh",
        "Noida"
    ]
    return (
        <div className='w-full h-auto bg-[#F0F0F5] md:p-10 pt-10 text-gray-500 font-semibold '>
            <div className='mx-auto w-full max-w-6xl flex flex-col items-center gap-6 tracking-tighter border-b-2 pb-10 border-gray-400 sm:flex-row sm:justify-around sm:items-start sm:px-4'>
                <div className='text-center sm:text-left'>
                    <img className='mx-auto w-[160px]' src={swiggy} alt="" />
                    <p>© 2025 Swiggy Limited</p>
                </div>

                <div className='md:flex md:flex-col hidden gap-3'>
                    <h2 className='text-xl text-black'>Company</h2>
                    {company.map((companyItem, idx) => (
                        <li className='list-none' key={`company-${idx}`}>{companyItem}</li>
                    ))}
                </div>

                <div className=' flex flex-col min-h-[200px] gap-3 justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-black'>Contact us</h2>
                        {contact.map((contactItem, idx) => (
                            <li className='list-none' key={`contact-${idx}`}>{contactItem}</li>
                        ))}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-black'>Legal</h2>
                        {legal.map((legalItem, idx) => (
                            <li className='list-none' key={`legal-${idx}`}>{legalItem}</li>
                        ))}
                    </div>
                </div>


                <div className='lg:flex lg:flex-col hidden gap-3'>
                    <h2 className='text-xl text-black'>Available in</h2>
                    {cities.map((cityItem, idx) => (
                        <li className='list-none' key={`city-${idx}`}>{cityItem}</li>
                    ))}
                    <button className='border-2 border-gray-300  font-medium p-1 rounded-lg'>685 cities</button>
                </div>
                
                
                <div className=' flex flex-col min-h-[200px] gap-3 justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-black'>Life At Swiggy</h2>
                        {life.map((lifeItem, idx) => (
                            <li className='list-none' key={`life-${idx}`}>{lifeItem}</li>
                        ))}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-black'>Social Media</h2>
                        {legal.map((legalItem, idx) => (
                            <li className='list-none' key={`social-${idx}`}>{legalItem}</li>
                        ))}
                    </div>
                </div>
            </div>

            <div className='hidden w-full text-2xl font-bold text-gray-500 md:flex items-center justify-center gap-3 mt-5'>
                <p>For better experience, download the Swiggy app now</p>
                <img className='cursor-pointer' src={applestore} alt="" />
                <img className='cursor-pointer' src={playstore} alt="" />
            </div>
        </div>
    )
}

export default Footer   