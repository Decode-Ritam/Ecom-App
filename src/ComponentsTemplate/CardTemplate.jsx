import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function CardTemplate(Products) {

    // claculate to render star icon................
    const ratingStar = (stars) => {
        return Array.from({ length: 5 }, (elem, index) => {
            let number = index + 0.5;
            return (
                <span key={index}>
                    {stars >= index + 1 ? (
                        <FaStar className="icon" />
                    ) : stars >= number ? (
                        <FaStarHalfAlt className="icon" />
                    ) : (
                        <FaRegStar className="icon" />
                    )}
                </span>
            );
        });
    }

    return (
        <Link to={`/productdetails/${Products.id}/${Products.image.colorid}`} className='flex items-center  flex-col gap-1'>
            <div className=" border-white border-x-[25px] h-[160px] w-[160px] lg:border-x-[25px]  
                lg:h-[250px] lg:w-[250px] rounded-md ">
                <img
                    className=' h-full w-full object-contain bg-white'
                    src={Products.image.url} alt={Products.company} />
            </div>
            <h2 className='text-[15px] md:text-[17px] lg:text-xl font-bold text-center'>{Products.company}</h2>
            <div className=' text-[10px] md:text-[12px] text-black dark:text-white  text-center' >
                {Products.title}
            </div>
            <div className="text-sm  flex flex-row items-center justify-center  gap-1 text-orange-300 ">
                {ratingStar(Products.rating.rate)}
                <span className='text-[12px] md:text-sm text-black  opacity-[0.4] dark:text-white mx-3'>{Products.rating.rate} / 5 </span>
            </div>
            <div className="flex items-center justify-center flex-row gap-2 ">
                <span className="text-[14px] md:text-[18px]    text-black dark:text-white font-bold   ">&#8377;{Products.priceINR.toLocaleString()} </span>
                <span className="text-[10px] md:text-[16px] text-black  opacity-[0.4] dark:text-white font-bold  line-through mx-2">&#8377; {Products.MRPINR.toLocaleString()} </span>
                <span className="text-[9px] md:text-[12px] text-[#ff0e0e] px-[12px] py-[2px] rounded-2xl bg-[#ff9b9b5c]">
                    {(((Products.MRPINR - Products.priceINR) / Products.MRPINR) * 100).toFixed(0)}% off
                </span>
            </div>

        </Link>

    )
}

export default CardTemplate