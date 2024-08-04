import React from 'react'
import Header from '../ComponentsTemplate/Header'
import SideNavbar from '../ComponentsTemplate/SideNavbar'
import ServiceSection from '../ComponentsTemplate/ServiceSection'
import Footer from '../ComponentsTemplate/Footer'
import SaportedBrand from '../ComponentsTemplate/SaportedBrand'
import CustomerReview from '../ComponentsTemplate/CustomerReview'
import SlideshowCarousel from '../ComponentsTemplate/SlideshowCarousel'
import FeatureServices from '../ComponentsTemplate/FeatureServices'
 
function Home() {
  return (

    <div className='bg-white dark:bg-black '>
        <SideNavbar />
      <SlideshowCarousel />

      {/* This is  FeatureServices offer section */}
      <FeatureServices />

      {/* This is service offer section */}
      <ServiceSection />

      {/* This is  Brand patner section */}
      <SaportedBrand />

      {/* This is  CustomerReview section */}
      <CustomerReview />

      {/* This is service Footer section */}
      <Footer />

    </div>
  )
}

export default Home