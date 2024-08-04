import React from 'react'
import { Link } from 'react-router-dom';

function SideNavbar() {


    return (
        <div
            className={`sideBar 
   absolute lg:relative bg-[#e0e0e0] dark:bg-[#3b3b3b]
   overflow-auto  h-[50vh] 
    w-[200px]
    sm:hidden
     translate-x-[-200px]  
   transition-all 
    p-8
    border-t-[5px] border-white
      `} >

            <div className="sm:hidden flex flex-col items-center gap-8    ">
                <Link to='/' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#e0e0e0] dark:border-[#3b3b3b]  hover:border-[#6254f3]  border-b-[3px] ">Home</Link>
                <Link to='/about' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#e0e0e0] dark:border-[#3b3b3b]  hover:border-[#6254f3] border-b-[3px]">About</Link>
                <Link to='/products' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#e0e0e0] dark:border-[#3b3b3b]  Link  to='/'hover:border-[#6254f3] border-b-[3px]">Product</Link>
                <Link to='/contact' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#e0e0e0] dark:border-[#3b3b3b]  hover:border-[#6254f3] border-b-[3px]"  >Contact</Link>

            </div>

        </div>
    )
}

export default SideNavbar