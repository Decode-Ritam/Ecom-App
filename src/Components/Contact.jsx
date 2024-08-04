import React from 'react'
import Header from '../ComponentsTemplate/Header'
import Footer from "../ComponentsTemplate/Footer"
function Contact() {
  return (
    <div className='bg-white dark:bg-black  '>
       <div className="  bg-white dark:bg-black">
        <header className="flex justify-center text-3xl py-4 text-black dark:text-white">Contact Info</header>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426.644384872094!2d88.41444738943416!3d22.892506220740582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f896a1910e4387%3A0xe762ecc698e4c859!2sNaihati%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710429124760!5m2!1sen!2sin"
            width={'100%'}
            height={550}
            style={{ border: '0' }}
            allowFullScreen=" "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='maps'
          ></iframe>

        </div>
        {/* Contact from */}
        <div className="contact py-4 mt-14">
          <div className=" flex flex-col items-center justify-center gap-1 m-auto py-12 max-w-[95vw] md:max-w-[65vw] xl:max-w-[45vw] bg-[#ffffffb8] dark:bg-[#252724] mt-12 rounded-lg ">
            <header className='text-3xl text-black dark:text-white'>Get In Touch</header>
            <p className="text-sm text-black dark:text-white">Fill the form below to get in touch with us.</p>

            {/* Form field section  */}
            <form className="w-[90%] lg:w-[80%] flex flex-col  gap-2 " action="https://formspree.io/f/mqkrzelo" method="POST" >
              <div className="flex flex-col md:flex-row items-center  justify-between gap-8">
                <div className="flex flex-col items-start  gap-1 w-full">
                  <label className="text-black dark:text-white text-[18px] font-semibold" htmlFor="formFirstname">First name</label>
                  <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px]" name="firstname" id="formFirstname" minLength="3" required />
                </div>
                <div className="flex flex-col items-start  gap-1 w-full">
                  <label className="text-black dark:text-white text-[18px] font-semibold" htmlFor="Lastname">Last name</label>
                  <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px]" name="Lastname" id="Lastname" minLength="3" required />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center  justify-between gap-8">
                <div className="flex flex-col items-start  gap-1 w-full">
                  <label htmlFor="formEmali" className="text-black dark:text-white text-[18px] font-semibold" >Email</label>
                  <input placeholder="parama@gmail.com" type="email" name="email" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px]" id="email" required />
                </div>

                <div className="flex flex-col items-start  gap-1 w-full">
                  <label className="text-black dark:text-white text-[18px] font-semibold" htmlFor="telephone">Telephone Number(Optional)</label>
                  <input className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px]" type="telephone" name="telephone" id="telephone" />
                </div>
              </div>
              <div className="flex flex-col items-start  gap-1 w-full">
                <label htmlFor="formChouse" className="text-black dark:text-white text-[18px] font-semibold ">Chouse a topic</label>
                <select className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px]"
                 name="formChouse"
                  id="formChouse"
                  defaultValue="Choose..."
                  required
                >
                  <option disabled >Choose...</option>
                  <option>Simple &amp; General Inquiry.</option>
                  <option>Feedback about the website or personal experience.</option>
                  <option>Technical Suppor or requiring assistance.</option>
                  <option>Collaboration Opportunities or business inquiries.</option>
                  <option>Report bugs or issues facing on the website.</option>
                  <option>implementing features or improvements on the website. </option>
                  <option>Others.</option>
                </select>
              </div>
              <div className="flex flex-col items-start  gap-1 w-full">
                <label htmlFor="formMessage" className="text-black dark:text-white text-[18px] font-semibold ">Write a Message</label>
                <textarea className="w-full h-[120px] px-5 py-4 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[18px] resize-none" placeholder="Type your Message...." name="formMessage" id="formMessage" minLength="20" required></textarea>
              </div>
              <div className="flex items-center justify-center my-4">
                <button type="submit" title="Submit Your Concern!" className="px-28 py-3 rounded-md bg-[#5E3BEE] text-white text-xl">Submit</button>
              </div>

            </form>

          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Contact