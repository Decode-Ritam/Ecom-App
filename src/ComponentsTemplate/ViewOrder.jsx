import React from 'react'
import Header from './Header'
import CheckoutOrderItems from './CheckoutOrderItems'
import { Link } from 'react-router-dom'

function ViewOrder() {
    return (
        <div className="">
             <div className='flex flex-col gap-2 w-[98vw] md:w-[90vw] lg:w-[70vw] xl:w-[50vw] m-auto items-center justify-center'>
                <h1 className="text-xl font-bold py-4">Your Orders</h1>
                {/* Arriving order box */}
                <div className="flex flex-col gap-1 border-[1px] md:border-[2px] border-black w-full rounded-md">
                    {/* Heading */}
                    <div className="flex flex-row items-center justify-between py-1 px-2 w-full bg-gray-300 rounded-t-md text-[10px] md:text-[15px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Order Placed </div>
                            <div className=" font-[500] opacity-[0.5]"> 18 March 2024</div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Total Price </div>
                            <div className=" font-[500] opacity-[0.5]">₹ 5,399</div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold"> Ship To </div>
                            <div className="text-[#2a889b] font-[500] cursor-pointer"> view Address </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Order ID: </div>
                            <div className="text-[#2a889b] font-[500] cursor-pointer"> # 4539-00324-423423-23</div>
                        </div>
                    </div>
                    {/* Order Items */}

                    <div className="flex flex-row items-start gap-4 justify-between md:gap-8  p-2 md:p-4">
                        <div className=" border-white   border-x-[0px] md:border-x-[28px] h-[120px]  sm:h-[140px]   rounded-lg ">
                            <img
                                className=' h-full w-full object-fill'
                                src="https://m.media-amazon.com/images/I/51JaVlChBRL._AC_UL480_FMwebp_QL65_.jpg" alt="...." />


                        </div>
                        <div className="my-3 text-[10px] md:text-sm lg:text-xl">
                            Men's Regular Fit Solid Polo T-Shirt
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 text-[9px] md:text-[16px] ">

                            <Link to="/track_order_page" class="  m-auto  font-semibold text-center px-2   md:px-8  py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Track Package
                            </Link>
                            <Link to="/View_order_details" class="  m-auto  font-semibold text-center px-2   md:px-8 py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Order Details
                            </Link>
                            <button class="  m-auto  font-semibold text-center px-2   md:px-8 py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Cancel Order
                            </button>

                        </div>
                    </div>



                </div>
                {/* ...........Shipped order box............ */}

                <div className="flex flex-col gap-1 border-[1px] md:border-[2px] border-black w-full rounded-md">
                    {/* Heading */}
                    <div className="flex flex-row items-center justify-between py-1 px-2 w-full bg-gray-300 rounded-t-md text-[10px] md:text-[15px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Order Shipped </div>
                            <div className=" font-[500] opacity-[0.5]"> 18 March 2024</div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Total Price </div>
                            <div className=" font-[500] opacity-[0.5]">₹ 5,399</div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold"> Ship To </div>
                            <div className="text-[#2a889b] font-[500] cursor-pointer"> view Address </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <div className="font-semibold">Order ID: </div>
                            <div className="text-[#2a889b] font-[500] cursor-pointer"> # 4539-00324-423423-23</div>
                        </div>
                    </div>
                    {/* Order Items */}

                    <div className="flex flex-row items-start gap-4 justify-between md:gap-8  p-2 md:p-4">
                        <div className=" border-white   border-x-[0px] md:border-x-[28px] h-[120px]  sm:h-[140px]   rounded-lg ">
                            <img
                                className=' h-full w-full object-fill'
                                src="https://m.media-amazon.com/images/I/51JaVlChBRL._AC_UL480_FMwebp_QL65_.jpg" alt="...." />


                        </div>
                        <div className="my-3 text-[10px] md:text-sm lg:text-xl">
                            Men's Regular Fit Solid Polo T-Shirt
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 text-[9px] md:text-[16px] ">

                            <Link to="/track_order_page" class="  m-auto  font-semibold text-center px-2   md:px-8  py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Track Package
                            </Link>
                            <Link to="/View_order_details" class="  m-auto  font-semibold text-center px-2   md:px-8 py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Order Details
                            </Link>
                            <button class="  m-auto  font-semibold text-center px-2   md:px-8 py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white rounded-sm w-full"  >
                                Cancel Order
                            </button>

                        </div>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default ViewOrder