import React, { useEffect } from 'react'
import project from '../../assets/project-1.jpg'
import projectTwo from '../../assets/project-3.jpg'
import projectThree from '../../assets/project-4.jpg'
import projectThre from '../../assets/project5.png'
import { FaArrowRight,FaArrowLeft} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section active="portfolio" id='Portfolio' className="md:py-20 py-12">
                <div className="max-w-container px-4 md:px-0 mx-auto">
                    <div data-aos="fade-down" className="text-center">
                        <span className="font-semibold font-barlow text-xl text-[#FC7868]">Portfolio</span>
                        <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">My Amazing Works</h3>
                        <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                    </div>
                    <div className="md:block hidden">
                    <div className="mt-16">
                        <div className="flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={project} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="w-[49%]">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow text-4xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow text-xl text-[#9A9AA0] mt-4">The Petroil Project is a responsive web application developed using React.js, HTML, Tailwind CSS, and JavaScript. specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://petroil-react.netlify.app/" target='_blank'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="fade-right" className="w-[49%]">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow text-4xl  text-[#000000]">Chatting Application Project</h3>
                                    <p  className="font-light font-barlow text-xl text-[#9A9AA0] mt-4">Designed and built the user interface using React and HTML, styled with Tailwind CSS to ensure a responsive and modern look. Managed application state efficiently with Redux, providing a seamless user experience.</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://chatvai.netlify.app" target='_blank'>View Project</a>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="w-[48%] relative group hover:shadow-imglastshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectThre} alt="" />
                                </div>
                                <div className="absolute top-[20px] right-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowLeft  /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectTwo} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="w-[49%]">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow text-4xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow text-xl text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://quriarbox-react.netlify.app/" target='_blank'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="fade-right" className="w-[49%]">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow text-4xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow text-xl text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://prolab-react.netlify.app/" target='_blank'>View Project</a>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="w-[48%] relative group hover:shadow-imglastshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectThree} alt="" />
                                </div>
                                <div className="absolute top-[20px] right-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowLeft /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="md:hidden block">
                    <div className="mt-16">
                        <div className="md:flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="md:w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={project} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div className="md:w-[49%]">
                                <div className="mt-6">
                                    <span className="font-semibold font-barlow md:text-xl text-base text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow md:text-4xl text-2xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://petroil-react.netlify.app/" target='_blank'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="md:flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="md:w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectThre} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div className="md:w-[49%]">
                                <div className="mt-6">
                                    <span className="font-semibold font-barlow md:text-xl text-base text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow md:text-4xl text-2xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://chatvai.netlify.app/login" target='_blank'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="md:flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="md:w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectTwo} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div className="md:w-[49%]">
                                <div className="mt-6">
                                    <span className="font-semibold font-barlow md:text-xl text-base text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow md:text-4xl text-2xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://quriarbox-react.netlify.app/" target='_blank'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="md:flex justify-center items-center justify-between gap-x-6">
                            <div data-aos="zoom-in" className="md:w-[48%] relative group hover:shadow-imgshadow hover:rounded-lg">
                                <div className="">
                                    <img className="rounded-lg border" src={projectThree} alt="" />
                                </div>
                                <div className="absolute top-[20px] left-[20px] h-12  w-0 group-hover:w-12 duration-300 bg-white text-center rounded flex justify-center items-center opacity-0 group-hover:opacity-[100%]">
                                    <span className="text-[#A4A6A7] text-base"><FaArrowRight /></span>
                                </div>
                            </div>
                            <div className="md:w-[49%]">
                                <div className="mt-6">
                                    <span className="font-semibold font-barlow md:text-xl text-base text-[#FC7868]">WEB DESIGN</span>
                                    <h3 className="font-semibold mt-4 font-barlow md:text-4xl text-2xl  text-[#000000]">Website Design for Marketing Agency Startup</h3>
                                    <p  className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="https://prolab-react.netlify.app/" target='_blank'>View Project</a>
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

export default Portfolio