import React from 'react'

function CheckoutOrderItems() {
    return (
        <div className="border-black border-[2px] p-4 rounded-md w-full  ">
            <center className='text-green-800 font-bold'>Ariving 21 March 2024</center>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-gray-100 dark:bg-black ">
                <div className="flex flex-row items-center gap-4  md:gap-8 ">
                    <div className=" border-white   border-x-[28px] h-[120px] sm:h-[140px]   rounded-lg ">
                        <img
                            className=' h-full w-full object-fill'
                            src="https://m.media-amazon.com/images/I/51JaVlChBRL._AC_UL480_FMwebp_QL65_.jpg" alt="...." />


                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[16px] md:text-[18px] font-old text-black dark:text-white">Men's Regular Fit Solid Polo T-Shirt </h2>
                        <div className=" text-black dark:text-white font-bold text-sm">Size:
                            <span className=" font-normal "> XL</span>
                        </div>
                        <div className=" text-black dark:text-white font-bold text-sm">Color:
                            <span className="font-normal"> Black</span>
                        </div>
                        <h1 className="text-black dark:text-white  text-xl font-bold"> ₹ 599</h1>
                    </div>
                </div>

                <div className="flex flex-row-reverse md:flex-col items-center  justify-between w-full md:w-auto md:h-full gap-4">


                    {/* Update Product Quantity */}

                    <div className='w-full text-black font-bold dark:text-white' >Quantity - <span className="font-normal">10</span>  </div>


                    <div className="w-full">
                        <span className="text-black dark:text-white  text-[16px] font-bold"> Total:</span>
                        <span className="text-black dark:text-white  text-[16px] font-bold opacity-[0.5]"> ₹ 234</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CheckoutOrderItems