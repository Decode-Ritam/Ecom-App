import React  from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import CartAmountToggle from './CartAmountToggle';

import { useCartContext } from '../Context/CartContext';


function CardItems({ productImg, productName, productMRP, productPrice, productId, productSize, productColor, productQuantity, }) {

    const { removeItem,setDecrease,setIncrease } = useCartContext();



    


    return (

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-gray-100 dark:bg-black "    >

            <div className="flex flex-row items-center gap-4  md:gap-8 ">
                <div className=" border-white  h-[120px] sm:h-[140px]   rounded-lg ">
                    <img
                        className=' h-full w-full object-fill'
                        src={productImg} alt={productImg} />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-[16px] md:text-[18px] font-bold text-black dark:text-white">
                        {productName}
                    </h2>
                    <div className=" text-black dark:text-white font-bold text-sm">Product ID:
                        <span className=" font-normal "> {productId}</span>
                    </div>
                    <div className=" text-black dark:text-white font-bold text-sm">Size:
                        <span className=" font-normal "> {productSize}</span>
                    </div>
                    <div className=" text-black dark:text-white font-bold text-sm">Color:
                        <span className="font-normal"> {productColor}</span>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-3">
                        <p className="text-gray-400 dark:text-white  text-xl font-thin line-through"> ₹ {productMRP.toLocaleString()}</p>
                        <p className="text-black dark:text-white   text-[17px] font-semibold"> ₹ {productPrice.toLocaleString()}</p>

                        <p className="text-green-700 dark:text-white font-bold">
                            {(((productMRP - productPrice) / productMRP) * 100).toFixed(0)} % off
                        </p>

                    </div>

                </div>

            </div>

            <div className="flex flex-row-reverse md:flex-col items-center  justify-between w-full md:w-auto md:h-full gap-4">

                <button
                    onClick={() => removeItem(productId)}
                    title='Remove item!'
                    className="px-2 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-[#565656] cursor-pointer">

                    <RiDeleteBin5Line className='text-[18px]  text-[red] ' />

                </button>



                <CartAmountToggle
                    amount={productQuantity}
                    setDecrease={() => setDecrease(productId)}
                    setIncrease={() => setIncrease(productId)}
                />


                <div className="">
                    <span className="text-black dark:text-white  text-[16px] font-bold"> Total: ₹ </span>
                    <span className="text-black dark:text-white  text-[16px] font-bold opacity-[0.5]">
                        {(productPrice * productQuantity).toLocaleString()}
                    </span>
                </div>

            </div>

        </div>


    )
}

export default CardItems