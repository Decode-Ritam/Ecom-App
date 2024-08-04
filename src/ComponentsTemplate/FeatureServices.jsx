import React from 'react'
import CardTemplate from './CardTemplate'
import { useProductContext } from '../Context/ProductContext';


function FeatureServices() {
    const { isLoading, featureProducts } = useProductContext();

    return (
        <div className='flex flex-col  flex-center   bg-[#d2d3cc4d] dark:bg-black rounded-md mx-2 md:mx-8   py-2 md:py-12 my-4 md:my-12'>
            <h1 className='text-[16px] md:text-2xl lg:text-4xl font-extrabold text-black dark:text-white text-center py-4'>Our Feature Products</h1>

            <div className="flex flex-row  items-center xl:justify-center overflow-x-auto  w-full px-2 py-2  md:px-8 md:py-8 gap-4 md:gap-8"
                style={{ 'WebkitOverflowScrolling': 'touch', 'scrollbarWidth': 'none' }}
            >
                {featureProducts.map((Products, index) =>
                    <CardTemplate key={index}  {...Products} />
                )}

            </div>

        </div>
    )
}

export default FeatureServices