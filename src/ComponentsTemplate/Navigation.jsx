import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='flex flex-row items-center  justify-center text-black dark:text-white bg-[#ffffff]  dark:bg-[#252724]  h-10 px-1 sm:px-5 border-b-2 border-[#bfbfbf]'>

      {/* Secend row */}

      {/* This is Middle Content   */}
      <div className="sm:flex flex-row items-center gap-3  lg:gap-16 xl:gap-28 hidden">
        <Link to='/' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3]  border-b-[3px] ">Home</Link>
        <Link to='/about' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]">About</Link>
        <Link to='/products' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]">Product</Link>
        <Link to='/contact' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]"  >Contact</Link>
      </div>



    </nav>)
}

export default Navigation