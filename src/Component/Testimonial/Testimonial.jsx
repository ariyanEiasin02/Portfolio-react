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
    const testimonials = [
        {
            img: personOne,
            name: "David Parker",
            role: "Designer",
            rating: 4.5,
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit."
        },
        {
            img: personTwo,
            name: "Jessica Adams",
            role: "Developer",
            rating: 5,
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit."
        },
        {
            img: personThree,
            name: "Michael Smith",
            role: "Manager",
            rating: 4.5,
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit."
        }
    ];
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
                        <p className="font-light font-barlow md:text-[18px] text-base text-[#9A9AA0] mt-2">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                    </div>
                    <div className="mt-[30px] w-full bg-white">
                        <div className="w-full">
                            <Slider data-aos="fade-up" {...settings} className="md:w-[70%] mx-auto shadow-2xl py-8 rounded-lg bg-white">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index}>
                                        <div className="flex justify-center">
                                            <span className="md:text-8xl text-6xl text-red-500"><FaQuoteLeft /></span>
                                        </div>
                                        <div className="px-12">
                                            <div className="text-center">
                                                <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2 italic">{testimonial.text}</p>
                                            </div>
                                            <div className="flex gap-x-4 mt-4 justify-center">
                                                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                                                    <i key={i}><IoIosStar className="text-2xl text-[#F0CE11]" /></i>
                                                ))}
                                                {testimonial.rating % 1 !== 0 && <i><IoIosStarHalf className="text-2xl text-[#F0CE11]" /></i>}
                                            </div>
                                            <div className="mt-[20px] flex justify-center items-center">
                                                <div>
                                                    <img className="w-14 h-14 rounded-full" src={testimonial.img} alt={testimonial.name} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="font-semibold font-barlow text-xl text-[#000000]">{testimonial.name}</h3>
                                                    <p className="font-light font-barlow text-base text-[#9A9AA0]">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial