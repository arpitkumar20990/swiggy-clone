import React from 'react'

const Cities = () => {
    const foodCities = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Chennai",
        "Kolkata",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Noida",
        "Chandigarh",
        "Indore"
    ]
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col gap-5 mt-10 sm:mt-14 lg:mt-20 px-4">
                <div className="w-full sm:w-[90%] lg:w-[75%] flex text-left text-2xl sm:text-3xl font-bold tracking-tight">
                    <p className="w-full">Cities With Food Delivery</p>
                </div>

                <div className="flex flex-wrap justify-center items-center w-full sm:w-[95%] lg:w-[90%] mx-auto gap-3 sm:gap-4 lg:gap-5">
                    {foodCities.map((city, key) => (
                        <div
                            key={key}
                            className="flex whitespace-nowrap tracking-tight justify-center items-center font-semibold text-gray-600 border border-gray-300 rounded-xl px-3 py-3 text-center cursor-pointer w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[20%]"
                        >
                            Order food in {city}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col gap-5 mt-10 sm:mt-14 lg:mt-20 mb-10 sm:mb-14 lg:mb-20 px-4">
                <div className="w-full sm:w-[90%] lg:w-[75%] flex text-left text-2xl sm:text-3xl font-bold tracking-tight">
                    <p className="w-full">Cities With Grocery Delivery</p>
                </div>

                <div className="flex flex-wrap justify-center items-center w-full sm:w-[95%] lg:w-[90%] mx-auto gap-3 sm:gap-4 lg:gap-5">
                    {foodCities.map((city, key) => (
                        <div
                            key={key}
                            className="flex whitespace-nowrap tracking-tight justify-center items-center font-semibold text-gray-600 border border-gray-300 rounded-xl px-3 py-3 text-center cursor-pointer w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[20%]"
                        >
                            Order grocery delivery in {city}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cities