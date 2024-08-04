import React from 'react'
import Footer from '../ComponentsTemplate/Footer'
import ProductsFilter from '../ComponentsTemplate/ProductsFilter'
import ProductsList from '../ComponentsTemplate/ProductsList'

function Products() {

  return (
    <div>
      <div className="flex flex-col bg-white dark:bg-black   ">

        <div className={` grid-cols-[0vw_100vw] grid  xl:grid-cols-[20vw_80vw]  w-[100%] h-[100%]  overflow-hidden 
         transition-all bg-[#cbcbcb5e] rounded-md`}>
          <ProductsFilter />
          <ProductsList />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Products