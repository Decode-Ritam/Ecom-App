import React from 'react'
import CardItems from '../ComponentsTemplate/CardItems'
import { BsTag } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCartXFill, BsCartPlusFill } from "react-icons/bs";
import PageNavigation from '../ComponentsTemplate/PageNavigation';
import Footer from '../ComponentsTemplate/Footer';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';


function AddCart() {
  const { cart, clearCurtData } = useCartContext();

  const { total_amount, total_MRP_amount, shipping_fee, } = useCartContext();


  return (
    <>
      {
        cart.length === 0 ? (

          <div className="flex items-center justify-center w-full my-8 text-5xl font-semibold">

            :) This cart is empty!

          </div>

        ) : (

          <>
            <div className="flex flex-col bg-white dark:bg-black ">
              <PageNavigation title={"Cart"} />
              <h1 className='text-3xl font-bold text-left mt-1 px-8 text-white dark:text-white'>Your Cart</h1>

              <div className="flex flex-col lg:flex-row  gap-8 my-5  w-full ">
                {/* CART LEFT SIDE SECTION */}
                <div className="flex flex-col  gap-4 mx-2 md:mx-8 lg:mx-0  lg:ml-2 lg:w-[60vw] xl:ml-12">

                  {cart.map((curElem, index) => {

                    return <CardItems key={index} {...curElem} />

                  })}

                </div>

                {/* CART RIGHT SIDE SECTION */}
                <div className="mx-4 sm:mx-12   md:mx-12 lg:mx-0  lg:mr-2  xl:mr-12 lg:w-[40vw]">

                  <div className="border-[2px] border-gray-200 dark:border-[#3d3d3d] w-full  rounded-lg">
                    <div className="flex flex-col items-center justify-center p-4 sm:p-12 gap-4">
                      <h1 className='text-2xl font-bold  text-black dark:text-white' >Order Summarry</h1>

                      <div className='flex flex-row items-center justify-between w-full'>
                        <span className="text-black dark:text-white text-xl opacity-[0.5]">Subtotal</span>
                        <span className="text-black dark:text-white text-xl font-bold">₹ {total_amount.toLocaleString()}</span>
                      </div>
                      <div className='flex flex-row items-center justify-between w-full'>
                        <span className="text-black dark:text-white text-xl opacity-[0.5]">
                          Discount ({(((total_MRP_amount - total_amount) / total_MRP_amount) * 100).toFixed(0)}%)
                        </span>
                        <span className="text-[red] text-xl font-bold">- ₹  {(total_MRP_amount - total_amount).toLocaleString()}</span>
                      </div>
                      <div className='flex flex-row items-center justify-between w-full'>
                        <span className="text-black dark:text-white text-xl opacity-[0.5]">  Delivery Fee</span>
                        <span className="text-black dark:text-white text-xl font-bold">₹ {shipping_fee.toLocaleString()}</span>
                      </div>
                      <hr className='border-[1.5px] bg-gray-300 m-auto  w-full my-2' />
                      <div className='flex flex-row items-center justify-between w-full'>
                        <span className="text-black dark:text-white text-2xl "> Total</span>
                        <span className="text-black dark:text-white text-2xl font-bold">₹ {(shipping_fee + total_amount).toLocaleString()}</span>
                      </div>

                      <div className="flex flex-row gap-2 w-full">
                        <div className=" flex items-center px-3   rounded-3xl w-[70%] h-[40px] bg-gray-300 ">
                          <BsTag className='text-2xl mx-2' />
                          <input className="bg-transparent outline-none text-[15px]  text-black  mx-2   w-full " type="text"
                            placeholder="Add Prmo Code"
                            autoComplete="off" />

                        </div>
                        <button className="flex items-center justify-center rounded-3xl w-[30%] h-[40px]   px-6 py-2 bg-black dark:bg-[#353535] text-white hover:opacity-[0.8]">
                          Apply
                        </button>
                      </div>

                      <Link to="/checkout" className="inputbox flex items-center justify-center rounded-3xl w-full sm:w-[50%] lg:w-[80%] h-[40px] bg-black dark:bg-[#353535] text-white hover:opacity-[0.8] transition-all ">
                        Go to Checkout
                        <FaArrowRightLong className='text-xl mx-2' />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-center gap-8 my-8 w-[100%]">
                    <button
                      onClick={clearCurtData}
                      className="inputbox flex items-center justify-center rounded-sm sm:w-[40%]  h-[40px] bg-[#f35252] text-[16px] px-2 lg:text-[16px]  text-white hover:opacity-[0.8] transition-all  ">
                      <BsCartXFill className='text-[12px] md:text-xl mx-2' />
                      Clear cart
                    </button>
                    <Link to="/products" className=" inputbox flex items-center justify-center rounded-sm sm:w-[50%]  h-[40px] bg-[#6252f3] px-2 text-[16px] lg:text-[16px]   text-white hover:opacity-[0.8] transition-all  ">
                      <BsCartPlusFill className='text-[12px] md:text-xl mx-2' />
                      Continue Shopping
                    </Link>
                  </div>

                </div>

              </div>

            </div>
            <Footer />
          </>

        )

      }

    </>
  )
}

export default AddCart