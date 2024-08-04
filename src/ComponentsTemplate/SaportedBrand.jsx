import React from 'react'
function SaportedBrand() {

    const brandCompanies = [
        {
            name: "Gucci",
            logo: "https://mbluxury1.s3.amazonaws.com/2022/02/25172759/gucci-1-768x403.jpg"
        },
        {
            name: "Chanel",
            logo: "	https://mbluxury1.s3.amazonaws.com/2022/02/25172616/chanel-1-768x403.jpg"
        },
        {
            name: "Cartier",
            logo: "https://mbluxury1.s3.amazonaws.com/2022/02/25173149/cartier-768x403.jpg"
        },
        {
            name: "Versace ",
            logo: "https://mbluxury1.s3.amazonaws.com/2022/02/25172711/versace-768x403.jpg"
        },
        {
            name: "Rolex",
            logo: "https://mbluxury1.s3.amazonaws.com/2022/02/25173615/role-1-768x403.jpg"
        },
        {
            name: "Givenchy",
            logo: "https://mbluxury1.s3.amazonaws.com/2022/02/25172633/givenchy-768x403.jpg"
        },
        {
            name: "Jimmy Choo",
            logo: "	https://mbluxury1.s3.amazonaws.com/2022/02/25172642/jimmy-choo-768x403.jpg"
        },
        {
            name: "Tata Harper",
            logo: "	https://mbluxury1.s3.amazonaws.com/2024/01/23141959/luxury-brand-logos-tata-harper-768x403.jpg"
        },
        {
            name: "Parker",
            logo: "	https://mbluxury1.s3.amazonaws.com/2024/01/23143140/luxury-brand-logos-parker-768x403.jpg"
        }

    ]

    return (
        <div className='flex flex-col  items-center justify-center my-12 bg-[#d2d3cc4d] dark:bg-black overflow-hidden mx-2 md:mx-8 rounded-md px-[50px] '>
            <div className='text-xl md:text-4xl text-black dark:text-white py-4  '>
                Trusted By 1000+ Companies
            </div>

            {/* 1st slideshoe... */}
            <div className="logos my-7 w-full overflow-hidden whitespace-nowrap relative"  >
                <div className="logos-slide   ">
                    {brandCompanies.map((items, index) => (
                        <img
                            key={index}
                            src={items.logo}
                            alt={items.name}
                            className="images h-[80px] w-[120px] mx-[30px] border-[1px] border-black rounded-sm cursor-pointer"
                        />
                    ))}
                </div>
                <div className="logos-slide    ">
                    {brandCompanies.map((items, index) => (
                        <img
                            key={index}
                            src={items.logo}
                            alt={items.name}
                            className="images h-[80px] w-[120px] mx-[30px] border-[1px] border-black rounded-sm cursor-pointer"
                        />
                    ))}
                </div>

            </div>

            {/* 2nd slideshoe... */}
            <div className="logos mb-7 w-full overflow-hidden whitespace-nowrap relative"  >
                <div className="logos-slide-secend   ">
                    {brandCompanies.map((items, index) => (
                        <img
                            key={index}
                            src={items.logo}
                            alt={items.name}
                            className="images h-[80px] w-[120px] mx-[30px] border-[1px] border-black rounded-sm cursor-pointer"
                        />
                    ))}
                </div>
                <div className="logos-slide-secend    ">
                    {brandCompanies.map((items, index) => (
                        <img
                            key={index}
                            src={items.logo}
                            alt={items.name}
                            className="images h-[80px] w-[120px] mx-[30px] border-[1px] border-black rounded-sm cursor-pointer"
                        />
                    ))}
                </div>



            </div>

        </div >
    )
}

export default SaportedBrand