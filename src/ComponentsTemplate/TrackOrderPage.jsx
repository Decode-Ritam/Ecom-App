import React from 'react'
import { FcApproval } from 'react-icons/fc'

function TrackOrderPage() {
    return (
        <div className='flex flex-col items-center m-auto w-[50vw] mt-8 '>
            <h1 className='font-bold text-xl'> Order Track  </h1>
            {/* Page Progress Bar */}
            <div className="flex items-center justify-center my-8 ">

                <div className="flex flex-col">
                    <div className="flex items-center   ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full    border-black bg-[#57ff57]  z-[9]  shadow-[0px_0px_6px_5px_#6c6c6c]">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8  rounded-full   border-black  bg-[orange] text-black  ">
                                {/* <span className="  ">1</span> */}
                                <FcApproval className='text-3xl' />
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#57ff57] border-black w-[60px] sm:w-[80px] md:w-[120px] lg:w-[150px] xl:w-[200px] "></div>

                    </div>
                    <div className="mt-4 ml-[-10px]">
                        <span className="font-[500] text-gray-900 dark:text-white text-[12px] md:text-[15px] xl:text-[18px]">Ordered</span>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full   first-letter:border-black bg-[#57ff57]    z-[9] shadow-[0px_0px_6px_5px_#6c6c6c] ">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full   border-black bg-[#f79249]  text-black   ">
                                {/* <span className=" ">2</span> */}
                                <FcApproval className='text-3xl' />
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#fff] border-black w-[60px] sm:w-[80px] md:w-[120px] lg:w-[150px] xl:w-[200px] "></div>
                    </div>
                    <div className="mt-4 ml-[-10px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[12px] md:text-[15px] xl:text-[18px]">Shipped</span>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full   border-black bg-[#ffffff]   z-[9]  shadow-[0px_0px_6px_5px_#6c6c6c]">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full   border-black bg-[orange]  text-black   ">
                                <span className=" ">3</span>
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#fff] border-black w-[60px] sm:w-[80px]d:w-[120px] lg:w-[150px] xl:w-[200px] "></div>

                    </div>
                    <div className="mt-4 ml-[-30px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[12px] md:text-[15px] xl:text-[18px]">Out for delivery</span>
                    </div>

                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full   border-black bg-[#ffffff]  z-[9] shadow-[0px_0px_6px_5px_#6c6c6c] ">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full   border-black bg-[orange]  text-black   ">
                                <span className=" ">4</span>
                            </div>
                        </div>

                    </div>
                    <div className="mt-4 ml-[-10px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[12px] md:text-[15px] xl:text-[18px]">Delivered</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TrackOrderPage