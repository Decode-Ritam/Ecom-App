import React from 'react'
import { MdForwardToInbox } from "react-icons/md";
import { Link } from 'react-router-dom';

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

function Footer() {


    return (
        <section className='Footer  '>
            {/* fotter banner */}
            <section className='m-auto max-w-[95vw] md:max-w-[80vw] px-8 xl:px-16 py-8 bg-black dark:bg-gray-700 rounded-md shadow-[3px_5px_20px_0px_#464646] transform md:translate-y-1/2 ' >
                <div className="flex flex-col md:flex-row items-center justify-between   gap-4 md:gap-8 lg:gap-12">

                    <div className="flex flex-col items-start justify-center   ">
                        <p className="text-white text-[12px] md:text-2xl lg:text-3xl xl:text-5xl font-bold   ">STAY UPTO DATE ABUT OUR LATEST OFFERS. </p>
                    </div>
                    <div className="flex flex-col items-center justify-evenly   gap-3 md:gap-6">

                        <div className="inputbox flex items-center px-3   rounded-3xl w-[280px] h-[30px] md:h-[40px] bg-white ">

                            <MdForwardToInbox className='text-[18px]text-2xl text-black ' />

                            <input
                                className="bg-transparent outline-none text-[12px] md:text-[15px]  text-black   pr-5 pl-5  w-full "
                                type="text"
                                placeholder="Enter Your Email Address"
                                autoComplete="off"
                                

                            />
                        </div>
                        <div className="inputbox flex items-center justify-center text-[12px] md:text-[15px] rounded-3xl w-[280px]  h-[30px] md:h-[40px] bg-white hover:text-white dark:hover:bg-black hover:bg-gray-500 transition-colors duration-200 ">

                            Subscribe to Shopping Light

                        </div>


                    </div>

                </div>
            </section>

            {/* ...........Main footer............... */}
            <div className="bg-gray-100   dark:bg-[#252724] mt-12 md:mt-0 pt-[20px] pb-[20px] md:pt-[150px] md:pb-[70px] ">

                <div className=" flex  flex-row  py-8  lg:py-2 w-full justify-evenly gap-8 flex-wrap">
                    {/* ...........colum section.......... */}
                    <div className="flex flex-col   gap-4 md:gap-8 ">
                        <div className=" text-xl md:text-3xl font-bold text-black dark:text-white">
                            Shoping Light
                        </div>
                        <div className="text-[#6a6a6a99] font-semibold dark:text-[#a9a9a999] text-[12px] md:text-sm w-[200px]">
                            Our Trusted Service Satisfy Your Disier Life, So Join Our 1000+ Happy Family & Live a Great Life.
                        </div>
                        <div className="flex flex-row gap-6 md:gap-11">
                            <Link to="/" title='Instagram' className='px-2 py-2 rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all duration-200'> <BsInstagram /></Link>
                            <Link to="/" title='Facebook' className='px-2 py-2 rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all duration-200'> <FaFacebookF /> </Link>
                            <Link to="/" title='TwitterX' className='px-2 py-2 rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all duration-200'><BsTwitterX />  </Link>
                            <Link to="/" title='Telegram' className='px-2 py-2 rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all duration-200'><BiLogoTelegram />  </Link>
                        </div>
                    </div >

                    <div className="flex flex-col  gap-4 md:gap-8">
                        <div className=" text-[12px] md:text-2xl font-semibold text-[#626262] dark:text-white  ">
                            COMPANY
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 text-[17px] text-[#6a6a6a99] dark:text-[#a9a9a999] font-semibold">
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white ">  About </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white ">  Fetures </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white ">  Work </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white ">  Carrer </Link>

                        </div>

                    </div >

                    <div className="flex flex-col  gap-4   md:gap-8 ">
                        <div className=" text-[12px] md:text-2xl font-semibold text-[#626262] dark:text-white  ">
                            HELP
                        </div>
                        <div className="flex flex-col  gap-2 md:gap-4text-[17px] text-[#6a6a6a99] dark:text-[#a9a9a999] font-semibold">
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white">  Customer Support </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white">  Delivary Details </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white">  Terms & Conditions </Link>
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white">  Privacy Policy </Link>

                        </div>

                    </div >

                    <div className="flex flex-col   gap-4  md:gap-8">
                        <div className=" text-[12px] md:text-2xl font-semibold text-[#626262] dark:text-white  ">
                            FAQ
                        </div>
                        <div className="flex flex-col  gap-2 md:gap-4text-[17px] text-[#6a6a6a99] dark:text-[#a9a9a999] font-semibold">
                            <Link to="/" className=" text-[14px] hover:text-black dark:hover:text-white ">  Account </Link>
                            <Link to="/" className=" text-[14px]  hover:text-black dark:hover:text-white">  Manage Deliveries</Link>
                            <Link to="/" className=" text-[14px]  hover:text-black dark:hover:text-white">  Orders </Link>
                            <Link to="/" className=" text-[14px]  hover:text-black dark:hover:text-white">  Payment </Link>

                        </div>

                    </div >


                </div>
                <hr className='m-auto max-w-[80vw] h-[2px] bg-gray-400 my-2 md:my-10' />

                <div className="flex flex-col gap-2 md:gap-4 md:flex-row text-[12px] md:text-[16px]  items-center justify-evenly   ">
                    <p className="text-black dark:text-white ">@2024 Shoping Light. All Rights Reserved</p>
                    <p className="text-black dark:text-white ">Other Service.</p>
                </div>
            </div >


        </section >
    )
}

export default Footer