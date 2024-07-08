import React, { useEffect } from 'react'
import blogOne from '../../assets/blog1.jpg'
import blogTwo from '../../assets/blog2.jpg'
import blogThree from '../../assets/blog3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Blog = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section id='Blog' className="md:py-20 py-12">
                <div className="max-w-container px-4 md:px-0 mx-auto">
                    <div data-aos="fade-down" className="text-center">
                        <span className="font-semibold font-barlow text-xl text-[#FC7868]">Latest News</span>
                        <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">Checkout My Recent Blogs</h3>
                        <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                    </div>
                    <div className="mt-16">
                        <div className="md:flex justify-between">
                            <div data-aos="fade-right" className="md:w-[30%] cursor-pointer">
                                <div className="overflow-hidden rounded-lg">
                                    <img className="hover:scale-125 ease-in duration-300  h-[240px]" src={blogOne} alt="" />
                                </div>
                                <div className="mt-4">
                                <span className="font-semibold font-barlow text-base text-[#FC7868]">Web Development</span>
                                <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000] hover:text-[#FC7868]">Jim Morisson Says when the musics over turn off the light</h3>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="md:w-[30%]  mt-6 md:mt-0 cursor-pointer">
                                <div className="overflow-hidden rounded-lg">
                                    <img className="hover:scale-125 ease-in duration-300  h-[240px]" src={blogTwo} alt="" />
                                </div>
                                <div className="mt-4">
                                <span className="font-semibold font-barlow text-base text-[#FC7868]">Web Development</span>
                                <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000] hover:text-[#FC7868]">Jim Morisson Says when the musics over turn off the light</h3>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="md:w-[30%] mt-6 md:mt-0 cursor-pointer">
                                <div className="overflow-hidden rounded-lg">
                                    <img className="hover:scale-125 ease-in duration-300 h-[240px]" src={blogThree} alt="" />
                                </div>
                                <div className="mt-4">
                                <span className="font-semibold font-barlow text-base text-[#FC7868]">Web Development</span>
                                <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000] hover:text-[#FC7868]">Jim Morisson Says when the musics over turn off the light</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog