import React from 'react'
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div>
            <section className='py-12'>
                <div className="max-w-container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-1 px-4 md:px-0">
                        <div data-aos="fade-right" className="mt-6 md:mt-0">
                            <div className="flex items-center justify-center md:justify-start">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={20} />+</h3>
                                
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Digital<br />Products</span>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="mt-6 md:mt-0">
                            <div className="flex items-center justify-center md:justify-start">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={10} />+</h3>
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Open Source<br />Projects</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-6 md:mt-0">
                            <div className="flex items-center justify-center md:justify-start">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={50} />+</h3>
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Projects<br />Completed</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-6 md:mt-0">
                            <div className="flex items-center justify-center md:justify-start">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={100} />K</h3>
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Lines of<br/>Code</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter