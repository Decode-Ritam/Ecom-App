import React from 'react'
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router-dom';
function CompleteOrder() {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center justify-center gap-2 py-12 ">
                <FcApproval className=' text-6xl  lg:text-8xl ' />
                <span className="text-2xl md:text-4xl font-semibold"> Complete This Order</span>
            </div>
            <div className="flex flex-col  ">
                <Link to="/vieworder" className="text-sm m-auto  font-semibold px-8 py-2 bg-[#6254F3] hover:bg-[#2f1dff] text-white"> View Your Order</Link>
            </div>

        </div>
    )
}

export default CompleteOrder