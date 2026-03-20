import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [images, setImages] = useState([]);
    

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center md:mt-20 md:mb-20 mb-10 mt-10'>
        <div className='md:w-[85%] w-full text-left md:text-3xl text-lg font-bold tracking-tight'>
            <p >Order our best food options</p>
        </div>
      <div className='md:w-[90%] w-full mt-5'>
        <div className='flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-2 scrollbar-hide'>
          {images.map((img, key) => (
            <div key={key} className='md:w-[150px] md:h-[150px] w-[70px] h-[70px]  flex items-center justify-center overflow-hidden cursor-pointer shrink-0'>
              <img className='w-full h-full object-cover' src={img.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories   