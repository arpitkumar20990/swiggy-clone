import React from 'react'
import img1 from "../assets/offer1.avif"
import img2 from "../assets/offer2.avif"
import img3 from "../assets/offer3.avif"

const Offers = () => {
    const images = [img1, img2, img3]
    return (
        <div>
            <div className="flex gap-6 flex-wrap justify-center mt-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="md:w-90 md:h-90 w-50 h-50 overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={image}
                            alt={`img-${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offers