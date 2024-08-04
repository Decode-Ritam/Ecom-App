import React from 'react'
import Header from '../ComponentsTemplate/Header'
import AddressPage from '../ComponentsTemplate/AddressPage'
// import { MdDownloadDone } from "react-icons/md";
import PaymentPage from '../ComponentsTemplate/PaymentPage';
import OrderPage from '../ComponentsTemplate/OrderPage';
import CompleteOrder from '../ComponentsTemplate/CompleteOrder';

function CheckOut() {
    return (
        <div className=''>
 
            {/* Page Progress Bar */}
            <div className="flex items-center justify-center my-8 ">

                <div className="flex flex-col">
                    <div className="flex items-center   ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full    border-black bg-[#57ff57]  z-[9]  shadow-[0px_0px_6px_5px_#6c6c6c]">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8  rounded-full   border-black  bg-[orange] text-black  ">
                                <span className="  ">1</span>
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#57ff57] border-black w-[40px] sm:w-[80px] md:w-[120px] lg:w-[150px] xl:w-[200px] "></div>

                    </div>
                    <div className="mt-4 ml-[-15px]">
                        <span className="font-[500] text-gray-900 dark:text-white text-[14px] md:text-[15px] xl:text-[18px]">Address</span>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full   first-letter:border-black bg-[#57ff57]    z-[9] shadow-[0px_0px_6px_5px_#6c6c6c] ">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full   border-black bg-[#f79249]  text-black   ">
                                <span className=" ">2</span>
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#fff] border-black w-[40px] sm:w-[80px] md:w-[120px] lg:w-[150px] xl:w-[200px] "></div>
                    </div>
                    <div className="mt-4 ml-[-15px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[14px] md:text-[15px] xl:text-[18px]">Payment</span>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center ">
                        <div className=" relative flex items-center justify-center h-3 w-3 sm:h-8 sm:w-8 p-4 sm:p-5  rounded-full   border-black bg-[#ffffff]   z-[9]  shadow-[0px_0px_6px_5px_#6c6c6c]">
                            <div className="absolute flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full   border-black bg-[orange]  text-black   ">
                                <span className=" ">3</span>
                            </div>
                        </div>
                        <div className="h-2 lg:h-3 border-[1px] bg-[#fff] border-black w-[40px] sm:w-[80px] md:w-[120px] lg:w-[150px] xl:w-[200px] "></div>

                    </div>
                    <div className="mt-4 ml-[-10px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[14px] md:text-[15px] xl:text-[18px]">Order</span>
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
                    <div className="mt-4 ml-[-15px]">
                        <span className="font-medium text-gray-900 dark:text-white text-[14px] md:text-[15px] xl:text-[18px]">Complete</span>
                    </div>

                </div>

            </div>
            {/* <AddressPage /> */}
            {/* <PaymentPage /> */}
            {/* <OrderPage /> */}
            <CompleteOrder />
        </div>
    )
}

export default CheckOut