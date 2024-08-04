import React from 'react'

function PaymentPage() {
    return (
        <div className="flex flex-col items-center  ">
            <h1 className='text-2xl font-bold my-2  '>Payment</h1>
            <div className=" flex flex-col items-center gap-2 border-black  border-[3px]  rounded-sm p-4  m-auto w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] ">
                {/* address snipepet */}
                <p className=' my-2 text-[18px] md:text-xl'>Please Select Your Payment method:</p>
                <div className="flex gap-4 p-4 rounded-md w-full hover:bg-orange-300  ">
                    <input type="radio" id="add1" name="address"  className='cursor-pointer' />
                    <label htmlFor="add1"> Credit or Debit card</label>
                </div>
                <div className="flex gap-4   p-4 rounded-md w-full hover:bg-orange-300  ">
                    <input type="radio" id="add2" name="address" className='cursor-pointer' />
                    <label htmlFor="add2">Net Banking</label>
                </div>
                <div className="flex gap-4  p-4 rounded-md w-full hover:bg-orange-300  ">
                    <input type="radio" id="add3" name="address" className='cursor-pointer' />
                    <label htmlFor="add3">Other UPI Apps</label>
                </div>
                <div className="flex gap-4   p-4 rounded-md w-full hover:bg-orange-300  ">
                    <input type="radio" id="add3" name="address" className='cursor-pointer' />
                    <label htmlFor="add3">EMI</label>
                </div>
                <div className="flex gap-4  p-4 rounded-md w-full hover:bg-orange-300 ">
                    <input type="radio" id="add4" name="address" defaultChecked className='cursor-pointer' />
                    <label htmlFor="add4">Cash on Delivery/Pay on Delivery</label>
                </div>



                <button    
                    className="bg-orange-400 hover:bg-orange-500 text-black font-[400] px-6 py-2 w-[90%] sm:w-[60%]   xl:w-[60%] my-8 rounded-sm">
                   Use this payment method
                </button>
            </div>
        </div>
    )
}

export default PaymentPage