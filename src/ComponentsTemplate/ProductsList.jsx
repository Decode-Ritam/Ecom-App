import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { IoGridSharp } from "react-icons/io5";
import { FaFilter, FaHeart, FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt, FaThList } from "react-icons/fa";
import PageNavigation from '../ComponentsTemplate/PageNavigation'

import { useProductContext } from '../Context/ProductContext';
import { useFilterContext } from "../Context/FilterContext";
import Pagination from '../Components/Pagination';
import { IoIosArrowUp } from 'react-icons/io';

function ProductsList() {

    const {
        isLoading,
        isSidebarClose,
        products,
        updateSidebar
    } = useProductContext()

    // Inside a component
    const {
        grid_view,
        setGridView,
        setListView,
        filter_products,
        displayData,
        displayProgress,
        sorting,
        sorting_value,
        filters: { text },
    } = useFilterContext();


    //Back to top button........
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const [filterProductLength, setFilterTotalProductLength] = useState(null);


    useEffect(() => {
        setFilterTotalProductLength(filter_products.length);
    }, [filter_products]);

    const ToggleSidebarHandler = () => {
        // Dispatch an action to toggle isSidebarClose in the context
        updateSidebar(!isSidebarClose);
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
            <div className='bg-white my-[12px] ml-[8px] mr-6 rounded-md p-2'>
                <PageNavigation currentPage={"Products"} />

                <header className='text-center mt-2 text-xl font font-bold '>Products List</header>

                {text && <p className='text-black  font-semibold text-center '> Search Result "{text}" </p>}

                <div className="flex flex-row items-center justify-center gap-3 text-[10px] font-thin space-x-1 tracking-wider md:text-[16px]">
                    <span className='text-gray-500 font-semibold '> Showing </span>
                    <span className=' '> {displayProgress} Product   </span>
                    <span className=''>Out of  </span>
                    <span className=''>{filterProductLength} Product</span>

                </div>

                <div className="flex flex-row items-center justify-between w-full my-1 lg:my-2">

                    <div className="flex flex-row gap-4  mx-2 lg:mx-12">
                        <span onClick={() => ToggleSidebarHandler()} title='Search Filter' className="xl:hidden block px-[5px] py-[4px] lg:px-[10px] lg:py-2 bg-gray-200 hover:bg-black hover:text-white rounded-sm cursor-pointer  transition-all" ><FaFilter className='text-sm  lg:text-[16px]' />
                        </span>
                        <span onClick={setGridView} title='Grid View' className={`${grid_view ? "bg-orange-600 text-white" : "bg-gray-200"} px-[5px] py-[4px] lg:px-[10px] lg:py-2  hover:bg-black hover:text-white rounded-sm cursor-pointer transition-all`} ><IoGridSharp className='text-sm  lg:text-[16px]' />
                        </span>
                        <span onClick={setListView} title='List View' className={`${!grid_view ? "bg-orange-600 text-white" : "bg-gray-200"} px-[5px] py-[4px] lg:px-[10px] lg:py-2 bg-gray-200 hover:bg-black hover:text-white rounded-sm cursor-pointer transition-all`}
                        ><FaThList className='text-sm lg:text-[16px]' />
                        </span>
                    </div>

                    <div className=" mx-2 lg:mx-12">
                        <select
                            className="w-full  rounded border-[1px] p-1   bg-[#FFF] font-semibold text-black  text-[10px] md:text-[16px] cursor-pointer"
                            name="formChouse"
                            id="formChouse"
                            onChange={sorting}

                        >
                            <option value="All Product"  >All Product</option>
                            <option value="Price Low to High">Price Low to High</option>
                            <option value="Price High to Low">Price High to Low</option>
                            <option value="Items (A - Z)">Items (A - Z)</option>
                            <option value="Items (Z - A)">Items (Z - A)</option>
                            <option value="Whishlist Add">Whishlist Add</option>
                            <option value="Clear Filter">Clear Filter</option>
                        </select>
                    </div>

                </div>

                {showButton &&
                    <div className="fixed top-[110px] right-[40%]   z-[10]">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-4 text-center border-[1px] border-[#dddada]  bg-white  text-blue-600 font-semibold  px-4 py-2 rounded-[4px] shadow-xl hover:bg-blue-600 hover:text-white transition-colors duration-300 "
                        >
                            <IoIosArrowUp className='text-xl group-hover:translate-y-[-5px] transition-all duration-600' />
                            Back to Top
                        </button>
                    </div>
                }

                <div className={` ${grid_view ? "flex flex-row flex-wrap items-center justify-center" : "flex flex-col    items-center justify-center"} gap-4 my-2 bg-gray-50  `}>
                    {/* Product Card design */}

                    {isLoading ? (

                        <header className='flex items-center justify-center font-semibold text-2xl h-[50vh]   '>
                            Loading...
                        </header>

                    ) : filter_products.length === 0 ? (

                        <header className='flex items-center justify-center font-semibold text-2xl h-[50vh]'>
                            Sorry No Product Found...
                        </header>

                    ) : (

                        displayData?.map((items, index) => (

                            <Link key={index} to={`/productdetails/${items.id}/${items.image.colorid}`} className={`my-2  hover:shadow-[0px_20px_20px_6px_#00000017] rounded-md  duration-500 ${!grid_view ? "w-full" : ""}   `}>

                                <div className={`flex items-center  bg-white p-4  max-w-[300px] max-h-[500px]  overflow-hidden group ${grid_view ? "flex-col" : "  flex-row justify-center "}`}>

                                    <div className="relative">
                                        <div className="  h-[160px] w-[160px]  lg:h-[300px] lg:w-[270px] rounded-lg  ">
                                            <img
                                                className=' h-full w-full object-contain '
                                                src={items.image.url} alt={items.image.id} />
                                        </div>

                                        <div className="absolute  top-1 right-1 z-[2]">
                                            {items?.WhishlistAdd ?
                                                (<button title='WishList Added' className='text-xl bg-white font-semibold border-[2px] border-gray-100 hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
                                                    <FaHeart className='text-red-600' />
                                                </button>)
                                                :
                                                (<button title='Add WishList' className='text-xl bg-white font-semibold border-[2px] border-gray-100 hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
                                                    <FaRegHeart className='text-black' />
                                                </button>)
                                            }


                                        </div>
                                    </div>

                                    <div className={`flex flex-col items-center justify-start gap-2   bg-white  w-full group-hover:translate-y-[-88px] transition-transform duration-300  ease-in-out py-2 ${grid_view ? "" : "w-[60%]"}`}>
                                        <h2 className='text-[15px] md:text-[17px] lg:text-xl font-bold text-center'>{items.company}</h2>
                                        <div className="flex flex-row overflow-hidden gap-2 ">

                                            {items.colors.map(color => (
                                                <span
                                                    key={color.HEXCODE}
                                                    className={`text-[8px] px-[9px] py-[9px] rounded-full border-[2px]  border-[#757070] hover:border-[#757070] opacity-[0.8] hover:opacity-[1]`}
                                                    style={{ backgroundColor: color.HEXCODE }}
                                                    title={color.name}
                                                ></span>
                                            ))}

                                        </div>
                                        <header className=' text-[10px] md:text-[12px] font-semibold text-black dark:text-white  text-center' >{items.title}</header>
                                        <div className="text-sm  flex flex-row items-center justify-center  gap-1 text-orange-400 ">

                                            {ratingStar(items.rating.rate)}
                                            {items.rating.rate}
                                            <span className='text-[12px] md:text-sm text-black  opacity-[0.5] font-semibold dark:text-white mx-3'>
                                                {items.rating.count.toLocaleString()}
                                            </span>
                                        </div>

                                        {!grid_view &&
                                            <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[10px] md:text-[16px] font-semibold">
                                                Material composition60% Cotton, 40% Polyester
                                                PatternSolid
                                                Fit typeRegular Fit
                                                Sleeve typeHalf Sleeve
                                                Collar styleBand Collar
                                                LengthStandard Length
                                                Country of OriginIndia
                                            </p>}

                                        <div className="flex items-center justify-center flex-row gap-2 ">
                                            <span className="text-[14px] md:text-[18px]    text-black dark:text-white font-bold   ">&#8377; {items.priceINR.toLocaleString()} </span>
                                            <span className="text-[10px] md:text-[16px] text-black  opacity-[0.4] dark:text-white font-bold  line-through mx-2">&#8377; {items.MRPINR.toLocaleString()} </span>
                                            <span className="text-[9px] md:text-[12px] text-[#ff4141] px-[12px] py-[2px] rounded-2xl bg-[#ffcfcf9a] font-bold ">
                                                {(((items.MRPINR - items.priceINR) / items.MRPINR) * 100).toFixed(0)}% off
                                            </span>
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center'>
                                            {(
                                                //Array Check and Mapping: is empty or not an array, it proceeds to Next...
                                                Array.isArray(items.size) ? items.size :
                                                    Array.isArray(items.footSize) ? items.footSize :
                                                        Array.isArray(items.waistSize) ? items.waistSize :
                                                            Array.isArray(items.PhoneCapacity) ? items.PhoneCapacity.map(cp => cp.type) :
                                                                Array.isArray(items.laptopCapacity) ? items.laptopCapacity.map(cp => cp.type) : []
                                            ).map((data, dataIndex) => (
                                                <span className="px-2   m-1 text-[12px] font-semibold bg-slate-100 hover:bg-slate-300 rounded-full " key={dataIndex}>
                                                    {data}
                                                </span>
                                            ))}
                                        </div>




                                    </div>

                                </div>
                            </Link>

                        ))

                    )}

                </div>

                {/* This is pagination Component..... */}
                <Pagination />

            </div >
        </>
    )
}

export default ProductsList