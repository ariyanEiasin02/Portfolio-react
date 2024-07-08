import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub,FaYoutube} from "react-icons/fa";
const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section id='banner' className='bg-banner md:py-40 py-24 h-screen'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between md:block hidden">
                        <div data-aos="fade-right" className="md:w-2/4 md:text-left text-center">
                            <h3 className="font-semibold font-barlow text-3xl cursor-pointer text-white mt-2">Hello I'm</h3>
                            <h2 className="font-semibold font-barlow text-6xl cursor-pointer text-white mt-2">Ariyan Eiasin</h2>
                            <h3 className="font-normal font-barlow text-2xl cursor-pointer text-white mt-4">Frontend Developer with React</h3>
                            <p className="font-light font-barlow text-xl cursor-pointer text-white w-[65%] mt-6 mx-auto md:mx-0">Developer specializing in React, passionate about creating intuitive user experiences.</p>
                            <div className="flex justify-center md:justify-start gap-x-2">
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="#">Get a Quote</a>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold font-barlow text-base cursor-pointer text-white py-4 rounded-full px-8 duration-300' href="#about">About Me</a>
                                </div>
                            </div>
                            <div className="mt-16">
                                <ul className="flex gap-x-6">
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl cursor-pointer hover:text-primary text-white" href="https://www.facebook.com/ariyan.abara/" target='_blank'><FaFacebookF /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.instagram.com/ariyan_eiasin/" target='_blank'><FaInstagram /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.linkedin.com/in/ariyan-eiasin-88725b27b/" target='_blank'><FaLinkedinIn /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://github.com/ariyanEiasin02" target='_blank'><FaGithub /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.youtube.com/@ComputerCoding-56ariyan/videos" target='_blank'><FaYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:w-2/4 flex justify-center md:justify-end">
                            <div className="relative bg-bannerpng w-[550px] py-40 bg-cover bg-no-repeat rounded-lg">   
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-between md:hidden block">
                    <div data-aos="fade-right" className="md:w-2/4 flex justify-center md:justify-end">
                            <div className="relative bg-bannerpng w-[250px] py-32 bg-cover bg-no-repeat rounded-lg">
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:w-2/4 md:text-left text-center">
                            <h3 className="font-semibold font-barlow text-xl cursor-pointer text-white mt-4">Hello I'm</h3>
                            <h2 className="font-semibold font-barlow text-3xl cursor-pointer text-white mt-2">Ariyan Eiasin</h2>
                            <h3 className="font-normal font-barlow text-xl cursor-pointer text-white mt-4">Frontend Developer with React</h3>
                            <p className="font-light font-barlow text-base cursor-pointer w-[90%] text-white mt-4 mx-auto md:mx-0">Developer specializing in React, passionate about creating intuitive user experiences.</p>
                            <div className="flex justify-center md:justify-start gap-x-2">
                                <div className="mt-12">
                                    <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="#">Get a Quote</a>
                                </div>
                                <div className="mt-12">
                                    <a className='font-semibold font-barlow text-base cursor-pointer text-white py-4 rounded-full px-8 duration-300' href="#about">About Me</a>
                                </div>
                            </div>
                            <div className="mt-16 px-8 md:px-0 md:text-left text-center">
                                <ul className="flex gap-x-6">
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl cursor-pointer hover:text-primary text-white" href="https://www.facebook.com/ariyan.abara/" target='_blank'><FaFacebookF /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.instagram.com/ariyan_eiasin/" target='_blank'><FaInstagram /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.linkedin.com/in/ariyan-eiasin-88725b27b/" target='_blank'><FaLinkedinIn /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://github.com/ariyanEiasin02" target='_blank'><FaGithub /></a>
                                    </li>
                                    <li>
                                        <a className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white" href="https://www.youtube.com/@ComputerCoding-56ariyan/videos" target='_blank'><FaYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner