import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdVerified } from "react-icons/md";
import { userReview } from './DataItems';

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";


function CustomerReview() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrevClick = () => {
        let SlideEffect = document.getElementById("SlideEffect")

        SlideEffect.classList.add("duration-700");
        SlideEffect.classList.add("scale-[0.8]");

        setTimeout(() => {
            SlideEffect.classList.remove("translate-x-[0%]");
            SlideEffect.classList.add("translate-x-[120%]");
        }, 600)

        setTimeout(() => {
            SlideEffect.classList.remove("duration-700");
            SlideEffect.classList.add("duration-0");

            SlideEffect.classList.remove("translate-x-[120%]");
            SlideEffect.classList.add("translate-x-[-120%]");
        }, 1200)

        setTimeout(() => {
            SlideEffect.classList.remove("duration-0");
            SlideEffect.classList.add("duration-700");

            SlideEffect.classList.remove("translate-x-[-120%]");
            SlideEffect.classList.add("translate-x-[0%]");

            //Update coustomer Data...
            setCurrentIndex((prevIndex) => {

                return prevIndex - itemsPerPage;
            });

        }, 1300);

        setTimeout(() => {
            SlideEffect.classList.remove("scale-[0.8]");
        }, 2000);

    };

    const handleNextClick = () => {

        let SlideEffect = document.getElementById("SlideEffect")
        SlideEffect.classList.add("duration-700");
        SlideEffect.classList.add("scale-[0.8]");

        setTimeout(() => {

            SlideEffect.classList.remove("translate-x-[0%]");
            SlideEffect.classList.add("translate-x-[-120%]");
        }, 600);
        setTimeout(() => {
            SlideEffect.classList.remove("duration-700");
            SlideEffect.classList.add("duration-0");

            SlideEffect.classList.remove("translate-x-[-120%]");
            SlideEffect.classList.add("translate-x-[120%]");
        }, 1200);
        setTimeout(() => {
            SlideEffect.classList.remove("duration-0");
            SlideEffect.classList.add("duration-700");

            SlideEffect.classList.remove("translate-x-[120%]");
            SlideEffect.classList.add("translate-x-[0%]");
            //Update coustomer Data...
            setCurrentIndex((prevIndex) => {
                return prevIndex + itemsPerPage;
            });

        }, 1300);
        setTimeout(() => {
            SlideEffect.classList.remove("scale-[0.8]");
        }, 2000);



    };

    const staRatingCompiler = (stars) => {

        return Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            return (
                <span key={index}>
                    {stars >= starValue ? (
                        <FaStar className="icon" />
                    ) : stars >= starValue - 0.5 ? (
                        <FaStarHalfAlt className="icon" />
                    ) : (
                        <AiOutlineStar className="icon" />
                    )}
                </span>
            );
        });


    };
    const reviewsToDisplay = userReview.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className='flex flex-col justify-center items-center bg-[#d2d3cc4d] dark:bg-black rounded-md py-8 mx-2 md:mx-8 gap-8 overflow-hidden '>
            <h1 className='text-[16px] md:text-2xl lg:text-4xl font-extrabold text-black dark:text-white text-center  '>Our Happy Customers</h1>

            <div
                id='SlideEffect'
                className="flex flex-row flex-wrap items-center justify-center  gap-4 md:gap-8 lg:gap-2 xl:gap-12  w-full   h-[495px] sm:h-[310px]  md:h-[375px] lg:h-auto"
            >

                {/* Message Body.. */}

                {reviewsToDisplay.map((items, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1 border-[1px] md:border-[3px] rounded-lg border-[#a9a9a9] p-5 md:px-8 md:py-3  w-[300px]  lg:w-[300px] xl:w-[400px]  h-auto sm:h-[170px] xl:h-[220px]  "
                    >
                        <div className='flex flex-row items-center   gap-2 text-black dark:text-white text-[12px] md:text-[14px]   xl:text-[20px]'>
                            <span className="font-bold"> {items.name}</span>
                            <MdVerified className='text-[#00ffe0]' />
                        </div>
                        <div className='flex flex-row text-orange-400  text-[11px]    xl:text-[13px]'>
                            {staRatingCompiler(items.rating)}

                        </div>
                        <p className='text-black dark:text-white text-[10px] md:text-[12px] xl:text-[14px]  py-2 '>
                            {items.message}
                        </p>
                    </div>
                ))}


            </div>
            <div className="flex justify-between px-8 gap-12">
                {/* Button to go to previous page */}
                <button
                    onClick={handlePrevClick}
                    disabled={currentIndex === 0}
                    className={`${currentIndex === 0 ? "cursor-not-allowed opacity-[0.3]" : ""} flex flex-row items-center justify-center text-white  rounded-sm  bg-[#252724] gap-1 px-5 py-2`}
                >
                    <GrFormPreviousLink className='text-white text-xl' />
                    Prev
                </button>

                {/* Button to go to next page */}
                <button
                    onClick={handleNextClick}
                    disabled={currentIndex >= userReview.length - itemsPerPage}
                    className={`${currentIndex >= userReview.length - itemsPerPage
                        ? "cursor-not-allowed opacity-50"
                        : ""
                        } flex flex-row items-center justify-center text-white rounded-sm bg-[#252724] gap-1 px-5 py-2`}
                >
                    Next
                    <GrFormNextLink className='text-white text-xl' />
                </button>

            </div>

        </div >
    )
}

export default CustomerReview