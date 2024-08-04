import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../Context/FilterContext';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

const Pagination = () => {
    const { filter_products, dispatch } = useFilterContext();

    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 6;
    const lastIndex = recordPerPage * currentPage;
    const firstIndex = lastIndex - recordPerPage;
    //Data display on page...
    const displayData = filter_products.slice(firstIndex, lastIndex);

    const numberOfPages = Math.ceil(filter_products.length / recordPerPage);
    const displayPageNumbers = [...Array(numberOfPages).keys()].map(i => i + 1);

    useEffect(() => {

        dispatch({ type: 'SET_DATA_DISPLAY', payload: displayData });

        // Calculate the endIndex based on whether it's the last page or not
        const endIndex = currentPage === numberOfPages ? filter_products.length : lastIndex;

        // Construct the payload for DATA_PROGRESS_DISPLAY action
        const payload = `${firstIndex + 1} - ${endIndex}`;

        dispatch({ type: 'DATA_PROGRESS_DISPLAY', payload });


    }, [currentPage, filter_products, dispatch]);

    // console.log(`${firstIndex + 1}`, `${currentPage === numberOfPages ? `${filter_products.length}`:`${lastIndex}`}`)
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            scrollToTop();
        }
    };

    const nextPage = () => {
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1);
            scrollToTop();
        }
    };

    // Onclick Window Scroll to the top of the page...
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    return (
        <div className="flex items-center justify-between py-1 px-5">
            <span className="font-semibold">Pages {currentPage} - {numberOfPages}</span>

            <nav className="text-center px-3 flex items-center justify-center space-x-6">

                <section className={`${currentPage !== 1 && "group"} flex flex-row items-center gap-2  `}>
                    <button
                        onClick={prevPage}
                        className={`${currentPage === 1 && "opacity-0 cursor-default"} inline-block text-black px-4 py-2 font-semibold    hover:text-blue-600   transition-colors duration-300`}
                    >
                        PREVIOUS
                    </button>

                    <div className='flex flex-row items-center text-3xl   text-gray-400 transition-all duration-700 opacity-0 ml-[-10px] z-[1] group-hover:opacity-[1] group-hover:translate-x-[-18px] ease-in-out'>
                        <MdOutlineNavigateBefore />
                        <MdOutlineNavigateBefore />
                    </div>

                </section>

                {displayPageNumbers.map(pageNumber => (
                    <div
                        key={pageNumber}
                        className="p-[10px] rounded-full bg-[#ebebeb]">

                        <button

                            onClick={() => {
                                setCurrentPage(pageNumber);
                                scrollToTop();
                            }}
                            className={`${currentPage === pageNumber ? "bg-blue-600 text-white" : "bg-gray-400 text-white   transition-all duration-700"} inline-block rounded-full px-3 py-1 font-semibold  `}
                        >


                            {pageNumber}

                        </button>
                    </div>
                ))}


                <section className={`${currentPage !== numberOfPages && "group"}  flex flex-row items-center gap-2  `}>

                    <div className='flex flex-row items-center text-3xl text-gray-400 transition-all duration-700 opacity-0 mr-[-10px] z-[1] group-hover:opacity-[1] group-hover:translate-x-[18px] ease-in-out'>
                        <MdOutlineNavigateNext />
                        <MdOutlineNavigateNext />
                    </div>
                    <button
                        onClick={nextPage}
                        className={`${currentPage === numberOfPages && "opacity-0 cursor-default"} first-letter inline-block text-black    px-4 py-2 font-semibold hover:text-blue-600 transition-colors duration-300 `}
                    >
                        NEXT
                    </button>

                </section>
            </nav>

            <span className="inline-block w-[8rem] h-full"></span>
        </div>
    );
};

export default Pagination;
