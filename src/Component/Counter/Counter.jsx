import React from 'react'
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div>
            <section className='md:py-20 py-12'>
                <div className="max-w-container mx-auto">
                    <div className="flex px-4 md:px-0 flex-wrap justify-between">
                        <div data-aos="fade-right" className="mt-6 md:mt-0">
                            <div className="flex items-center">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={120} />+</h3>
                                
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Digital<br />Products</span>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="mt-6 md:mt-0">
                            <div className="flex items-center">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={30} />+</h3>
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Open Source<br />Projects</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-6 md:mt-0">
                            <div className="flex items-center">
                                <h3 className="font-semibold font-barlow text-6xl  text-[#F05C6E]"><CountUp end={10} />M</h3>
                                <span className="font-semibold ml-4 font-barlow text-2xl text-[#000]">Lines of<br />Code</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter