import React, { useEffect } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section className="md:py-20 py-12">
                <div className="max-w-container md:px-0 px-4 mx-auto">
                    <div data-aos="fade-down" className="text-center">
                        <span className="font-semibold font-barlow text-xl text-[#FC7868]">My Skills</span>
                        <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">I Develop Skills Regularly</h3>
                        <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-2">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                    </div>
                    <div className="md:flex flex-wrap justify-between gap-x-16 mt-[20px]">
                        <div data-aos="fade-down" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl text-[#000000]">Proficient in HTML5, CSS3, and
                            JavaScript ES6+</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={85} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-down" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">CSS frameworks: Tailwind CSS,
                            Bootstrap</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={95} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-right" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">Front-end Frameworks: React.js</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={82} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">Backend as a Service (BaaS):
                            Firebase</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={68} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">State management: Redux</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={73} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-right" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">Responsive Design and Croos
                            Browser Compatibility</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={92} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">Version Control: Git, GitHub</h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={78} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className="md:w-[45%] mt-[20px]">
                            <h3 className="font-semibold mt-2 font-barlow text-xl  text-[#000000]">Problem solving and debugging                   </h3>
                            <div className="mt-3">
                                <ProgressBar height="15px" bgColor="#142EB5" className=" rounded-xl" animateOnRender="true" completed={75} baseBgColor="#DEE1E6" labelSize="14px" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills