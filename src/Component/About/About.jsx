import React, { useEffect } from 'react'
import aboutOne from '../../assets/2.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section active="about" id='about' className=''>
                <div className="max-w-container mx-auto">
                    <div className="md:flex items-center px-4 md:px-0 justify-between gap-x-6">
                        <div data-aos="zoom-in" className="md:w-2/4 relative">
                            <img className="rounded-xl w-full" src={aboutOne} alt="" />
                        </div>
                        <div data-aos="fade-down" className="md:w-2/4 md:mt-0">
                            <div className="">
                                <span className="font-semibold font-barlow text-xl text-[#FC7868]">I'm a Developer</span>
                                <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl  text-[#000000] w-[80%]">I Develop Application that Help People</h3>
                            </div>
                            <div className="">
                                <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-8">I am a front-end developer skilled in building responsive, optimized websites with HTML, CSS, and JavaScript. I excel in frameworks like React.js, ensuring dynamic and scalable applications.</p>
                                <p className="font-light font-barlow md:text-xl text-base text-[#6F6F78] mt-6">I prioritize both design and performance, collaborating effectively with designers and back-end developers to deliver seamless user experiences. Proficient in version control (Git) and using tools like Webpack, I stay updated with industry trends to provide innovative solutions.</p>
                            </div>
                            <div className="mt-12">
                                <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="#Portfolio">View Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About