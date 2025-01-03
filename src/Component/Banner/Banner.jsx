import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import aboutBanner from '../../assets/about-1.png';

const Banner = () => {
    const typedElement = useRef(null); 
    useEffect(() => {
      AOS.init({
        duration: 1200,
      });
  
      const typed = new Typed(typedElement.current, {
        strings: [
          "Frontend Developer",
          "React Enthusiast",
          "UI/UX Designer",
          "Passionate Coder",
          "Interactive Web Applications",
          "Building Scalable React Solutions",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
 
  return (
    <div>
      <section id="banner" className="bg-banner md:py-36 py-20">
        <div className="max-w-container mx-auto">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center px-4 md:px-0">
            <div data-aos="fade-right" className="md:w-2/4 mt-6 md:mt-0">
              <h3 className="font-semibold font-barlow text-xl md:text-2xl cursor-pointer text-primary pb-2">Hello I'm</h3>
              <h2 className="font-semibold font-barlow text-3xl md:text-5xl cursor-pointer text-white pb-2">Ariyan Eiasin</h2>
              <h3 className="font-normal font-barlow text-xl md:text-2xl cursor-pointer text-white pb-3"><span ref={typedElement}></span></h3>
              <p className="font-light font-barlow text-base md:text-xl cursor-pointer text-white w-full">
              Passionate Frontend Developer focused on delivering interactive, user-friendly, and responsive web applications with React.
              </p>
              <div className="mt-5">
                <ul className="flex gap-x-6">
                  <li>
                    <a
                      className="font-semibold font-barlow text-2xl cursor-pointer hover:text-primary text-white"
                      href="https://www.facebook.com/ariyan.abara/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white"
                      href="https://www.instagram.com/ariyan_eiasin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white"
                      href="https://www.linkedin.com/in/ariyan-eiasin-88725b27b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white"
                      href="https://github.com/ariyanEiasin02"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-semibold font-barlow text-2xl hover:text-primary cursor-pointer text-white"
                      href="https://www.youtube.com/@ComputerCoding-56ariyan/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex  gap-x-2">
                <div className="mt-12">
                  <a
                    className="font-semibold text-white font-barlow text-base cursor-pointer hover:bg-primary py-4 rounded-[5px] hover:shadow-btnhovershadow shadow-btnshadow px-8 bg-lastprimary duration-300"
                    href="#"
                  >
                    Get a Quote
                  </a>
                </div>
                <div className="mt-12">
                  <a
                    className="font-semibold font-barlow text-base cursor-pointer text-white py-4 rounded-full px-8 duration-300"
                    href="#about"
                  >
                    About Me
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="md:w-2/4 flex justify-center md:justify-end md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 w-full h-full rounded-full animate-spin-slow border-8 border-primary border-t-transparent"></div>
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden relative z-10">
                  <img src={aboutBanner} alt="Ariyan Eiasin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
