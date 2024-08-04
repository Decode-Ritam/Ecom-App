import React from "react";
import { TfiMinus, TfiPlus } from 'react-icons/tfi'

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div className="cart-button">
            {/* //....................... */}
            <div className=" flex items-center justify-center gap-6 bg-white  dark:bg-slate-800">

                <button
                    onClick={() => setDecrease()}
                    className="bg-gray-200 px-2 py-1 rounded-sm hover:bg-gray-300 ">
                    <TfiMinus className='text-sm' />
                </button>

                <div className='w-4 text-black  dark:text-white' > {amount}</div>

                <button
                    onClick={() => setIncrease()}
                    className="bg-gray-200 px-2 py-1 rounded-sm hover:bg-gray-300  ">
                    <TfiPlus className='text-sm' />
                </button>

            </div>
        </div>
    );
};

export default CartAmountToggle;