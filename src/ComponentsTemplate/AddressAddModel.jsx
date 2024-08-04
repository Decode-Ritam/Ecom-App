import React, { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa6';

function AddressAddModel() {
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }

        };
        if (isModalOpen) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isModalOpen]);

    const closeModal = () => {
        setIsModalOpen(false);

    };
    const openModal = () => {
        setIsModalOpen(true);
        // Scroll to the middle of the page
        window.scrollTo(0, window.innerHeight / 2);
    };


 
    return (
        <div>
            <div onClick={openModal} className="flex flex-row items-center justify-center gap-2 my-2 cursor-pointer hover:bg-slate-200 px-5 py-2 rounded-md">
                <span className=''><FaPlus /></span>
                <span className="">Add new Address</span>
            </div>

            {isModalOpen && (
                <div className=" modal-overlay flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[#84848480] z-50">

                    <div className="relative modal w-[90vw]  h-[95%] md:w-[60vw] md:h-[100vh] lg:w-[35vw] lg:h-[95vh] bg-white dark:bg-[#1a1a1a] overflow-y-auto p-4   rounded-md">
                        <span className="close absolute top-3 right-4  px-3 py-1 text-xl hover:bg-gray-400 rounded-full cursor-pointer text-black dark:text-white" onClick={closeModal}>X</span>
                        <h2 className='flex items-center  justify-center my-2 text-black dark:text-white font-semibold text-xl'>Add a new address:</h2>

                        <form className="flex flex-col  gap-1 w-[100%]  px-2 md:px-8"  action="#" method="POST">
                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formCountryname">Country/Region</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="countryname" id="formCountryname" minLength="3" required />

                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formFullname">Full Name</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="fullname" id="formFullname" minLength="3" required />

                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formPhoneNumber">Mobile Number</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="phonenumber" id="formPhoneNumber" minLength="3" required />

                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formPinCode">Pin Code</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="pincode" id="formPinCode" minLength="3" required />

                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formHousename">Flat,House No, Building,Company,Apartment</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="housename" id="formHousename" minLength="3" required />

                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formVillagename">Area,village,Street</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="villagename" id="formVillagename" minLength="3" required />
                            <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formLandmark">Landmark</label>
                            <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="landmark" id="formLandmark" minLength="3" required />

                            <div className="flex flex-row  gap-5 w-[100%]">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="formCity">Town/City</label>
                                    <input type="text" className="w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF] font-semibold text-black text-[16px]" autoComplete='off' name="city" id="formCity" minLength="3" required />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="text-black dark:text-white text-[16px] font-semibold" htmlFor="selectstate">State</label>
                                    <select className=" w-full p-1 rounded border-[2px] border-[#5E3BEE] bg-[#FFF]   text-black text-[16px]" id="selectstate"
                                      
                                      
                                        required
                                    >
                                        <option value=''>Choose a State</option>
                                        <option value="Andhra Pradesh(Amaravati)">Andhra Pradesh (Amaravati)</option>
                                        <option value="Arunachal Pradesh(Itanagar)">Arunachal Pradesh (Itanagar)</option>
                                        <option value="Assam(Dispur)">Assam (Dispur)</option>
                                        <option value="Bihar(Patnaa)">Bihar (Patnaa)</option>
                                        <option value="Chhattisgarh(Raipur)">Chhattisgarh (Raipur)</option>
                                        <option value="Goa(Panaji)">Goa (Panaji)</option>
                                        <option value="Gujarat(Gandhinagar)">Gujarat (Gandhinagar)</option>
                                        <option value="Haryana(Chandigarh)">Haryana (Chandigarh)</option>
                                        <option value="Himachal Pradesh(Shimla)">Himachal Pradesh (Shimla)</option>
                                        <option value="Jharkhand(Ranchi)">Jharkhand (Ranchi)</option>
                                        <option value="Karnataka(Bengaluru)">Karnataka( Bengaluru)</option>
                                        <option value="Kerala(Thiruvananthapuram)">Kerala (Thiruvananthapuram)</option>
                                        <option value="Madhya Pradesh(Bhopal)">Madhya Pradesh (Bhopal)</option>
                                        <option value="Maharashtra(Mumbai)">Maharashtra (Mumbai)</option>
                                        <option value="Manipur(Imphal)">Manipur (Imphal)</option>
                                        <option value="Meghalaya(Shillong)">Meghalaya (Shillong)</option>
                                        <option value="Mizoram(Aizawl)">Mizoram (Aizawl)</option>
                                        <option value="Nagaland(Kohima)">Nagaland (Kohima)</option>
                                        <option value="Odisha(Bhubaneswar)">Odisha (Bhubaneswar)</option>
                                        <option value="Punjab(Chandigarh)">Punjab (Chandigarh)</option>
                                        <option value="Rajasthan(Jaipur)">Rajasthan (Jaipur)</option>
                                        <option value="Sikkim(Gangtok)">Sikkim (Gangtok)</option>
                                        <option value="Tamil Nadu(Chennai)">Tamil Nadu (Chennai)</option>
                                        <option value="Telangana(Hyderabad)">Telangana (Hyderabad)</option>
                                        <option value="Tripura(Agartala)">Tripura (Agartala)</option>
                                        <option value="Uttar Pradesh(Lucknow)">Uttar Pradesh (Lucknow)</option>
                                        <option value="Uttarakhand(Dehradun)">Uttarakhand (Dehradun)</option>
                                        <option value="West Bengal(Kolkata)">West Bengal (Kolkata)</option>

                                    </select>
                                </div>
                            </div>
                            <button type="submit" title="Add"
                                className=" m-auto w-[30%] py-1 my-4 rounded-md bg-[#5E3BEE] hover:bg-[#886cf8]  text-white text-[16px]">
                                Add
                            </button>
                        </form>





                    </div>
                </div>
            )}

        </div >
    )
}

export default AddressAddModel