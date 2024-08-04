import React from 'react'
import { Link } from 'react-router-dom'

function PageNavigation({ currentPage, Search, LinkPage }) {
    return (
        <div className=' text-[12px] lg:text-[16px] flex items-start  mx-8 my-[2px]'>
            <Link className=' text-[#6252f3] cursor-pointer' to="/">Home</Link>
            {LinkPage &&
                <>
                    <span className="text-black dark:text-white mx-1"> {' > '} </span>
                    <Link className=' text-[#6252f3] cursor-pointer' to={`/${LinkPage}`}>{LinkPage}</Link>
                </>
            }
            {currentPage &&
                <>
                    <span className="text-black dark:text-white mx-1"> {' > '} </span>
                    <span className="text-black dark:text-white mx-1"> {currentPage} </span>
                </>
            }
            {Search &&
                <>
                    <span className="text-black dark:text-white mx-1"> {' > '} </span>
                    <span className="text-black dark:text-white "> {Search}</span>
                </>
            }

        </div>
    )
}

export default PageNavigation