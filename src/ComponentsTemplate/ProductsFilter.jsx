import React, { useEffect, useState } from 'react'

import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark, FaSquareCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useProductContext } from '../Context/ProductContext';
import { useFilterContext } from '../Context/FilterContext'
import { IoIosArrowDown } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'
import { MdRadioButtonChecked } from 'react-icons/md';

function ProductsFilter() {

    const { isSidebarClose, updateSidebar } = useProductContext();

    const {
        updateFilterValue,
        filters: {
            category,
            company,
            color,
            rating,
            discount,
            shirtSize,
            TrouserSize,
            shoueSize,
            phoneCapacity,
            laptopCapacity,
            febricName,
            occasionName,
            fitTypeName,
            offersName,
            availableOn,
        },
        inputFieldClear,
        showFilterButton,
        all_products,
        ClearCategoryData,
        ClearCompanyData,
        ClearRatingData,
        ClearPriceData,
        ClearColorData,
        ClearDiscountData,
        ClearAllSizeCategory,
        ClearAllCapacityData,
        CleaAvailabilityDataFilter,
        CleaOffersDataFilter,
        CleaFittingsDataFilter,
        CleaOccasionDataFilter,
        CleaFebricDataFilter,
        ClearAllFilter,
    } = useFilterContext();

    // Mouse onclick Transition Effect....
    const MouseClickEffect = (e) => {

        const buttonRect = e.target.getBoundingClientRect();
        const waveSize = Math.max(buttonRect.width, buttonRect.height) * 0.01;
        const waveX = e.clientX - buttonRect.left - waveSize / 2;
        const waveY = e.clientY - buttonRect.top - waveSize / 2;

        let span = document.createElement("span");
        span.classList.add("cllickEffect");
        span.style.width = `${waveSize}px`;
        span.style.height = `${waveSize}px`;
        span.style.top = `${waveY}px`;
        span.style.left = `${waveX}px`;

        e.target.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 600);
    }

    // Onclick Window Scroll to the top of the page...
    const scrollToTop = () => {
        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        }, 700);
    };

    // This is BrandMenu Toggle Fuction...
    const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);

    const brandMenuToggle = (e) => {

        setIsBrandMenuOpen(!isBrandMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);


    };


    // Customer Review Menu Button
    const [isRatingwMenuOpen, setIsRatingMenuOpen] = useState(false);

    const RatingMenuToggle = (e) => {

        setIsRatingMenuOpen(!isRatingwMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };

    // Customer Capacity Menu Button
    const [isCapacityMenuOpen, setIsCapacityMenuOpen] = useState(false);

    const CapacityMenuToggle = (e) => {

        setIsCapacityMenuOpen(!isCapacityMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };

    // Customer Capacity Menu Button
    const [isSizeMenuOpen, setIsSizeMenuOpen] = useState(false);

    const SizeMenuToggle = (e) => {

        setIsSizeMenuOpen(!isSizeMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };


    // Color Menu Button
    const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);


    const ColorMenuToggle = (e) => {

        //Mnaupulate setDisplayedColorsData && setMoreColorChouse when ColorMenuToggle
        // Do after 1000ms..
        setTimeout(() => {
            setMoreColorChouse(false);
            setDisplayedColorsData(7);
        }, 1000);



        setIsColorMenuOpen(!isColorMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };


    const [displayedColorsData, setDisplayedColorsData] = useState(7);
    const [moreColorChouse, setMoreColorChouse] = useState(false);

    const updateColorData = () => {
        // Increase the number of displayed categories by 7
        if (moreColorChouse) {
            setDisplayedColorsData(7)

        } else {
            setDisplayedColorsData(uniqueColorsArrays.length);
        }

        setMoreColorChouse(!moreColorChouse); // Toggle the state
    }


    // Discount Menu Button
    const [isDiscountMenuOpen, setIsDiscountMenuOpen] = useState(false);

    const DiscountMenuToggle = (e) => {

        setIsDiscountMenuOpen(!isDiscountMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };

    //GenderMenuToggle Button
    // const GenderData = ["Male", "Female", "Kids"]
    // const [isGenderMenuOpen, setIsGenderMenuOpen] = useState(false);

    // const GenderMenuToggle = (e) => {

    //     setIsGenderMenuOpen(!isGenderMenuOpen);

    //     // Mouse onclick Transition Effect....
    //     MouseClickEffect(e);
    // };


    //FebricMenuToggle Button
     const [isFebricMenuOpen, setIsFebricMenuOpen] = useState(false);

    const FebricMenuToggle = (e) => {

        setIsFebricMenuOpen(!isFebricMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };

    //Occasion Menu
     const [isOccasionMenuOpen, setIsOccesionMenuOpen] = useState(false);

    const OccasionMenuToggle = (e) => {

        setIsOccesionMenuOpen(!isOccasionMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };


    //FIT Menu
     const [isFitMenuOpen, setIsFitMenuOpen] = useState(false);

    const FitMenuToggle = (e) => {

        setIsFitMenuOpen(!isFitMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };

    //Offers Menu
     const [isOffersMenuOpen, setIsOffersMenuOpen] = useState(false);

    const OffersMenuToggle = (e) => {

        setIsOffersMenuOpen(!isOffersMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };


    //Availability Menu
     const [isAvailabilityMenuOpen, setIsAvailabilityMenuOpen] = useState(false);

    const AvailabilityMenuToggle = (e) => {

        setIsAvailabilityMenuOpen(!isAvailabilityMenuOpen);

        // Mouse onclick Transition Effect....
        MouseClickEffect(e);
    };







    const ToggleSidebarHandler = () => {
        console.log("Sidebar Toggle=>", isSidebarClose)

        // Dispatch an action to toggle isSidebarClose in the context
        updateSidebar(!isSidebarClose);
    }


    // State variables for the minimum and maximum selected values
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(60000);
    // const [MaxRange, setMaxRange] = useState();

    // Prece Range Function.........
    // useEffect(() => {

    //     setMinValue(0);

    //     if (maxPrice >= 50000) {
    //         setMaxValue(Math.round(maxPrice / 10000) * 10000);
    //         // setMaxRange(Math.round(maxPrice / 10000) * 10000);

    //     } else {
    //         setMaxValue(Math.round(maxPrice / 1000) * 1000);
    //         // setMaxRange(Math.round(maxPrice / 1000) * 1000);
    //     }


    // }, [maxPrice])

    const MinRange = 0;
    const MaxRange = 60000;

    const getNumber = (MaxRange) => {
        let stepGap;

        if (MaxRange <= 5000) {
            stepGap = 500;
        } else if (MaxRange <= 10000) {
            stepGap = 1000;
        } else if (MaxRange <= 20000) {
            stepGap = 2000;
        } else if (MaxRange <= 40000) {
            stepGap = 4000;
        } else if (MaxRange <= 50000) {
            stepGap = 8000;
        } else if (MaxRange <= 60000) {
            stepGap = 10000;
        } else {
            stepGap = 12000; // You can set a default or specific gap for ranges >= 60000
        }

        return stepGap;
    };
    // The minimum gap allowed between minValue and maxValue
    const priceGap = getNumber(MaxRange);





    // Function to generate options for the select elements
    const generateOptions = (start, end, step) => {
        const options = [];
        for (let i = start; i <= end; i += step) {
            options.push(i);
        }
        return options;
    };

    // Generate options for the minimum value select
    const minOptions = generateOptions(MinRange, MaxRange - priceGap, priceGap);

    // Generate options for the maximum value select
    const maxOptions = generateOptions(MinRange + priceGap, MaxRange, priceGap);

    // Filter options for the minimum value select
    const filteredMinOptions = minOptions.filter(option => option + priceGap <= maxValue);

    // Filter options for the maximum value select
    const filteredMaxOptions = maxOptions.filter(option => option - priceGap >= minValue);

    // Handler for changes in the minimum value select
    const handleMinChange = (event) => {
        const value = parseInt(event.target.value);
        if (value + priceGap <= maxValue) {
            setMinValue(value);
            updateFilterValue(event);
        }
    };

    // Handler for changes in the maximum value select
    const handleMaxChange = (event) => {
        const value = parseInt(event.target.value);
        if (value - priceGap >= minValue) {
            setMaxValue(value);
            updateFilterValue(event);
        }
    };

 
    // get the unique values of each property
    const getUniqueData = (data, Property) => {

        let newVal = data.map((curElem) => {
            if (Property === "PhoneCapacity") {
                return curElem[Property]
            } else {
                return curElem[Property];
            }

        });
        if (Property === "discountPersent") {
            let DataDesending = newVal.sort((a, b) => b - a);
            return DataDesending = [...new Set(DataDesending)];

        } else if (Property === "size" || Property === "Febric" || Property === "Occasion" || Property === "Fittings" || Property === "Offers" || Property === "Availability") {
            // Flatten the array and filter out null or undefined values
            const flattenedArray = newVal.flat().filter(item => item != null);

            // Create a Set to filter out duplicate values and then convert it back to an array
            return newVal = [...new Set(flattenedArray)];

        } else if (Property === "waistSize") {
            // Flatten the array and filter out null or undefined values
            const flattenedArray = newVal.flat().filter(item => item != null);

            // Create a Set to filter out duplicate values and then convert it back to an array
            return newVal = [...new Set(flattenedArray)];

        } else if (Property === "footSize") {
            // Flatten the array and filter out null or undefined values
            const flattenedArray = newVal.flat().filter(item => item != null);

            // Create a Set to filter out duplicate values and then convert it back to an array
            let DataDesending = [...new Set(flattenedArray)];
            return newVal = DataDesending.sort((a, b) => a - b);

        } else if (Property === "PhoneCapacity" || Property === "laptopCapacity") {

            // Flatten the array and filter out null or undefined values
            let flattenedArray = newVal.flat().filter(item => item);

            // Create a Set to filter out duplicate values and then convert it back to an array
            return flattenedArray = [...new Set(flattenedArray.map(item => item.type))];

        } else {

            return newVal = [...new Set(newVal)];
        }


    };
    const getUniqueColorsArrays = (data) => {
        let newVal = data.map((curElem) => {
            // Extract only the "colors" property
            return curElem.colors;
        });

        // Flatten the arrays into one single array
        const flattenedArray = newVal.flat();

        // Use a Map to ensure unique HEXCODEs
        const uniqueColorsMap = new Map();

        // Iterate over the flattened array and add unique items to the Map
        flattenedArray.forEach(color => {
            uniqueColorsMap.set(color.HEXCODE, color);
        });

        // Convert the Map back to an array and return it
        return Array.from(uniqueColorsMap.values());
    };

    // Get unique colors(name)
    const uniqueColorsArrays = getUniqueColorsArrays(all_products);


    // we need to have the individual data of each in an array format
    const categoryData = getUniqueData(all_products, "category");
    const brandCatagary = getUniqueData(all_products, "company");
    const DiscountPresent = getUniqueData(all_products, "discountPersent");

    const FebricData = getUniqueData(all_products, "Febric");
    const OccasionData = getUniqueData(all_products, "Occasion");
    const FittingsData = getUniqueData(all_products, "Fittings");
    const OffersData = getUniqueData(all_products, "Offers");
    const AvailabilityData = getUniqueData(all_products, "Availability");


    // Round the discount percentages to the nearest 10
    const roundedDiscounts = DiscountPresent.map(item => Math.round(item / 10) * 10);

    const discountPersentData = [...new Set(roundedDiscounts)]; // Remove duplicates

    let modifiDiscountData = discountPersentData.map(item => `${item}% Off or more`);
 
    const productSizeData = getUniqueData(all_products, "size");
    const trouserSizeData = getUniqueData(all_products, "waistSize");
    const footSizeData = getUniqueData(all_products, "footSize");
    const phoneCapacityData = getUniqueData(all_products, "PhoneCapacity");
    const laptopCapacityData = getUniqueData(all_products, "laptopCapacity");

    // Dom Manupulation.....
    const allSizeCategory = ["T-shirts", "Men's Short Kurta", "Men's Formal Shirt", "Men's Casual Shirt", "Men's Shoes", "Fashion Jenos"];
    const shirtCategories = ["T-shirts", "Men's Short Kurta", "Men's Formal Shirt", "Men's Casual Shirt"];

    //Function Clear All Button Price field case (When slide defalt state)
    useEffect(() => {
        if (!(minValue > MinRange || maxValue < MaxRange)) {
            ClearPriceData();
        }
    }, [minValue, maxValue, MinRange, MaxRange]);

    // Filter Tag Fuction.........

    const [filterTags, setFilterTags] = useState([]);

    useEffect(() => {
        let newFilterTags = [];

        // Add category if it exists
        if (category) {
            newFilterTags.push(category);
        }

        // Add company if it exists
        if (company.length > 0) {
            newFilterTags = [...newFilterTags, ...company];
        }
        // Add price range if minValue or maxValue is set
        if (minValue || maxValue < MaxRange) {

            let priceRange = `₹ ${minValue} - ₹ ${maxValue}`;
            newFilterTags.push(priceRange);
        }

        // Add color if it exists
        if (color.length > 0) {
            newFilterTags = [...newFilterTags, ...color];
        }
        // Add rating if it exists
        if (rating) {
            newFilterTags.push(rating);
        }
        // Add discount if it exists
        if (discount) {

            newFilterTags.push(discount);
        }
        // Add shirtSize if it exists
        if (shirtSize.length > 0) {

            newFilterTags = [...newFilterTags, ...shirtSize];
        }

        // Add TrouserSize if it exists
        if (TrouserSize.length > 0) {
            newFilterTags = [...newFilterTags, ...TrouserSize];
        }

        // Add shoueSize if it exists
        if (shoueSize.length > 0) {
            newFilterTags = [...newFilterTags, ...shoueSize];
        }

        // Add phoneCapacity if it exists
        if (phoneCapacity.length > 0) {
            newFilterTags = [...newFilterTags, ...phoneCapacity];
        }
        // Add laptopCapacity if it exists
        if (laptopCapacity.length > 0) {
            newFilterTags = [...newFilterTags, ...laptopCapacity];
        }
        // Add febricName if it exists
        if (febricName.length > 0) {
            newFilterTags = [...newFilterTags, ...febricName];
        }
        // Add occasionName if it exists
        if (occasionName.length > 0) {
            newFilterTags = [...newFilterTags, ...occasionName];
        }
        // Add fitTypeName if it exists
        if (fitTypeName.length > 0) {
            newFilterTags = [...newFilterTags, ...fitTypeName];
        }
        // Add offersName if it exists
        if (offersName.length > 0) {
            newFilterTags = [...newFilterTags, ...offersName];
        }
        // Add availableOn if it exists
        if (availableOn.length > 0) {
            newFilterTags = [...newFilterTags, ...availableOn];
        }

        // Set the new filter tags
        setFilterTags(newFilterTags);

    }, [company, category, minValue, color, rating, discount, shirtSize, shoueSize, TrouserSize, febricName, fitTypeName, maxValue, laptopCapacity, phoneCapacity, occasionName, offersName, availableOn]);

 

    return (

        <div className={`   ${isSidebarClose ? "translate-x-[-309px] " : "translate-x-[0px] w-[100vw]   md:w-[40vw] lg:w-[30vw] z-10 bg-blue-300"} xl:translate-x-[0vw] transition-all bg-white my-[12px] ml-2 mr-[8px] p-4 rounded-md `}>

            <div
                style={{ textAlign: '-webkit-right' }}
                className="xl:hidden block mt-3 "
                onClick={() => ToggleSidebarHandler()}
            >
                <AiOutlineClose className='text-3xl text-black  bg-gray-500 px-1 py-1 rounded-full ' />
            </div>

            <div

                className='flex flex-row items-center justify-center text-center  text-xl font font-bold gap-3'>
                <FaFilter />
                Filters
            </div>

            {/* Clear All Filter */}
            <div className="mb-5">
                <button
                    type='button'
                    onClick={() => {
                        ClearAllFilter();
                    }}

                    className={`${!showFilterButton && "opacity-0 pointer-events-none"} flex items-center  justify-end w-full gap-2 font-semibold  text-[#005def] text-[14px] hover:text-[#000000]  transition-colors duration-300 `}>
                    <FaFilterCircleXmark />
                    <span className="text-right">CLEAR ALL</span>
                </button>
            </div>

            {/* This is all Filter Tags display and remove Filter......... */}
            <div className="mb-5 ">
                <section className="flex flex-wrap justify-center gap-2 min-h-[50px] max-h-[200px] border-gray-200 border-b-[1px] overflow-y-auto pb-4">

                    {filterTags?.map((items, index) => (
                        <label
                            key={index}
                            htmlFor={items}
                            onClick={(e) => {
                                // Define a regular expression pattern to match the price range format
                                const priceRangePattern = /^₹\s*(\d+)\s*-\s*₹\s*(\d+)$/;
                                if (priceRangePattern.test(items)) {
                                    ClearPriceData();
                                    setMinValue(0);
                                    setMaxValue(MaxRange);
                                }

                            }}
                            className="flex items-center justify-center bg-gray-200 w-fit h-fit gap-2 px-4 py-[2px] text-[14px] cursor-pointer hover:line-through   hover:bg-gray-300">

                            <span className=" ">✕</span>
                            <span className=" ">

                                {items}

                            </span>

                        </label>
                    ))}


                </section>
            </div>

            {/* Search Filter Section*/}

            {/* <div className=' my-3'>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='my-3 relative w-fit'
                >
                    <input
                        type="text"
                        name='text'
                        className="text-[17px] border-[2px] border-black rounded-sm px-3 py-[2px] relative"
                        placeholder="Search.."
                        autoComplete="off"
                        value={text}
                        onChange={updateFilterValue}
                    />
                     {text && (
                        <button
                            type="button"
                            onClick={inputFieldClear}
                            className="absolute inset-y-0 right-0 flex items-center px-1  m-1   text-black rounded-full bg-gray-300 hover:bg-gray-500 hover:text-white focus:outline-none"
                        >
                            <MdClear />
                        </button>
                    )}
                </form>
            </div> */}

            {/* Category Filter Section*/}
            <section className='border-gray-200  border-b py-2'>

                <header className='text-gray-600 font-semibold '>CATGHORY</header>

                {/* categoryData Clear Button */}
                <button
                    type="button"
                    onClick={ClearCategoryData}
                    title='ClearCategoryData'
                    className={`${category ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                >
                    <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                    </span>
                    <span className='text-[14px] font-semibold  '>
                        Clear
                    </span>
                </button>
                {categoryData.map((curElem, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center gap-4 my-1 truncate text-sm hover:font-semibold"
                    >
                        <input
                            type="radio"
                            id={curElem}
                            name="category"
                            value={curElem}

                            onChange={(e) => {
                                updateFilterValue(e)
                            }
                            }

                            className={`${curElem === category && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            checked={curElem === category}
                        />
                        {/* Display the icon when the item is selected */}
                        {curElem === category && (
                            <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                <MdRadioButtonChecked />
                            </label>
                        )}

                        <label
                            htmlFor={curElem}
                            className={`${curElem === category ? "text-blue-600" : "text-black"} cursor-pointer`}
                        >
                            {curElem}
                        </label>
                    </div>
                ))}




            </section>


            {/* Price range Section */}
            <section className=' border-gray-200  border-b py-2'>

                <header className='text-gray-600 font-semibold  '>PRICE</header>


                <button
                    type="button"
                    onClick={() => {
                        ClearPriceData();
                        setMinValue(0);
                        setMaxValue(MaxRange);

                    }}
                    title='ClearCategoryData'
                    className={`${minValue > MinRange || maxValue < MaxRange ? "opacity-[1]" : "opacity-0  pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                >
                    <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                    </span>
                    <span className='text-[14px] font-semibold  '>
                        Clear
                    </span>
                </button>

                <div className="  rounded-md">

                    <header className="text-center text-sm font-semibold mb-8">Price Range Slider..</header>

                    <div className="slider bg-[#ababab] h-1 rounded relative mb-2">
                        <div
                            style={{ left: `${(minValue / MaxRange) * 100}%`, right: `${100 - (maxValue / MaxRange) * 100}%` }}
                            className=" progress bg-blue-600 h-1 rounded absolute"
                        >

                        </div>
                    </div>

                    <div className="range_input relative  "  >
                        <input
                            className="range_min  "
                            type="range"
                            name='Minprice'

                            min={MinRange}
                            max={MaxRange}
                            value={minValue || MinRange}
                            step={priceGap}
                            onChange={(e) => {
                                // Parse the value of the input as an integer
                                const value = parseInt(e.target.value);

                                // Check if the new value is greater than or equal to (maxValue + priceGap)
                                if (value <= maxValue - priceGap) {
                                    // Update the state for MinValue to the new value
                                    setMinValue(value);

                                    // updateFilterValue.....
                                    updateFilterValue(e)
                                }
                            }}
                        />

                        <input
                            className="range_max"
                            type="range"
                            name='Maxprice'

                            min={MinRange}
                            max={MaxRange}
                            step={priceGap}
                            value={maxValue || MaxRange}
                            onChange={(e) => {
                                // Parse the value of the input as an integer
                                const value = parseInt(e.target.value);

                                // Check if the new value is greater than or equal to (minValue + priceGap)
                                if (value >= minValue + priceGap) {
                                    // Update the state for maxValue to the new value
                                    setMaxValue(value);

                                    // updateFilterValue.....
                                    updateFilterValue(e)
                                }
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-around my-8">
                        <select
                            id="minRangeSelect"
                            name='Minprice'
                            value={minValue}
                            onChange={

                                handleMinChange
                            }
                            className="bg-white max-w-fit text-center text-sm px-2 py-1 outline-none rounded-sm border-[1px]  font-semibold border-gray-400"
                        >
                            {filteredMinOptions.map(option => (
                                <option key={option} value={option} className="_0vP2OD">
                                    {option === MinRange ? 'Min' : option}
                                </option>
                            ))}
                        </select>


                        <div className="text-lg">to</div>

                        <select
                            id="maxRangeSelect"
                            value={maxValue}
                            name='Maxprice'

                            onChange={

                                handleMaxChange
                            }
                            className="bg-white max-w-fit text-center text-sm px-2 py-1 outline-none rounded-sm border-[1px] font-semibold border-gray-400"
                        >
                            {filteredMaxOptions.map(option => (
                                <option key={option} value={option} className="_0vP2OD">
                                    {option === MaxRange ? `${MaxRange} + ` : option}
                                </option>
                            ))}
                        </select>

                    </div>

                </div>

            </section>


            {/* Brand   Section */}
            <section className=" border-gray-200  border-b">
                <div
                    onClick={brandMenuToggle}
                    className="relative overflow-hidden flex items-center justify-between cursor-pointer  py-2    " >
                    <div className="text-gray-600 font-semibold  ">BRAND</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isBrandMenuOpen ? "transform rotate-180" : "rotate-0"} `} />
                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isBrandMenuOpen ? 'max-h-[500px] mb-6' : 'max-h-0'} `}>

                    {/* companyData Clear Button */}
                    <button
                        type="button"
                        onClick={ClearCompanyData}
                        title='ClearCategoryData'
                        className={`${company.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>



                    {brandCatagary.map((item, index) => (
                        <div

                            key={index}
                            className="flex flex-row items-center truncate text-[17px] gap-5 my-1"
                            onClick={() => {
                                setIsBrandMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={item}
                                name="company"
                                value={item}
                                onChange={updateFilterValue}
                                checked={company.includes(item)} // Check if the item is in the selected companies array
                                className={`${company.includes(item) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />


                            {/* Display the icon when the item is selected */}
                            {company.includes(item) && (
                                <label htmlFor={item} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}
                            <label htmlFor={item}
                                className={`${company.includes(item) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {item}
                            </label>
                        </div>
                    ))}

                </div>



            </section >


            {/* Customer Review Section */}
            <section className=" border-gray-200  border-b" >

                <div onClick={RatingMenuToggle}
                    className="flex items-center justify-between cursor-pointer relative overflow-hidden  py-2"
                >
                    <div className="text-gray-600 font-semibold">CUSTOMER RATINGS</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isRatingwMenuOpen ? "transform rotate-180" : "rotate-0"} `} />
                </div>

                <div
                    className={` overflow-hidden   duration-700 ease-in-out   ${isRatingwMenuOpen ? 'max-h-40 mb-6  ' : 'max-h-0'} `}
                >

                    {/* Rating Clear Button */}
                    <button
                        type="button"
                        onClick={ClearRatingData}
                        title='ClearRatingData'
                        className={`${rating ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>

                    <div className="flex flex-col gap-[2px] text-[17px] my-1">

                        {["4 Star & more", "3 Star & more", "2 Star & more"].map((curentElem, index) => (
                            (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setIsRatingMenuOpen(false);
                                        scrollToTop();
                                    }}
                                    className="flex items-center gap-4 my-1 truncate text-[17px] hover:font-semibold"
                                >
                                    <input
                                        type="radio"
                                        id={curentElem}
                                        name="rating"
                                        value={curentElem}
                                        onChange={(e) => { updateFilterValue(e) }}
                                        className={`${String(curentElem) === String(rating) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                        checked={String(curentElem) === String(rating)}
                                    />

                                    {/* Display the icon when the item is selected */}
                                    {String(curentElem) === String(rating) && (
                                        <label htmlFor={curentElem} className="flex text-blue-500 text-[18px]">
                                            <MdRadioButtonChecked />
                                        </label>
                                    )}

                                    <label
                                        htmlFor={curentElem}
                                        className={`${String(curentElem) === String(rating) ? "font-semibold text-blue-600" : "text-black"} cursor-pointer `}
                                    >
                                        {curentElem}

                                    </label>
                                </div>
                            )
                        ))}


                    </div>
                </div>

            </section >


            {/* Color Section */}
            <section className=" border-gray-200  border-b ">

                <div
                    onClick={ColorMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">COLOR</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isColorMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={`overflow-hidden duration-700 ease-in-out ${isColorMenuOpen ? (moreColorChouse ? "max-h-[1100px] mb-2" : "max-h-[450px] mb-2") : 'max-h-0'}`}>

                    {/* Singale Clear Button */}
                    <button
                        type="button"
                        onClick={() => ClearColorData()}
                        title='ClearCategoryData'
                        className={`${color.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>



                    {uniqueColorsArrays.slice(0, displayedColorsData).map((items, index) => (
                        <div key={index} className="group my-2">
                            <input
                                type="checkbox"
                                id={items.name}
                                name="color"
                                value={items.name}
                                checked={color.includes(items.name)}
                                onChange={(e) => {
                                    setIsColorMenuOpen(false);
                                    setTimeout(() => {
                                        setMoreColorChouse(false);
                                        setDisplayedColorsData(7);
                                    }, 1000);
                                    scrollToTop();
                                    updateFilterValue(e);
                                }}
                                className="hidden" // Hide the checkbox but it accessible
                            />
                            <label
                                htmlFor={items.name}
                                className="flex items-center pl-7 gap-3 w-full h-[2.5rem] border border-black rounded-md hover:bg-gray-100 opacity-[0.9] group-hover:opacity-[1] cursor-pointer"
                                style={{ backgroundColor: `${items.HEXCODE}` }}
                            >
                                <TiTick className={`text-4xl ${items.name === "White" ? "text-black" : "text-green-500"} ${color.includes(items.name) ? "opacity-[1]" : "opacity-0"}`} />

                                <span className={`${items.name === "White" ? "text-black" : "text-white"} cursor-pointer opacity-[1] font-bold`}>
                                    {items.name}
                                </span>
                            </label>
                        </div>
                    ))}


                    {/* show less or more button */}

                    <div className="mx-4 my-3">
                        <button
                            type="button"
                            onClick={updateColorData}
                            className='text-[15px] font-semibold text-[#2474ff] '
                        >
                            {moreColorChouse ?
                                (
                                    <div className='flex flex-row items-center justify-center gap-2  text-[#2474ff] hover:text-[#ff5c5c]  transition-colors duration-200'>
                                        <span className="">SHOW LESS</span>
                                        <IoIosArrowDown className={`text-xl  duration-700 ease-in-out ${moreColorChouse ? "transform rotate-180" : "rotate-0"} `} />
                                    </div>
                                ) : (
                                    <div className='flex flex-row items-center justify-center gap-2  text-[#2474ff] hover:text-[#ff5c5c] transition-colors duration-200'>
                                        <span className="">SHOW MORE {`- ${uniqueColorsArrays.length - displayedColorsData} `} </span>
                                        <IoIosArrowDown className={`text-xl  duration-700 ease-in-out ${moreColorChouse ? "transform rotate-180" : "rotate-0"} `} />
                                    </div>
                                )
                            }

                        </button>
                    </div>


                </div >

            </section >


            {/* Size Section */}
            {/* Initially hide this  Size Section  ..Only display whill select Specifi Category... */}
            {
                allSizeCategory.includes(category) &&
                <section className=" border-gray-200  border-b">

                    <div onClick={SizeMenuToggle}
                        className="flex items-center justify-between cursor-pointer relative overflow-hidden  py-2"
                    >
                        <div className="text-gray-600 font-semibold">SIZE</div>

                        <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isSizeMenuOpen ? "transform rotate-180" : "rotate-0"} `} />
                    </div>

                    <div
                        className={` overflow-hidden   duration-700 ease-in-out   ${isSizeMenuOpen ? 'max-h-[500px] mb-6  ' : 'max-h-0'} `}
                    >
                        {/* Size Section Clear Button */}
                        <button
                            type="button"
                            onClick={() => ClearAllSizeCategory()}
                            title='ClearCategoryData'
                            className={`${shirtSize.length >= 1 || TrouserSize.length >= 1 || shoueSize.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                        >
                            <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                            </span>
                            <span className='text-[14px] font-semibold  '>
                                Clear
                            </span>
                        </button>

                        {shirtCategories.includes(category) && (
                            <>
                                <h5 className="pt-3 pb-2 font-semibold">For Shirt Size</h5>

                                <div className="flex flex-col  items-start  gap-2">
                                    {productSizeData.map((items, index) => (

                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsSizeMenuOpen(false);
                                                scrollToTop();
                                            }}
                                            className="flex flex-row items-center gap-5 truncate text-[17px]   ">

                                            <input
                                                type="checkbox"
                                                id={items}
                                                name="shirtSize"
                                                title={`Size ${items}`}
                                                value={items}
                                                checked={shirtSize.includes(items)}
                                                onChange={(e) => {
                                                    scrollToTop();
                                                    updateFilterValue(e);
                                                }}
                                                className={`${shirtSize.includes(items) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                            />
                                            {/* Display the icon when the item is selected */}
                                            {shirtSize.includes(items) && (
                                                <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                                    <FaSquareCheck />
                                                </label>
                                            )}
                                            <label
                                                htmlFor={items}
                                                className={`${shirtSize.includes(items) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                            >
                                                {items}
                                            </label>
                                        </div >

                                    ))}
                                </div>
                            </>
                        )}

                        {category === "Fashion Jenos" && (
                            <>
                                <h5 className="pt-3 pb-2 font-semibold">For Trouser Size</h5>

                                <div className="flex flex-col   items-start  gap-2">
                                    {trouserSizeData.map((items, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsSizeMenuOpen(false);
                                                scrollToTop();
                                            }}
                                            className="flex flex-row items-center gap-5 truncate text-[17px]   ">

                                            <input
                                                type="checkbox"
                                                id={items}
                                                name="TrouserSize"
                                                title={`Size ${items}`}
                                                value={items}
                                                checked={TrouserSize.includes(items)}
                                                onChange={(e) => {
                                                    scrollToTop();
                                                    updateFilterValue(e);
                                                }}
                                                className={`${TrouserSize.includes(items) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                            />
                                            {/* Display the icon when the item is selected */}
                                            {TrouserSize.includes(items) && (
                                                <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                                    <FaSquareCheck />
                                                </label>
                                            )}
                                            <label
                                                htmlFor={items}
                                                className={`${TrouserSize.includes(items) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                            >
                                                {items}
                                            </label>
                                        </div >
                                    ))}
                                </div>
                            </>
                        )}
                        {category === "Men's Shoes" && (
                            <>
                                <h5 className="pt-3 pb-2 font-semibold">For Shoues Size</h5>

                                <div className="flex flex-col   items-start  gap-2">

                                    {footSizeData.map((items, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsSizeMenuOpen(false);
                                                scrollToTop();
                                            }}
                                            className="flex flex-row items-center gap-5 truncate text-[17px]   ">

                                            <input
                                                type="checkbox"
                                                id={items}
                                                name="shoueSize"
                                                title={`Size ${items}`}
                                                value={items}
                                                checked={shoueSize.includes(items)}
                                                onChange={(e) => {
                                                    scrollToTop();
                                                    updateFilterValue(e);
                                                }}
                                                className={`${shoueSize.includes(items) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                            />
                                            {/* Display the icon when the item is selected */}
                                            {shoueSize.includes(items) && (
                                                <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                                    <FaSquareCheck />
                                                </label>
                                            )}
                                            <label
                                                htmlFor={items}
                                                className={`${shoueSize.includes(items) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                            >
                                                {items}
                                            </label>
                                        </div >

                                    ))}
                                </div>
                            </>
                        )}

                    </div>

                </section>
            }


            {/* Capacity Section */}
            {/* Initially hide this  Capacity Section ..Only display whill select Specifi Category... */}
            {
                (category === "Mobiles" || category === "Laptop") &&
                <section className=" border-gray-200  border-b">

                    <div onClick={CapacityMenuToggle}
                        className="flex items-center justify-between cursor-pointer relative overflow-hidden  py-2"
                    >
                        <div className="text-gray-600 font-semibold">CAPACITY</div>

                        <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isCapacityMenuOpen ? "transform rotate-180" : "rotate-0"} `} />
                    </div>

                    <div
                        className={` overflow-hidden   duration-700 ease-in-out   ${isCapacityMenuOpen ? 'max-h-80 mb-6  ' : 'max-h-0'} `}
                    >

                        {/* Capacity Section Clear Button */}
                        <button
                            type="button"
                            onClick={() => ClearAllCapacityData()}
                            title='ClearCategoryData'
                            className={`${phoneCapacity.length >= 1 || laptopCapacity.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-1 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                        >
                            <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                            </span>
                            <span className='text-[14px] font-semibold  '>
                                Clear
                            </span>
                        </button>

                        {category === "Mobiles" && (
                            <>
                                <h5 className="pt-3 pb-2 font-semibold">Mobile Capacity</h5>
                                <div className="flex flex-col justify-center  items-start  gap-2">

                                    {phoneCapacityData.map((items, index) => (

                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsCapacityMenuOpen(false);
                                                scrollToTop();
                                            }}
                                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                                        >

                                            <input
                                                type="checkbox"
                                                id={items}
                                                name="phoneCapacity"
                                                value={items}
                                                checked={phoneCapacity.includes(items)}
                                                onChange={(e) => {
                                                    scrollToTop();
                                                    updateFilterValue(e);
                                                }}
                                                className={`${phoneCapacity.includes(items) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                            />
                                            {/* Display the icon when the item is selected */}
                                            {phoneCapacity.includes(items) && (
                                                <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                                    <FaSquareCheck />
                                                </label>
                                            )}
                                            <label
                                                htmlFor={items}
                                                className={`${phoneCapacity.includes(items) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                            >
                                                {items}
                                            </label>


                                        </div >
                                    ))}

                                </div>
                            </>
                        )}

                        {category === "Laptop" && (
                            <>
                                <h5 className="pt-3 pb-2 font-semibold"> Laptop Capacity</h5>

                                <div className="flex flex-col justify-center  items-start  gap-2">

                                    {laptopCapacityData.map((items, index) => (

                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsCapacityMenuOpen(false);
                                                scrollToTop();
                                            }}
                                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 ">

                                            <input
                                                type="checkbox"
                                                id={items}
                                                name="laptopCapacity"
                                                value={items}
                                                checked={laptopCapacity.includes(items)}
                                                onChange={(e) => {
                                                    scrollToTop();
                                                    updateFilterValue(e);
                                                }}
                                                className={`${laptopCapacity.includes(items) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                            />

                                            {/* Display the icon when the item is selected */}
                                            {laptopCapacity.includes(items) && (
                                                <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                                    <FaSquareCheck />
                                                </label>
                                            )}

                                            <label
                                                htmlFor={items}
                                                className={`${laptopCapacity.includes(items) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                            >
                                                {items}
                                            </label>


                                        </div >
                                    ))}




                                </div>

                            </>
                        )}

                    </div>

                </section>
            }


            {/* Gender Section */}
            {/* < section className=" border-gray-200  border-b " >

                <div
                    onClick={GenderMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">GENDER</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isGenderMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isGenderMenuOpen ? 'max-h-[100px] my-5' : 'max-h-0'} `}>

                    {GenderData.map((curElem, index) => (
                        <div key={index}
                            className="truncate my-1  text-[18px]"
                            onClick={() => {
                                setIsGenderMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="gender"

                                value={curElem}
                                onChange={updateFilterValue}
                                //  checked={company.includes(item)} // Check if the item is in the selected companies array
                                className='cursor-pointer w-4 h-4 hover:font-semibold'
                            />
                            <label htmlFor={curElem}
                                className={`${company.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "} px-3 `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}

                </div>

            </ section > */}

            {/* Coustume Febric Section */}
            < section className=" border-gray-200  border-b " >

                <div
                    onClick={FebricMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">FEBRIC</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isFebricMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isFebricMenuOpen ? 'max-h-[250px] mb-6' : 'max-h-0'} `}>

                    {/* FEBRIC TYPE Clear Button */}
                    <button
                        type="button"
                        onClick={() => CleaFebricDataFilter()}
                        title='ClearCategoryData'
                        className={`${febricName.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>


                    {FebricData.map((curElem, index) => (

                        <div key={index}
                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            onClick={() => {
                                setIsFebricMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="febricName"

                                value={curElem}
                                onChange={updateFilterValue}
                                checked={febricName.includes(curElem)} // Check if the item is in the selected companies array
                                className={`${febricName.includes(curElem) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />
                            {/* Display the icon when the item is selected */}
                            {febricName.includes(curElem) && (
                                <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}

                            <label htmlFor={curElem}
                                className={`${febricName.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}

                </div>

            </ section >

            {/* Occasion  Section */}
            < section className=" border-gray-200  border-b " >

                <div
                    onClick={OccasionMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">OCCASION</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isOccasionMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isOccasionMenuOpen ? 'max-h-[250px] mb-6' : 'max-h-0'} `}>

                    {/* OCCASION TYPE Clear Button */}
                    <button
                        type="button"
                        onClick={() => CleaOccasionDataFilter()}
                        title='ClearCategoryData'
                        className={`${occasionName.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>


                    {OccasionData.map((curElem, index) => (
                        <div key={index}
                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            onClick={() => {
                                setIsOccesionMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="occasionName"

                                value={curElem}
                                onChange={updateFilterValue}
                                checked={occasionName.includes(curElem)} // Check if the item is in the selected companies array
                                className={`${occasionName.includes(curElem) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />
                            {/* Display the icon when the item is selected */}
                            {occasionName.includes(curElem) && (
                                <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}

                            <label htmlFor={curElem}
                                className={`${occasionName.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}

                </div>

            </ section>

            {/* Fit  Section */}
            < section className=" border-gray-200  border-b " >

                <div
                    onClick={FitMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">FIT TYPE</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isFitMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isFitMenuOpen ? 'max-h-[250px] mb-6' : 'max-h-0'} `}>

                    {/* FIT TYPE Clear Button */}
                    <button
                        type="button"
                        onClick={() => CleaFittingsDataFilter()}
                        title='ClearCategoryData'
                        className={`${fitTypeName.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>

                    {FittingsData.map((curElem, index) => (
                        <div key={index}
                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            onClick={() => {
                                setIsFitMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="fitTypeName"

                                value={curElem}
                                onChange={updateFilterValue}
                                checked={fitTypeName.includes(curElem)} // Check if the item is in the selected companies array
                                className={`${fitTypeName.includes(curElem) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />
                            {/* Display the icon when the item is selected */}
                            {fitTypeName.includes(curElem) && (
                                <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}

                            <label htmlFor={curElem}
                                className={`${fitTypeName.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}

                </div>

            </ section >

            {/* Offers  Section */}
            < section className=" border-gray-200  border-b " >

                <div
                    onClick={OffersMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">OFFERS</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isOffersMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isOffersMenuOpen ? 'max-h-[300px] mb-6' : 'max-h-0'} `}>

                    {/* OFFERS Clear Button */}
                    <button
                        type="button"
                        onClick={() => CleaOffersDataFilter()}
                        title='ClearCategoryData'
                        className={`${offersName.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>


                    {OffersData.map((curElem, index) => (
                        <div key={index}
                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            onClick={() => {
                                setIsOffersMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="offersName"

                                value={curElem}
                                onChange={updateFilterValue}
                                checked={offersName.includes(curElem)} // Check if the item is in the selected companies array
                                className={`${offersName.includes(curElem) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />
                            {/* Display the icon when the item is selected */}
                            {offersName.includes(curElem) && (
                                <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}
                            <label htmlFor={curElem}
                                className={`${offersName.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}

                </div>

            </ section >

            {/* Availability  Section */}
            < section className=" border-gray-200  border-b " >

                <div
                    onClick={AvailabilityMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">AVAILABILITY</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isAvailabilityMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>

                <div className={` overflow-hidden   duration-700 ease-in-out   ${isAvailabilityMenuOpen ? 'max-h-[100px] mb-6' : 'max-h-0'} `}>

                    {/* AVAILABILITY Clear Button */}
                    <button
                        type="button"
                        onClick={() => CleaAvailabilityDataFilter()}
                        title='ClearCategoryData'
                        className={`${availableOn.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>

                    {AvailabilityData.map((curElem, index) => (
                        <div key={index}
                            className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            onClick={() => {
                                setIsAvailabilityMenuOpen(false);
                                scrollToTop();
                            }}
                        >
                            <input
                                type="checkbox"
                                id={curElem}
                                name="availableOn"
                                value={curElem}
                                onChange={updateFilterValue}
                                checked={availableOn.includes(curElem)} // Check if the item is in the selected companies array
                                className={`${availableOn.includes(curElem) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                            />
                            {/* Display the icon when the item is selected */}
                            {availableOn.includes(curElem) && (
                                <label htmlFor={curElem} className="flex text-blue-500 text-[18px]">
                                    <FaSquareCheck />
                                </label>
                            )}

                            <label htmlFor={curElem}
                                className={`${availableOn.includes(curElem) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                            >
                                {curElem}
                            </label>
                        </div>

                    ))}


                </div>

            </ section >


            {/* discount Filter Section */}
            < section className=" border-gray-200  border-b " >
                <div
                    onClick={DiscountMenuToggle}
                    className="flex items-center justify-between cursor-pointer py-2 relative overflow-hidden"
                >
                    <div className="text-gray-600 font-semibold">DISCOUNT</div>

                    <IoIosArrowDown className={`text-xl text-gray-600 duration-700 ease-in-out ${isDiscountMenuOpen ? "transform rotate-180" : "rotate-0"} `} />

                </div>


                < div className={` overflow-hidden   duration-700 ease-in-out   ${isDiscountMenuOpen ? 'max-h-[400px] mb-6' : 'max-h-0'} `} >

                    {/* discount Clear Button */}
                    <button
                        type="button"
                        onClick={() => ClearDiscountData()}
                        title='ClearCategoryData'
                        className={`${discount.length >= 1 ? "opacity-[1]" : "opacity-0 pointer-events-none"} flex items-center justify-between w-[90px] px-4  my-2 gap-1 text-[12px] cursor-pointer rounded-full hover:bg-black hover:text-white`}
                    >
                        <span className='text-[14px] font-semibold  '> <FaFilterCircleXmark />
                        </span>
                        <span className='text-[14px] font-semibold  '>
                            Clear
                        </span>
                    </button>

                    {
                        modifiDiscountData.map((items, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setIsDiscountMenuOpen(false);
                                    scrollToTop();
                                }}
                                className="flex flex-row items-center gap-5 truncate text-[17px] my-1 "
                            >
                                <input
                                    type="checkbox"
                                    id={items}
                                    name="discount"
                                    value={items === 10 ? 0 : items} // Pass 0 if item is 10
                                    onChange={updateFilterValue}
                                    checked={String(items === 10 ? 0 : items) === String(discount)} // Check with 0 if item is 10
                                    className={`${String(items === 10 ? 0 : items) === String(discount) && "hidden"}  cursor-pointer  h-4 w-4 hover:font-semibold`}
                                />

                                {/* Display the icon when the item is selected */}
                                {String(items === 10 ? 0 : items) === String(discount) && (
                                    <label htmlFor={items} className="flex text-blue-500 text-[18px]">
                                        <FaSquareCheck />
                                    </label>
                                )}

                                <label
                                    htmlFor={items}
                                    className={`${String(items === 10 ? 0 : items) === String(discount) ? "font-semibold text-blue-600" : "cursor-pointer hover:font-semibold   "}  `}
                                >
                                    {items}

                                </label>

                            </div>
                        ))
                    }

                </div >

            </section >


        </div >


    )
}

export default ProductsFilter