import React, { useEffect } from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import personOne from '../../assets/11.jpg'
import personTwo from '../../assets/12.jpg'
import personThree from '../../assets/13.jpg'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div>
            <section className="py-12">
                <div className="max-w-container px-4 md:px-0 mx-auto">
                    <div data-aos="fade-down" className="text-center">
                        <span className="font-semibold font-barlow text-xl text-[#FC7868]">Testimonial</span>
                        <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">What Clients Say</h3>
                        <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                    </div>
                    <div className="md:mt-[40px] mt-[20px] w-full bg-white">
                        <div className="w-full">
                            <Slider data-aos="fade-up" {...settings} className="md:w-[70%] mx-auto shadow-2xl md:py-12 py-8 rounded-xl bg-white">
                                <div>
                                    <div className="flex justify-center">
                                        <span className="md:text-8xl text-6xl text-red-500"><FaQuoteLeft /></span>
                                    </div>
                                    <div className="px-12">
                                        <div className=" text-center">
                                            <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2 italic ">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="flex gap-x-4 mt-4 justify-center">
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStarHalf className="text-2xl text-[#F0CE11]" /></i>
                                        </div>
                                        <div className="mt-[20px] flex justify-center items-center">
                                            <div className="">
                                                <img className="w-14 h-14 rounded-full" src={personOne} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-semibold font-barlow text-xl  text-[#000000]">David Parker</h3>
                                                <p className="font-light font-barlow text-base text-[#9A9AA0]">Designer</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <span className="md:text-8xl text-6xl text-red-500"><FaQuoteLeft /></span>
                                    </div>
                                    <div className="px-12">
                                        <div className=" text-center">
                                            <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2 italic ">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="flex gap-x-4 mt-4 justify-center">
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStarHalf className="text-2xl text-[#F0CE11]" /></i>
                                        </div>
                                        <div className="mt-[20px] flex justify-center items-center">
                                            <div className="">
                                                <img className="w-14 h-14 rounded-full" src={personTwo} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-semibold font-barlow text-xl  text-[#000000]">David Parker</h3>
                                                <p className="font-light font-barlow text-base text-[#9A9AA0]">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <span className="md:text-8xl text-6xl text-red-500"><FaQuoteLeft /></span>
                                    </div>
                                    <div className="px-12">
                                        <div className=" text-center">
                                            <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2 italic ">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="flex gap-x-4 mt-4 justify-center">
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                            <i><IoIosStarHalf className="text-2xl text-[#F0CE11]" /></i>
                                        </div>
                                        <div className="mt-[20px] flex justify-center items-center">
                                            <div className="">
                                                <img className="w-14 h-14 rounded-full" src={personThree} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-semibold font-barlow text-xl  text-[#000000]">David Parker</h3>
                                                <p className="font-light font-barlow text-base text-[#9A9AA0]">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial