import React from 'react'
import CheckoutOrderItems from './CheckoutOrderItems'

function OrderPage() {
    return (
        <div className="flex flex-col items-center  ">
            <h1 className='text-2xl font-bold my-4  '>Orders Items & Review</h1>

            <div className="flex flex-col lg:flex-row  m-auto mt-0   w-[90vw] gap-8 xl:gap-24 ">
                {/* This Right side Section */}
                <div className=" flex flex-col items-center gap-2 border-black  border-[3px]  rounded-sm p-4  w-full lg:w-[70%]  m-auto mt-0 mb-4">
                    {/* address snipepet */}
                    <p className='my-2 text-[13px] md:text-xl'>Please Review Your Order Details:</p>

                    {/* All poroducts items list */}
                    <CheckoutOrderItems />
                    <CheckoutOrderItems />
                    <CheckoutOrderItems />
                    <CheckoutOrderItems />

                </div>
                {/* This Left side Section */}
                <div className=" flex flex-col items-center   gap-2 border-black  border-[3px]  rounded-sm p-8  w-full lg:w-[30%]   m-auto mt-0   ">
                    {/* address snipepet */}
                    <p className='my-2 text-xl'>Order Summary</p>
                    <div className="flex flex-col w-full    m-auto mt-0   gap-3  ">
                        <div className="flex flex-row w-full   justify-between  ">
                            <span className="">items:</span>
                            <span className="">₹ 3,599</span>
                        </div>
                        <div className="flex flex-row w-full   justify-between  ">
                            <span className="">Delivery:</span>
                            <span className="">₹ 3,599</span>
                        </div>
                        <div className="flex flex-row w-full  justify-between  ">
                            <span className="">Total:</span>
                            <span className="">₹ 3,599</span>
                        </div>
                        <div className="flex flex-row w-full  justify-between  ">
                            <span className="">Offer Applied:</span>
                            <span className="">₹ 3,599</span>
                        </div>
                        <hr className='w-full h-1 my-1 border-slate-500' />

                        <div className="flex flex-row w-full text-[red] font-bold justify-between  ">
                            <span className=" ">Order Total:</span>
                            <span className="">₹ 1,97.00</span>
                        </div>
                    </div>
                    <hr className='w-full h-1 my-1 border-slate-500' />
                    <div className="flex flex-row w-full text-[red] font-semibold    ">
                        <span className=" ">Your Saving:</span>
                        <span className="">₹ 1,97.00 (55%)</span>
                    </div>
                    <button
                        className="bg-black text-white px-4 py-2   my-4 w-full rounded-sm">
                        Place Your Order
                    </button>
              
                </div>
            </div>

        </div>

    )
}

export default OrderPage