import React from 'react'

import AddressAddModel from './AddressAddModel';

function AddressPage() {
    return (
        <div className="flex flex-col items-center  ">
            <h1 className='text-2xl font-bold my-2  '>Your Address</h1>
            <div className=" flex flex-col items-center gap-2 border-black  border-[3px]  rounded-sm p-4  m-auto w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] ">
                {/* address snipepet */}
                <p className='my-2 text-xl'>Please Select Your Address:</p>
                <div className="border-black border-[2px] p-4 rounded-md w-full  ">
                    <input type="radio" id="add1" name="address" defaultChecked className='cursor-pointer' />
                    <label htmlFor="add1">  Ritam Sarkar
                        , Naihati, Vilage-Rajendrapur.P.o-Madarpur.P.s-Naihati,PIN-743166.</label>
                </div>
                <div className="border-black border-[2px] p-4 rounded-md w-full  ">
                    <input type="radio" id="add2" name="address" className='cursor-pointer' />
                    <label htmlFor="add2">  Ritam Sarkar
                        , Naihati, Vilage-Rajendrapur.P.o-Madarpur.P.s-Naihati,PIN-743166.</label>
                </div>

                <div className="">
                    <AddressAddModel />
                </div>

                <button
                    className="bg-black text-white px-6 py-2 w-[60%] md:w-[40%]   xl:w-[40%] my-8 rounded-sm">
                    Use this Address
                </button>
            </div>
        </div>
    )
}

export default AddressPage