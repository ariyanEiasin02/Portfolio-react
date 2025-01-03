import React, { useEffect } from 'react'
import design from '../../assets/design.svg'
import development from '../../assets/development.svg'
import landing from '../../assets/landing.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section className='md:py-20 py-10'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex px-4 md:px-0 justify-between">
                        <div data-aos="fade-right" className="md:w-[30%] mt-6 md:mt-0 group relative p-4">
                            <div className="flex justify-between items-center pb-8">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">01</span>
                                    <h3 className="font-semibold mt-2 font-barlow text-2xl  text-[#000000]">Dedication</h3>
                                </div>
                                <div className="">
                                    <img className="w-16" src={design} alt="" />
                                </div>
                            </div>
                            <div className="w-full relative h-[2px] bg-[#E5E7EB] after:absolute after:content-'' after:top-0 after:left-0 after:bg-[#9A9AA0] after:w-0 group-hover:after:w-full after:h-[2px] after:ease-in transition after:duration-300">
                            </div>
                            <div className="">
                                <p className="font-normal font-barlow md:text-[18px] text-base cursor-pointer text-[#A9ACC6] mt-6">Dedicated Frontend Developer with expertise in React, committed to creating intuitive, efficient, and high-quality user interfaces. Passionate about innovation and problem-solving.</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="md:w-[30%] mt-6 md:mt-0 group relative p-4">
                            <div className="flex justify-between items-center pb-8">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">02</span>
                                    <h3 className="font-semibold mt-2 font-barlow text-2xl  text-[#000000]">Smart Work</h3>
                                </div>
                                <div className="">
                                    <img className="w-16" src={development} alt="" />
                                </div>
                            </div>
                            <div className="w-full relative h-[2px] bg-[#E5E7EB] after:absolute after:content-'' after:top-0 after:left-0 after:bg-[#9A9AA0] after:w-0 group-hover:after:w-full after:h-[2px] after:ease-in transition after:duration-300">
                            </div>
                            <div className="">
                                <p className="font-normal font-barlow md:text-[18px] text-base cursor-pointer text-[#A9ACC6] mt-6">Frontend Developer specializing in React, dedicated to smart, efficient coding. Passionate about innovation, problem-solving, and creating seamless user experiences.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:w-[30%] mt-6 md:mt-0 group relative p-4">
                            <div className="flex justify-between items-center pb-8">
                                <div className="">
                                    <span className="font-semibold font-barlow text-xl text-[#FC7868]">03</span>
                                    <h3 className="font-semibold mt-2 font-barlow text-2xl  text-[#000000]">Intelligence</h3>
                                </div>
                                <div className="">
                                    <img className="w-16" src={landing} alt="" />
                                </div>
                            </div>
                            <div className="w-full relative h-[2px] bg-[#E5E7EB] after:absolute after:content-'' after:top-0 after:left-0 after:bg-[#9A9AA0] after:w-0 group-hover:after:w-full after:h-[2px] after:ease-in transition after:duration-300">
                            </div>
                            <div className="">
                                <p className="font-light font-barlow md:text-[18px] text-base cursor-pointer text-[#A9ACC6] mt-6">Intelligent Frontend Developer specializing in React, crafting efficient, innovative solutions for seamless user experiences. Passionate about smart, effective design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features