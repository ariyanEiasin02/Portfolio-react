import React, { useEffect } from 'react'
import { FaLocationPin} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  return (
    <div>
        <section id='Contact' className="py-12">
            <div className="max-w-container px-4 md:px-0 mx-auto">
                <div className="bg-[#0B1C77] rounded-xl py-10 px-8">
                    <div className="md:flex justify-between md:gap-x-16 items-center">
                        <div data-aos="fade-up" className="md:w-2/4">
                            <div className="">
                            <span className="font-bold font-barlow text-xl text-[#D64745]">Don't be shy</span>
							<h3 className="font-semibold mt-2 font-barlow text-4xl  text-[#fff]">Drop Me a Line</h3>
                            </div>
                            <div className="">
                            <input className="w-full mt-[25px] py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]" id="name" type="text" placeholder="Name"/>
                            <input className="w-full mt-[25px] py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]" id="name" type="text" placeholder="Email"/>
                            <textarea className="w-full mt-[25px] h-36 py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]" id="message" placeholder="Message"></textarea>
                            <div className="mt-8 font-semibold text-white font-barlow text-xl cursor-pointer hover:text-[#000] hover:bg-white py-4 rounded-[5px] hover:shadow-btnshadow shadow-btnbtnshadow md:px-36 bg-primary duration-300  text-center">
                                    <a className='' href="#">Submit Message</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="md:mt-0 mt-8 md:w-2/4">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                    <i className="text-2xl text-white"><FaLocationPin /></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold font-barlow text-xl text-[#fff]">Address</h4>
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">Mohammadpur, Dhaka-1207</p>
                                </div>
                            </div>
                            <div className="mt-[30px] flex items-center">
                                <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                    <i className="md:text-2xl text-xl text-white"><BiLogoGmail  /></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold font-barlow text-xl text-[#fff]">Email</h4>
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">ariyaneiasin56@gmail.com</p>
                                </div>
                            </div>
                            <div className="mt-[30px] flex items-center">
                                <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                    <i className="md:text-2xl text-xl text-white"><FaPhoneAlt  /></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold font-barlow text-xl text-[#fff]">Phone</h4>
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">+8801704037578</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact