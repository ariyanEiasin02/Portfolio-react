import React, { useEffect } from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Works = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div>
            <section className="md:py-20 py-12">
                <div className="max-w-container md:px-0 px-4 mx-auto">
                    <div className="md:flex justify-between">
                        <div data-aos="fade-up" className="md:w-2/4">
                            <span className="font-semibold font-barlow text-xl text-[#FC7868]">Working to make difference</span>
                            <h3 className="font-semibold mt-4 font-barlow md:text-4xl  text-2xl text-[#000000] w-[80%]">Real Passion to Create Amazing Things</h3>
                            <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4 w-[85%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                        </div>
                        <div data-aos="fade-down" className="md:w-2/4 mt-6 md:mt-0">
                            <Accordion>
                                <AccordionItem className="font-semibold font-barlow md:text-3xl text-xl text-[#000000]" header="Work Strategy?" initialEntered>
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4 w-[85%]">Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.</p>
                                </AccordionItem>

                                <AccordionItem className="mt-4 font-semibold font-barlow md:text-3xl text-xl  text-[#000000]" header="The Process of Our Work?">
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4 w-[85%]">Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.</p>
                                </AccordionItem>
                                <AccordionItem className="mt-4 font-semibold font-barlow md:text-3xl text-xl text-[#000000]" header="Core Value of Development?">
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4 w-[85%]">Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.</p>
                                </AccordionItem>
                                <AccordionItem className="mt-4 font-semibold font-barlow md:text-3xl text-xl text-[#000000]" header="Desire to Work Hard?">
                                    <p className="font-light font-barlow md:text-xl text-base text-[#9A9AA0] mt-4 w-[85%]">Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.</p>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Works