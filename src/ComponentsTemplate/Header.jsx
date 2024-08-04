import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { TiShoppingCart } from "react-icons/ti";
import { LuUserCircle2 } from "react-icons/lu";
import { MdLightMode, MdDarkMode, MdClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { useFilterContext } from '../Context/FilterContext';
import { FaPlus, FaSearch } from "react-icons/fa";
import { TfiControlShuffle } from 'react-icons/tfi';
import { useCartContext } from '../Context/CartContext';

const SearchHistoryData = [

  "Sports Shoes",
  "Fashion Jeans",
  "Cotton Graphic T-Shirt",
  "Latest Smartphone Models",
  "High-Performance Laptops"
]

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [SearchResult, setSearchResult] = useState([])
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const navigate = useNavigate();
  const {
    updateFilterValue,
    inputFieldClear,


  } = useFilterContext();

  const { total_item } = useCartContext();



  useEffect(() => {

    if (searchQuery.length > 0) {
      const searchText = searchQuery.toLowerCase();

      const searchfilteredData = SearchHistoryData.filter(item =>
        item.toLowerCase().includes(searchText)
      );

      //DisplaySearchBox close if searchfilteredData data isempty...
      if (searchfilteredData.length === 0) {

        setDisplaySearchBox(false);

      }
      console.log("searchfilteredData", searchfilteredData);
      setSearchResult(searchfilteredData)

    } else {
      setSearchResult([])
      setDisplaySearchBox(false);
    }

  }, [searchQuery]);

  const searchQueryHandler = (event) => {

    if (searchQuery.length === 0) {
      //updateFilterValue text="" when searchQuery.length when 0
      updateFilterValue({ target: { name: "text", value: "" } });
    }

    //Open Search Result Box buy check searchquery length......
    if (SearchResult.length > 0) {
      setDisplaySearchBox(true);
    }

    if (event?.key === "Enter" || event === "searchButton") {
      setDisplaySearchBox(false);

      if (searchQuery.length > 0) {

        updateFilterValue({ target: { name: "text", value: searchQuery } });
        navigate(`/products`);

      } else {
        alert('Write something before searching.');
      }
    }

  };

  const chouseResultHandler = (data) => {
    setSearchQuery(data);
    setDisplaySearchBox(false);
    updateFilterValue({ target: { name: "text", value: data } });

    navigate(`/products`);

  }

  console.log("searchQuery=>", searchQuery)

  return (
    <nav className=' w-full sticky top-0 z-10  '>

      {/* <div className="flex flex-col w-full"> */}

      {/* First row */}
      <section className="flex flex-row items-center  justify-between text-black dark:text-white bg-[#8074ff]  dark:bg-[#252724]  h-14 px-1 sm:px-5">

        {/* This is LeftSide Content */}
        <div className="flex justify-center  w-[25%]  gap-2 mx-2 sm:mx-0">

          {/* Toggle button */}
          <div
            className="flex items-center sm:hidden   p-2 rounded-full hover:bg-[#b8b8b8] dark:hover:bg-[#303030]  transition-all duration-300 cursor-pointer">
            <GiHamburgerMenu className='text-xl' />
          </div>

          <Link to="/">
            <span className="text-[13px] sm:text-[16px] md:text-[1.3rem] lg:text-[1.5rem] font-bold text-[#ffffff]">Shoping Light</span>
          </Link>

        </div>

        {/* This is Middle Content   */}
        <div className="flex flex-row items-center w-[50%] mx-4">


          <div className="flex w-full justify-center relative">

            <FaSearch className="  absolute left-7 top-1/2 transform -translate-y-1/2 text-xl text-gray-400  " aria-hidden="true" />

            <input
              type="text"
              name="text"
              value={searchQuery}
              // onChange={updateFilterValue}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              autoComplete="off"
              placeholder="Search products..."
              className="pl-16 py-2 text-[18px] rounded-l-sm border-0 w-full outline-none font-semibold group focus-within:outline-none"
            />



            {/* This is input search history Tag / Container Box */}
            {(displaySearchBox) && (
              <div
                id="searchContainer"
                className="sideBar absolute top-full left-0 w-full bg-white dark:bg-[#272727] shadow-lg z-10 rounded-sm mt-1 overflow-y-auto max-h-[450px]">

                {/* This is input search history retrive Tag */}
                <ul id="myContainer" className="px-2 py-2 list-none">

                  {SearchResult?.map((items, index) =>
                    <li
                      key={index}
                      onClick={() => chouseResultHandler(items)}
                      className="px-5 py-2 text-[18px] font-semibold hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      <div className="flex flex-row items-center gap-4">
                        <FaSearch className="text-xl" aria-hidden="true" />
                        <p>{items}</p>
                      </div>
                    </li>
                  )}
                </ul>

              </div>
            )}

            {/* This is clear button */}
            <button
              onClick={() => {
                inputFieldClear();
                setSearchQuery("");
              }}
              className={`${!searchQuery.length > 0 && "pointer-events-none"} bg-white w-12`}>
              <MdClear className={`${searchQuery.length > 0 ? "opacity-1" : "opacity-0"} text-3xl hover:bg-gray-200 hover:rounded-full`} />
            </button>

            <button
              type="submit"
              onClick={() => searchQueryHandler("searchButton")}
              className="flex flex-row items-center justify-center transition-all duration-300 bg-orange-600 px-5 py-2 rounded-r-sm w-[4rem] text-white hover:bg-orange-500">
              <FaSearch className="text-xl" />
            </button>

          </div>

        </div>

        {/* This is RightSide Content   */}
        <div className="flex flex-row items-center justify-center w-[25%] gap-2 md:5 lg:gap-12  ">

          <div
            className="text-[18px] sm:text-xl  lg:text-3xl p-2 rounded-full hover:bg-[#b8b8b8] dark:hover:bg-[#303030] transition-all duration-300 cursor-pointer">

            <MdLightMode />

          </div>

          {total_item === 0 ?
            (
              < Link to="/products" className="relative text-[18px] sm:text-xl  lg:text-3xl p-2 rounded-full hover:bg-[#b8b8b8] dark:hover:bg-[#303030]  transition-all duration-300 cursor-pointer">
                <TiShoppingCart />

                <span className="grid place-content-center font-semibold rounded-full bg-red-600 text-white px-[3px] py-[7px] lg:px-[5px] lg:py-[10px] h-2 top-1 left-[20px] lg:left-[30px] absolute">
                  <FaPlus className='  text-[8px] lg:text-[10px] ' />
                </span>

              </Link>

            ) : (

              <Link to="/addcart" className="relative text-[18px] sm:text-xl  lg:text-3xl p-2 rounded-full hover:bg-[#b8b8b8] dark:hover:bg-[#303030]  transition-all duration-300 cursor-pointer">
                <TiShoppingCart />
                <span className="grid place-content-center  text-[9px] lg:text-[12px] font-semibold rounded-full bg-red-600 text-white px-[4px] py-[7px] lg:px-[6px] lg:py-[10px] h-2 top-1 left-[20px] lg:left-[30px] absolute">
                  {total_item}
                </span>

              </Link>

            )}




          {/* Singup button  when user not Register*/}
          <div className=" flex flex-row items-center  gap-3  bg-white text-black px-5  py-1 h-fit  w-fit   rounded-sm hover:bg-orange-600 text-[12px] sm:text-[16px] hover:text-white transition-all duration-300 cursor-pointer">
            <LuUserCircle2 className=' text-xl' />
            Singup


          </div>

          {/* Login button  when user Logout*/}
          {/* <div className="flex flex-row items-center gap-3 border-[2px] px-3 py-1 border-[#6254f3] rounded-sm hover:bg-[#6254f3] hover:text-white transition-all duration-300 cursor-pointer">
          <LuUserCircle2 className='text-2xl'/>
           Login
        </div> */}
          {/* Logout button  when user Login*/}
          {/* <div className="flex flex-row items-center gap-3 border-[2px] px-3 py-1 border-[#6254f3] rounded-sm hover:bg-[#6254f3] hover:text-white transition-all duration-300 cursor-pointer">
          <LuUserCircle2 className='text-2xl'/>
           Logout
        </div> */}

        </div>

      </section>

      {/* Secend row */}
      {/* <section className=' flex flex-row items-center  justify-center text-black dark:text-white bg-[#ffffff]  dark:bg-[#252724]  h-11 px-1 sm:px-5  '>
           <div className="sm:flex flex-row items-center gap-3  lg:gap-16 xl:gap-28 hidden">
            <Link to='/' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3]  border-b-[3px] ">Home</Link>
            <Link to='/about' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]">About</Link>
            <Link to='/products' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]">Product</Link>
            <Link to='/contact' className="text-[14px] md:text-[16px] lg:text-xl text-black dark:text-white hover:text-[#6254f3] dark:hover:text-[#6254f3] transition-all duration-300 cursor-pointer px-1 md:px-2 lg:px-3   border-[#ffffff] dark:border-[#252724]  hover:border-[#6254f3] border-b-[3px]"  >Contact</Link>
          </div>

        </section> */}

      {/* </div> */}

    </nav >
  )
}

export default Header