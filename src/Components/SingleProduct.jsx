import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../ComponentsTemplate/Footer'
import PageNavigation from '../ComponentsTemplate/PageNavigation'

import { FaRegStar, FaRupeeSign, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";

import { productsDetails } from "../ComponentsTemplate/ProductJsonData"

import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton
} from 'react-share'

import {
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
  TwitterIcon
} from 'react-share'

import { MdOutlineAddShoppingCart, MdSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { MdMoneyOffCsred } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";

import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { useCartContext } from "../Context/CartContext"
import CartAmountToggle from '../ComponentsTemplate/CartAmountToggle'

function SingleProduct() {
  const { addToCart } = useCartContext();

  const [PresentProduct, setPresentProduct] = useState(null);
  const [isPresentStocks, setIsPresentStocks] = useState(null);
  const [productDisplayImg, setProductDisplayImg] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productColorId, setProductColorId] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWaistSize, setSelectedWaistSize] = useState(null);
  const [selectedFootSize, setSelectedFootSize] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState(null);


  const [magnifierLensePosition, setMagnifierLensePosition] = useState({ display: 'none', left: 0, top: 0 });

  const [magnifierImage, setMagnifierImage] = useState({ display: 'none', left: 0, top: 0 });

  const { id, colorid } = useParams();

  const fetchedFilterData = productsDetails.find(product => product.id === id);

  const handleMouseMove = (e) => {
    const Lense = document.getElementById("magnifierLense");
    const img = e.target.getBoundingClientRect();

    // Calculate left and top positions
    let left = e.pageX - img.left - Lense.offsetWidth / 2;
    let top = e.pageY - img.top - Lense.offsetWidth / 2;

    // Ensure left and top positions are within bounds
    left = Math.max(0, Math.min(left, 250));
    top = Math.max(0, Math.min(top, 300));

    setMagnifierLensePosition({
      display: 'block',
      left: left + 'px',
      top: top + 'px',
    });




    const ratioX = e.target.offsetWidth / Lense.offsetWidth;
    const ratioY = e.target.offsetHeight / Lense.offsetWidth;


    setMagnifierImage({
      display: 'block',
      transform: 'scale(1)',
      backgroundImage: `url('${e.target.src}')`,
      backgroundPosition: `-${left * (ratioX)}px -${top * ratioY}px`,
      backgroundSize: `${e.target.width * ratioX}px ${e.target.height * ratioY}px`,
      backgroundRepeat: 'no-repeat',
    });



  };


  const handleMouseLeave = () => {
    setMagnifierLensePosition({ display: 'none', left: 0, top: 0 });
    setMagnifierImage({ opacity: '0', left: 0, top: 0 });
  };




  useEffect(() => {

    // Assuming fetchedFilterData and productColorId are defined elsewhere in your component
    const product = fetchedFilterData?.products?.find(product => product.color === productColorId);
   console.log("product=>",product)
    if (selectedSize) {

      if (product?.availableStockOnSize && product.availableStockOnSize[selectedSize]) {
        const updateStock = product.availableStockOnSize[selectedSize].stock;
        setIsPresentStocks(updateStock)
      } else {
        console.log(`Product   with color ${productColorId} or size ${selectedSize} not found or stock not available.`);
      }

    } else if (selectedFootSize) {

      if (product?.availableStockOnfootSize && product.availableStockOnfootSize[selectedFootSize]) {
        const updateStock = product.availableStockOnfootSize[selectedFootSize].stock;
        setIsPresentStocks(updateStock)
      } else {
        console.log(`Product   with color ${productColorId} or size ${selectedFootSize} not found or stock not available.`);
      }

    } else if (selectedWaistSize) {

      if (product?.availableStockOnwaistSize && product.availableStockOnwaistSize[selectedWaistSize]) {
        const updateStock = product.availableStockOnwaistSize[selectedWaistSize].stock;
        setIsPresentStocks(updateStock)
      } else {
        console.log(`Product   with color ${productColorId} or size ${selectedWaistSize} not found or stock not available.`);
      }

    } else if (selectedCapacity) {

      if (product?.availableStockOnCapacity && product.availableStockOnCapacity[selectedCapacity.typec]) {
        const updateStock = product.availableStockOnCapacity[selectedCapacity.type].stock;
        setIsPresentStocks(updateStock)
        console.log("Cheking data value=>",updateStock)

      } else {
        console.log(`Product   with color ${productColorId} or size ${selectedCapacity} not found or stock not available.`);
      }

    }



  }, [selectedSize, selectedFootSize, selectedWaistSize, selectedCapacity, productColorId, fetchedFilterData]);


  // Update product color ID when it changes
  useEffect(() => {
    setProductColorId(colorid);
  }, [colorid]);

  // Update present product and display image when fetchedFilterData or productColorId changes
  useEffect(() => {

    if (fetchedFilterData && productColorId) {
      const filterProductColorId = fetchedFilterData.products.find(product => product.color === productColorId);

      if (filterProductColorId) {
        setPresentProduct(filterProductColorId);
        setProductDisplayImg(filterProductColorId.variations[0]);
      } else {
        // Handle case where no product with the specified color is found
        console.log("No product found with the specified color.");
      }
    }

    // update state initial value of size / Capacity/ footSize / waistSize.............

    if (Array.isArray(fetchedFilterData?.size) && fetchedFilterData.size?.length > 0) {

      setSelectedSize(fetchedFilterData.size[0]);

    } else if (Array.isArray(fetchedFilterData?.footSize) && fetchedFilterData.footSize?.length > 0) {

      setSelectedFootSize(fetchedFilterData?.footSize[0]);

    } else if (Array.isArray(fetchedFilterData?.waistSize) && fetchedFilterData.waistSize?.length > 0) {

      setSelectedWaistSize(fetchedFilterData?.waistSize[0]);

    } else if (Array.isArray(fetchedFilterData?.Capacity) && fetchedFilterData.Capacity?.length > 0) {

      setSelectedCapacity(fetchedFilterData?.Capacity[0]);

    } else {
      // Handle the case where both `size` and `Capacity` are not defined or empty
      setSelectedSize(null);
      setSelectedFootSize(null);
      setSelectedWaistSize(null);
      setSelectedCapacity(null);
    }


  }, [fetchedFilterData, productColorId]);

  // Function Unit of product Quontity RiIncreaseDecrease function
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < isPresentStocks ? setAmount(amount + 1) : setAmount(isPresentStocks);
  };



  // Toggle Dropdown Menu (Share Button)......
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const currentUrl = window.location.href;
  // copy clipboard product url function (Share Button)......
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => alert('Link copied to clipboard'))
      .catch((error) => console.error('Error copying link: ', error));
  };


  // Product Image Display Function
  const imageDisplayHandler = (imageDisplayHandler) => {
    setProductDisplayImg(PresentProduct?.variations.find(image => image.id === imageDisplayHandler))
  }


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
    <>
      <div className="flex flex-col bg-white dark:bg-black my-8">

        <div className="flex flex-row items-start  w-[95vw] m-auto mx-12">

          {/* This is Left Side */}
          <div className="sticky top-[70px] flex flex-row items-start w-[50%]  gap-5 ">

            <div className="flex flex-col items-center justify-between gap-2 ">
              {PresentProduct?.variations?.map(productImage => (
                <div key={productImage.id} className=" flex items-center justify-evenly w-[100px] h-[130px] bg-gray-100 rounded-md  ">
                  <img
                    onMouseEnter={() => imageDisplayHandler(productImage.id)}
                    src={productImage.url} alt={productImage.id} className={`${productDisplayImg?.id === productImage.id ? "border-blue-600  " : "hover:border-gray-600"} border-[2px]  h-full w-full cursor-pointer transition-all object-contain bg-white  `} />

                </div>
              ))}
            </div>

            <div className="relative">

              {/*..... Main Display Large Img....... */}
              <div className="relative flex items-center justify-center w-[550px] h-[600px] bg-gray-100 rounded-md">

                <img
                  id="ProductImage"
                  className="border-[1px] border-black h-full w-full object-contain bg-white   cursor-move delay-200"
                  src={productDisplayImg?.url}
                  alt={productDisplayImg?.id}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                />
                {/* This is magnifi Lense */}
                <div
                  className='absolute     bg-[#aea44d55] w-[300px] h-[300px] cursor-none hidden pointer-events-none z-10   '
                  id="magnifierLense"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={magnifierLensePosition}
                ></div>

              </div>

              <div className="absolute flex flex-row items-center gap-5  top-5 right-5">
                {PresentProduct?.WhishlistAdd ?
                  (<button title='WishList Added' className='text-xl bg-white font-semibold border-[2px] border-gray-100 hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
                    <FaHeart className='text-red-600' />
                  </button>)
                  :
                  (<button title='Add WishList' className='text-xl bg-white font-semibold border-[2px] border-gray-100 hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
                    <FaHeart className='text-gray-300' />
                  </button>)
                }
                <div className="relative">
                  <button onClick={toggleDropdown}
                    title='Share'
                    className='text-xl bg-white font-semibold border-[2px] border-gray-100 hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
                    <IoIosShareAlt className='text-black' />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute w-[12rem]  top-full right-0 mt-3 bg-white border border-gray-200 rounded-md shadow-lg">
                      {/* Dropdown menu items */}
                      <div className="p-1 w-full  ">
                        {/* Dropdown item Whatsapp */}
                        <button
                          onClick={() => { toggleDropdown(); }}
                          className="block w-full px-4 py-2  text-left font-semibold text-sm text-gray-700 hover:bg-gray-100">

                          <WhatsappShareButton
                            url={currentUrl}
                            title={`Shop with Shoping Light ${fetchedFilterData.title}`}
                            className="flex flex-row items-center gap-4 justify-start  ">
                            <WhatsappIcon size={22} round={true} /> Share Whatsapp
                          </WhatsappShareButton>

                        </button>
                        {/* Dropdown item TelegramShareButton */}
                        <button
                          onClick={() => { toggleDropdown(); }}
                          className="block w-full px-4 py-2  text-left font-semibold text-sm text-gray-700 hover:bg-gray-100">

                          <TelegramShareButton
                            url={currentUrl}
                            title={`Shop with Shoping Light ${fetchedFilterData.title}`}
                            className="flex flex-row items-center gap-4 justify-start  ">
                            <TelegramIcon size={22} round={true} /> Share Telegram
                          </TelegramShareButton>

                        </button>
                        {/* Dropdown item EmailShareButton */}
                        <button
                          onClick={() => { toggleDropdown(); }}
                          className="block w-full px-4 py-2  text-left font-semibold text-sm text-gray-700 hover:bg-gray-100">

                          <EmailShareButton
                            url={currentUrl}
                            subject={`Shop with Shoping Light ${fetchedFilterData.title}`}

                            className="flex flex-row items-center gap-4 justify-start  ">
                            <EmailIcon size={22} round={true} /> Share Email
                          </EmailShareButton>

                        </button>

                        {/* Dropdown item TwitterShareButton */}
                        <button
                          onClick={() => { toggleDropdown() }}
                          className="block w-full px-4 py-2  text-left font-semibold text-sm text-gray-700 hover:bg-gray-100">

                          <TwitterShareButton
                            url={currentUrl}
                            title={`Shop with Shoping Light ${fetchedFilterData.title}`}

                            className="flex flex-row items-center gap-4 justify-start  ">
                            <TwitterIcon size={22} round={true} /> Share Twitter
                          </TwitterShareButton>

                        </button>
                        {/* Dropdown item Share url Link */}
                        <button
                          onClick={() => {
                            toggleDropdown();
                            copyToClipboard();
                          }}
                          className="block w-full px-4 py-2  text-left font-semibold text-sm text-gray-700 hover:bg-gray-100">

                          <div className="flex flex-row items-center gap-4 justify-start  ">
                            <ImLink /> Copy This Link
                          </div>

                        </button>

                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

          {/* This is right Side  */}
          <div className="relative   h-full w-[50%]  ">

            {/* This is magnifi Image */}
            <div className='absolute border-[1px] border-black rounded-md bg-[#ffffff] w-full h-[600px]  z-[1]  object-contain  hidden  '
              id="magnifierImage"
              style={magnifierImage}
            >
            </div>

            <PageNavigation LinkPage={"Products"} currentPage={"productdetails"} Search={fetchedFilterData.category} />

            {/* Product Details */}
            <div className=" flex  flex-col items-start justify-start  gap-3  rounded-md px-6  py-6">

              <header className='text-2xl text-balck  '> {fetchedFilterData.title}
                {fetchedFilterData.category === "Laptop" || fetchedFilterData.category === "Mobiles" ? `${selectedCapacity?.type}` : ``}
              </header>

              <div className="flex flex-row items-center justify-center gap-2  text-xl  text-orange-300  ">
                {ratingStar(fetchedFilterData.rating?.rate)}

                <div className='flex flex-row items-center justify-center gap-2 mx-3  '>
                  <IoPeopleOutline className='text-[12px]  text-black ' />
                  <span className=" text-[13px]  text-black  opacity-[0.5] font-semibold dark:text-white ">{fetchedFilterData.rating.count.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-center flex-row gap-2 ">
                {/* Capacity is undefined, null, not an array, or empty */}
                {!Array.isArray(fetchedFilterData?.Capacity) || fetchedFilterData.Capacity.length === 0 ?

                  (
                    <>
                      <span className="text-[14px] md:text-[18px]    text-black dark:text-white font-bold   ">&#8377; {fetchedFilterData?.priceINR?.toLocaleString()} </span>
                      <span className="text-[10px] md:text-[16px] text-black  opacity-[0.4] dark:text-white font-bold  line-through mx-2">&#8377;{fetchedFilterData?.MRPINR?.toLocaleString()} </span>
                      <span className="text-[9px] md:text-[12px] text-[#ff0e0e] px-[12px] py-[2px] rounded-2xl bg-[#ff9b9b5c]">
                        {(((fetchedFilterData?.MRPINR - fetchedFilterData?.priceINR) / fetchedFilterData?.MRPINR) * 100).toFixed(0)}% off
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-[14px] md:text-[18px]    text-black dark:text-white font-bold   ">&#8377; {selectedCapacity?.priceINR?.toLocaleString()} </span>
                      <span className="text-[10px] md:text-[16px] text-black  opacity-[0.4] dark:text-white font-bold  line-through mx-2">&#8377;{selectedCapacity?.MRPINR?.toLocaleString()} </span>
                      <span className="text-[9px] md:text-[12px] text-[#ff0e0e] px-[12px] py-[2px] rounded-2xl bg-[#ff9b9b5c]">
                        {(((selectedCapacity?.MRPINR - selectedCapacity?.priceINR) / selectedCapacity?.MRPINR) * 100).toFixed(0)}% off
                      </span>
                    </>
                  )}
              </div>

              <p className="text-[16px] text-black  mb-7 ">
                {fetchedFilterData.productsDetails}
              </p>



              <hr className='border-[1px] w-full   text-gray-300 mt-7' />

              {/* Our offer Section */}
              <div className='flex flex-row items-start justify-evenly gap-3  '  >

                {fetchedFilterData.RAEP && <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white  ">
                  <div className="flex  items-center justify-evenly">
                    <TbTruckReturn className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    10 days Return & Exchange
                  </h3>
                </div>}

                {fetchedFilterData.CODP && <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white ">
                  <div className="flex  items-center justify-evenly">
                    <GiPayMoney className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    Cash on Delivery
                  </h3>
                </div>}

                {fetchedFilterData.FODP && <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white  ">
                  <div className="flex  items-center justify-evenly">
                    <MdMoneyOffCsred className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    Free Delivery
                  </h3>
                </div>}

                <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white  ">
                  <div className="flex  items-center justify-evenly">
                    <MdVerifiedUser className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    Top Brand
                  </h3>
                </div>

                <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white  ">
                  <div className="flex  items-center justify-evenly">
                    <TbTruckDelivery className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    Amazon Delivered
                  </h3>
                </div>

                <div className="flex flex-col gap-3 w-[100px] text-black dark:text-white  ">
                  <div className="flex  items-center justify-evenly">
                    <MdSecurity className='text-2xl text-orange-400' />
                  </div>
                  <h3 className="text-[12px] text-center ">
                    Secure transaction
                  </h3>
                </div>
              </div>

              <hr className='border-[1px] w-full   text-gray-300 mb-7' />


              {/* Our select color Section */}
              <div className="flex flex-col items-start gap-4 mb-7">
                <div className="flex flex-row items-center justify-center gap-1">
                  <span className='font-semibold'>Select Color : </span>
                  <span className='font-semibold opacity-[0.5]'> {productColorId} </span>
                </div>
                <div className="flex flex-row flex-wrap items-start  gap-3   ">
                  {fetchedFilterData.colorsItems.map(items => (
                    <div
                      key={items.name}
                      className={`${productColorId === items.name ? "border-blue-600" : "hover:border-gray-600"} h-[5rem] w-[4rem] border-[2px] p-1 cursor-pointer transition-all object-contain bg-white `}

                      onClick={() => {
                        setProductColorId(items.name);
                        setAmount(1);

                      }}
                    >
                      <img
                        className={` h-full w-full object-contain bg-white `}
                        src={items.url}
                        alt={items.name}
                        title={items.name}

                      />
                    </div>
                  ))}
                </div>
                <hr className='border-[1px] w-full   text-gray-300' />
              </div>

              {/*Product Size Section */}
              <div className="flex flex-col items-start gap-4 mb-7">
                {
                  selectedSize ?
                    (<div className='flex flex-row items-center justify-center'>
                      < span className="text-black font-semibold">Select Size&nbsp;:&nbsp;</span>
                      <span className="">  {selectedSize} </span>
                    </div>
                    ) : selectedWaistSize ? (
                      <div className='flex flex-row items-center justify-center'>
                        < span className="text-black font-semibold">Select WaistSize&nbsp;:&nbsp;</span>
                        <span className=""> {selectedWaistSize} </span>
                      </div>

                    ) : selectedFootSize ? (
                      <div className='flex flex-row items-center justify-center'>
                        < span className="text-black font-semibold">Select FootSize&nbsp;:&nbsp;</span>
                        <span className=""> {selectedFootSize} </span>
                      </div>

                    ) : (
                      <div className='flex flex-row items-center justify-center'>
                        < span className="text-black font-semibold">Select Capacity&nbsp;:&nbsp;</span>
                        <span className=""> {selectedCapacity?.type} </span>
                      </div>

                    )
                }
                {/* Capacity is undefined, null, not an array, or empty */}

                {
                  Array.isArray(fetchedFilterData?.size) ?
                    (<div className="flex flex-row flex-wrap items-start  gap-2 ">
                      {fetchedFilterData?.size?.map((items, index) => (
                        <div key={index} className="cursor-pointer">
                          <div
                            onClick={() => {
                              setSelectedSize(items);
                              setAmount(1);
                            }}
                            className={`${selectedSize === items ? "bg-black text-white" : "bg-slate-200 text-black"} flex items-center justify-center  text-[12px]  w-auto  px-3 py-[2px] rounded-2xl border-[2px] border-transparent hover:border-[#b7b7b7] font-semibold`}> {items}</div>
                        </div>
                      ))}
                    </div>
                    ) : Array.isArray(fetchedFilterData?.footSize) ?
                      (
                        <div className="flex flex-row flex-wrap items-start  gap-2    ">
                          {fetchedFilterData?.footSize?.map((items, index) => (
                            <div key={index} className="cursor-pointer">
                              <div
                                onClick={() => {
                                  setSelectedFootSize(items);
                                  setAmount(1);
                                }}
                                className={`${selectedFootSize === items ? "bg-black text-white" : "bg-slate-200 text-black"} flex items-center justify-center  text-[12px]  w-auto  px-3 py-1 rounded-2xl border-[2px] border-transparent hover:border-[#b7b7b7] font-semibold`}> {items}</div>
                            </div>
                          ))}
                        </div>

                      ) : Array.isArray(fetchedFilterData?.waistSize) ?
                        (
                          <div className="flex flex-row flex-wrap items-start  gap-2    ">
                            {fetchedFilterData?.waistSize?.map((items, index) => (
                              <div key={index} className="cursor-pointer">
                                <div
                                  onClick={() => {
                                    setSelectedWaistSize(items);
                                    setAmount(1);
                                  }}
                                  className={`${selectedWaistSize === items ? "bg-black text-white" : "bg-slate-200 text-black"} flex items-center justify-center  text-[12px]  w-auto  px-3 py-1 rounded-2xl border-[2px] border-transparent hover:border-[#b7b7b7] font-semibold`}> {items}</div>
                              </div>
                            ))}
                          </div>

                        ) : (
                          <div className="flex flex-row flex-wrap items-start  gap-2    ">
                            {fetchedFilterData?.Capacity?.map((items, index) => (
                              <div key={index} className="cursor-pointer">
                                <div
                                  onClick={() => {
                                    setSelectedCapacity(items);
                                    setAmount(1);
                                  }}
                                  className={`${selectedCapacity?.type === items?.type ? "bg-black text-white" : "bg-slate-200 text-black"} flex items-center justify-center  text-[12px]  w-auto  px-3 py-1 rounded-2xl border-[2px] border-transparent hover:border-[#b7b7b7] font-semibold`}> {items.type}</div>
                              </div>
                            ))}
                          </div>

                        )
                }
              </div>


              <hr className='border-[1px] w-full   text-gray-300' />
              {/* Order info */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-1">
                  <span className="font-semibold text-[16px] text-black">
                    Available :
                  </span>
                  {
                    isPresentStocks === amount ?
                      (
                        <span className="font-semibold text-[16px] text-red-700">
                          Out of Stock
                        </span>
                      ) : isPresentStocks / 2 <= amount ?
                        (<span className="font-semibold text-[16px] text-amber-700">
                          Limited Stock
                        </span>
                        ) : (
                          <span className="font-semibold text-[16px] text-green-700">
                            InStock
                          </span>)
                  }
                </div>

                <span className="">FREE delivery Thursday, 28 March.</span>

                <div className="flex flex-row items-center gap-2 ">
                  <FaLocationDot />
                  <div className="text-[#5275ff]"> Deliver to Ritam - Naihati 743166‌  </div>
                </div>

              </div>

              <hr className='border-[1px] w-full   text-gray-300' />

              {/*curd Details Section */}
              <div className="flex flex-row items-center justify-center gap-6  w-[-webkit-fill-available]">


                {/* Unit increment and decrement code */}
                <CartAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />


                <div className="">
                  <button
                    onClick={() => addToCart(id, productColorId, PresentProduct, isPresentStocks, selectedSize, amount, fetchedFilterData)}
                    className="flex flex-row items-center justify-center gap-3 bg-black text-white px-12 py-2 text-[14px] rounded-full">
                    <MdOutlineAddShoppingCart className='text-xl' />
                    Add to Cart
                  </button>
                </div>
                <div className="">
                  <button className="flex flex-row items-center justify-center gap-3 bg-black text-white px-12 py-2  text-[14px] rounded-full">
                    <HiOutlineCurrencyRupee className="text-xl" />
                    Buy now
                  </button>
                </div>

              </div>

            </div>


          </div>

        </div>

      </div >
      <Footer />
    </>
  )
}

export default SingleProduct