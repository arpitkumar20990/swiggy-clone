import React, { useEffect, useState } from 'react'

const Groceries = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/groceries.json")
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((err) => console.error("Error loading images:", err));
    }, []);

    return (
        <div>
            <div className='w-full flex flex-col justify-center items-center md:mt-20 md:mb-20 mt-10 mb-10'>
                <div className='md:w-[85%] w-full text-left md:text-3xl font-bold tracking-tight'>
                    <p >Shop groceries on Instamart</p>
                </div>
                <div className='md:w-[90%] w-full mt-5'>
                    <div className='flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-5 scrollbar-hide'>
                        {images.map((img, key) => (
                            <div className='flex flex-col gap-1  text-center items-center '>
                                <div key={key} className='md:w-[170px] md:h-[170px] w-[70px] h-[70px]  flex items-center justify-center overflow-hidden cursor-pointer shrink-0'>
                                    <img className='w-full h-full object-cover' src={img.url} alt="" />
                                </div>
                                <p className='md:text-lg text-sm font-semibold text-gray-800 tracking-tight'>{img.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Groceries    