
import React, { useEffect, useState } from 'react';
import { SlideBarData } from '../ComponentsTemplate/DataItems';
import { Link } from 'react-router-dom';


function SlideshowCarousel() {
    const [bannerImges, setBannerImges] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 1;
    const [isPaused, setIsPaused] = useState(false);
    const slideInterval = 3000; // Interval for auto slide (in milliseconds)


    useEffect(() => {
        setTimeout(() => {
            setBannerImges([...SlideBarData]);
        }, 1000);
    }, [])

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideBarData.length);
            }, slideInterval);
        }
        return () => clearInterval(interval);
    }, [isPaused]);


    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handlePrevClick = () => {
        //Set Previous Banner..
        setCurrentIndex((prevIndex) => (prevIndex - 1 + SlideBarData.length) % SlideBarData.length);
    };

    const handleNextClick = () => {
        //Set Next Banner..
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideBarData.length);

    };

    //Set onclick Current Banner to Display....
    const indicatersClick = (index) => {
        setCurrentIndex(index)
    }





    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full rounded-bl-md rounded-br-md bg-[#a2a2a2] h-[150px]  md:h-[250px] lg:h-[90vh]"
        >

            {bannerImges?.length > 0 ? (
                bannerImges.map((item, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? `block ` : 'hidden'} fade-in overflow-hidden rounded-lg h-[150px] md:h-[250px] lg:h-[90vh]`}
                    >
                        <Link to={`/products`} className="block">
                            <img
                                src={item.url}
                                className="w-full h-full object-fill top-0 face"
                                style={{ animationName: "fade", animationDuration: "1.5s" }}
                                alt="Slide"
                            />
                        </Link>
                    </div>
                ))
            ) : (
                //  Loding Section  ..........

                <section className="flex items-center justify-center h-full">
                    <div className="flex items-center justify-center bg-[#ffffff50] w-[15vw] h-auto text-xl font-semibold py-2 gap-4 rounded-sm">
                        <p className="loader border-[4px] border-[#b9b9b9] border-t-[#6254f3] border-b-[#6254f3] rounded-full w-[40px] h-[40px]"></p>
                        <p className="flex items-center">Loading...</p>
                    </div>
                </section>
            )}







            {/* Slider indicators */}
            <section className="absolute flex -translate-x-1/2  rtl:space-x-reverse bottom-5 left-1/2 ">

                <div className="relative flex items-center   gap-3 px-10 py-1  rounded-full  bg-[#7d7d7d62]">


                    {SlideBarData.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-1 h-1 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-100'} hover:border-black border-[1px] border-transparent`}
                            onClick={() => indicatersClick(index)}
                        ></button>
                    ))}

                </div>

            </section>

            {/* Previous button */}
            <div className="prevbutton absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 ">
                <button
                    onClick={handlePrevClick}
                    className={` cursor-pointer inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-300  hover:bg-white/50 border-[4px] border-transparent hover:border-white`}
                >
                    <svg className="w-4 h-4 text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    {/* <span  >Previous</span> */}
                </button>
            </div>

            {/* Next button */}
            <div className="nextbutton absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4  ">
                <button
                    onClick={handleNextClick}
                    className={`cursor-pointer inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-300 hover:bg-white/50 border-[4px] border-transparent hover:border-white`}
                >
                    <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    {/* <span className="sr-only">Next</span> */}
                </button>
            </div>

        </div >

    );
}

export default SlideshowCarousel;


