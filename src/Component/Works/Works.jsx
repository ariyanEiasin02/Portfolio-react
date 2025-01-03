import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import 'aos/dist/aos.css';
const Works = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "What services do you offer?",
            answer: "I specialize in front-end development using HTML, CSS, JavaScript, React, and modern CSS frameworks like Tailwind and Bootstrap."
        },
        {
            question: "Do you provide responsive designs?",
            answer: "Yes, I ensure all websites and applications are fully responsive and optimized for various screen sizes."
        },
        {
            question: "Can you help with website optimization?",
            answer: "Absolutely! I focus on performance optimization to deliver fast and efficient web solutions."
        },
        {
            question: "How can I contact you?",
            answer: "You can contact me via email or through the contact form available on my portfolio."
        }
    ];
    return (
        <div>
            <section className="py-12">
                <div className="max-w-container md:px-0 px-4 mx-auto">
                    <div className="md:flex justify-between">
                        <div data-aos="fade-up" className="md:w-2/4">
                            <span className="font-semibold font-barlow text-xl text-[#FC7868]">Working to make difference</span>
                            <h3 className="font-semibold mt-3 font-barlow md:text-4xl  text-2xl text-[#000000] w-[80%]">Real Passion to Create Amazing Things</h3>
                            <p className="font-light font-barlow md:text-[18px] text-base text-[#A9ACC6] mt-4 w-[80%]">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
                        </div>
                        <div data-aos="fade-down" className="md:w-2/4 mt-6 md:mt-0">
                            <div className="space-y-6">
                                {faqItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                        className="bg-[#F4F4F9] shadow-md rounded-lg py-4 px-5 cursor-pointer hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-barlow font-semibold text-[20px] text-gray-800">{item.question}</h3>
                                            {index === activeIndex ? (
                                                <FaChevronUp className="text-gray-600" />
                                            ) : (
                                                <FaChevronDown className="text-gray-600" />
                                            )}
                                        </div>
                                        {index === activeIndex && (
                                            <p className="font-openSans text-base font-normal mt-4 text-[#A9ACC6]">{item.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Works