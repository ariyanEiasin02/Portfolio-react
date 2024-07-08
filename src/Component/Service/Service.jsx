import React, { useEffect, useState } from 'react'
import read from '../../assets/5.jpg'
import cpu from '../../assets/cpu.svg'
import phone from '../../assets/phone.svg'
import web from '../../assets/web.svg'
import star from '../../assets/star.svg'
import { IoClose } from "react-icons/io5";
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    const [webshow,setWebshow] = useState(false)
    const handleWeb = () =>{
        setWebshow(!webshow)
    }
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section id='Service' className="py-20">
                <div className="max-w-container md:px-0 px-4 mx-auto">
                    <div className="md:flex flex-wrap">
                        <div data-aos="fade-down" onClick={handleWeb} className="md:w-2/4 hover:bg-[#FB503B] md:rounded-tl-xl rounded-t-lg md:rounded-t-none bg-[#6E7FD1] py-16 px-8 duration-300">
                            <img className="w-20" src={cpu} alt="" />
                            <h3 className="mt-6 font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#FFFBFA]">Desktop Application</h3>
                            <p className="font-light font-barlow md:text-xl text-base text-[#FFFBFA] md:mt-6 mt-4 md:leading-10 w-[85%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.</p>
                            <a class="devman_tm_full_link" href="#"></a>
                        </div>
                        <div data-aos="fade-left" onClick={handleWeb} className="md:w-2/4 hover:bg-[#FB503B] md:rounded-tr-xl bg-[#343C55] py-20 px-8 duration-300">
                            <img className="w-16" src={phone} alt="" />
                            <h3 className="mt-6 font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#FFFBFA]">Mobile Application</h3>
                            <p className="font-light font-barlow  md:text-xl text-base text-[#FFFBFA] md:mt-6 mt-4 md:leading-10 w-[85%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.</p>
                            <a class="devman_tm_full_link" href="#"></a>
                        </div>
                        <div data-aos="fade-right" onClick={handleWeb} className="md:w-2/4 hover:bg-[#FB503B] md:rounded-bl-xl bg-[#142EB5] py-20 px-8 duration-300">
                            <img className="w-16" src={web} alt="" />
                            <h3 className="mt-6 font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#FFFBFA]">Website Development</h3>
                            <p className="font-light font-barlow  md:text-xl text-base text-[#FFFBFA] md:mt-6 mt-4 md:leading-10 w-[85%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.</p>
                            <a class="devman_tm_full_link" href="#"></a>
                        </div>
                        <div data-aos="fade-up" onClick={handleWeb} className="md:w-2/4 hover:bg-[#FB503B] md:rounded-br-xl rounded-b-lg md:rounded-b-none bg-[#6B97D3] py-20 px-8 duration-300">
                            <img className="w-16" src={star} alt="" />
                            <h3 className="mt-6 font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#FFFBFA]">Game Development</h3>
                            <p className="font-light font-barlow  md:text-xl text-base text-[#FFFBFA] md:mt-6 mt-4 md:leading-10 w-[85%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.</p>
                            <a class="devman_tm_full_link" href="#"></a>
                        </div>
                    </div>
                </div>
               <div className={`bg-whitergba fixed top-0 left-0 z-[20] py-6 ${webshow ? "block" : "hidden"} w-full `}>
               <div className="max-w-container mx-auto">
                <div className="w-[80%] relative rounded-xl px-8 mx-auto bg-white py-16">
                    <div onClick={handleWeb} className="flex justify-center items-center absolute md:w-12 w-8 md:h-12 h-8 rounded-md border-2 border-white top-0 md:-right-16 -right-[34px]"><i><IoClose className="text-white text-xl" /></i></div>
               <SimpleBarReact style={{ maxHeight: 800 }}>
                        <img className="w-full rounded-xl" src={read} alt="" />
                        <div class="descriptions">
                            <h3 className="mt-6 font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000]">Desktop Application</h3>
                            <p className="font-light font-barlow md:text-xl text-base text-[#000] mt-6 leading-8">Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                            <p className="font-light font-barlow md:text-xl text-base text-[#000] mt-6 leading-8 mt-[20px]">In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
                            <p className="font-light font-barlow md:text-xl text-base text-[#000] mt-6 leading-8">That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                            <p className="font-light font-barlow md:text-xl text-base text-[#000] mt-6 leading-8">That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                        </div>
                    </SimpleBarReact>
                    </div>
                </div>
               </div>
            </section>
        </div>
    )
}

export default Service