import React from 'react'

function ViewOrderDetails() {
    return (
        <div className='flex flex-col items-center m-auto w-[98vw] md:w-[95vw] lg:w-[70vw] xl:w-[60vw] mt-8 '>
            <h1 className='font-bold  text-xl'> Order Details </h1>
            <div className="flex flex-col  border-black border-[2px] rounded-md w-full my-8 ">

                <div className="flex flex-row items-center justify-between bg-gray-200 p-2 text-[10px] md:text-[16px] rounded-md">
                    <div className="flex flex-col items-center ">
                        <span className='font-bold'>Order Placed    </span>
                        <span className='font-semibold text-[#2a889b]'>  18 March 2024 </span>
                    </div>
                    <div className="flex flex-col  items-center  ">
                        <span className='font-bold'>Order ID:  </span>
                        <span className='font-semibold text-[#2a889b]'>  # 4539-00324-423423-23 </span>
                    </div>

                </div>
                <div className="grid grid-flow-row grid-cols-3  p-4  text-[10px] md:text-[16px] ">
                    <div className="flex flex-col items-center gap-1">
                        <caption className='font-bold' >Shipping Address</caption>
                        <p className="">Ritam Sarkar
                            , Naihati, Vilage-Rajendrapur.P.o-Madarpur.P.s-Naihati,PIN-743166.</p>
                    </div>
                    <div className="flex flex-col  items-center gap-1">
                        <caption className='font-bold' >Payment Method</caption>
                        <p className="">Cash on delivery </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <caption className='font-bold' >Order Summary</caption>
                        <div className="flex flex-row items-start justify-between  w-full">
                            <p className="">Items/Subtotal:</p>
                            <p className="">₹ 368.00</p>
                        </div>
                        <div className="flex flex-row items-start  justify-between  w-full">
                            <p className="">Shiping:</p>
                            <p className="">₹ 40.00</p>
                        </div>
                        <div className="flex flex-row items-start justify-between  w-full">
                            <p className="">Total:</p>
                            <p className="">₹ 408.00</p>
                        </div>
                        <div className="flex flex-row items-start justify-between  w-full">
                            <p className="font-bold">Grand Total:</p>
                            <p className="font-bold">₹ 408.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewOrderDetails