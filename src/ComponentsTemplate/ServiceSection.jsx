import React from 'react'
import { ServiceOffers } from './DataItems'

function ServiceSection() {




    return (
        <div className="flex flex-col  flex-center   bg-[#d2d3cc4d] dark:bg-black rounded-md px-1 md:px-8  py-4 md:py-12 my-2   md:my-8 mx-2 md:mx-8   ">
            <h1 className='text-[16px] md:text-2xl lg:text-4xl font-extrabold text-black dark:text-white text-center py-4'>Our Commitment</h1>


            <div className='flex flex-row flex-wrap items-center justify-evenly  '>
                {ServiceOffers.map((items, index) => (
                    <div key={index} className="flex flex-row gap-3 my-4 text-black dark:text-white">
                        <div className="flex flex-col items-start">
                            {items.image}
                        </div>
                        <div className="flex flex-col items-start w-[225px]">
                            <h3 className="text-[16px] md:text-[18px] lg:text-xl font-semibold">
                                {items.heading}
                            </h3>
                            <p className="text-[14px]">
                                {items.content}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ServiceSection