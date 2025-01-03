import React, { useEffect } from 'react';
import aboutOne from '../../assets/eiasin.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <section id="about" className="py-16 bg-[#EEEFFB]">
            <div className="max-w-container mx-auto px-4 md:px-0">
                <div className="md:flex justify-between items-center space-y-8 md:space-y-0">
                    <div
                        data-aos="fade-left"
                        className="md:w-[48%] relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                            src={aboutOne}
                            alt="Ariyan Eiasin"
                        />
                    </div>
                    <div
                        data-aos="fade-right"
                        className="md:w-[48%]"
                    >
                        <span className="font-semibold text-xl text-[#FC7868] pb-3">I'm a Developer</span>
                        <h3 className="font-semibold text-2xl md:text-3xl text-[#333] pb-3">
                            I Develop Applications That Help People
                        </h3>
                        <p className="font-openSans font-normal text-base md:text-[18px] text-[#A9ACC6] pb-3">
                            I am a frontend developer skilled in building responsive, optimized websites with HTML, CSS, and JavaScript. I excel in frameworks like React.js, ensuring dynamic and scalable applications.
                        </p>
                        <p className="font-openSans font-normal text-base md:text-[18px] text-[#A9ACC6]">
                            I prioritize both design and performance, collaborating effectively with designers and back-end developers to deliver seamless user experiences. Proficient in version control (Git) and using tools like Webpack, I stay updated with industry trends to provide innovative solutions.
                        </p>

                        <div className="mt-8">
                            <a className='font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300' href="#Portfolio">View Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
