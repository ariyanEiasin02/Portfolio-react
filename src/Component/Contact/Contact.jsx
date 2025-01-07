import React, { useEffect, useState } from 'react'
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';
const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const templateParams = {
        to_name: 'Your Company',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_hcvgvjd',
            'template_a9hbp68',
            templateParams,
            '0Wja4SLykzDNR7SaY'
        )
            .then(() => {
                toast.success('Message sent successfully!')
            })
            .catch(() => {
                toast.warning('Failed to send message. Please try again.')
            });
    };
    return (
        <div>
            <section id='Contact' className="py-12">
                <div className="max-w-container px-4 md:px-0 mx-auto">
                    <div className="bg-[#0B1C77] rounded-xl py-10 px-8">
                        <div className="md:flex justify-between md:gap-x-16 items-center">
                            <div data-aos="fade-up" className="md:w-2/4">
                                <div className="">
                                    <span className="font-bold font-barlow text-xl text-[#D64745]">Don't be shy</span>
                                    <h3 className="font-semibold mt-2 font-barlow text-4xl  text-[#fff]">Drop Me a Line</h3>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className="w-full mt-[25px] py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="w-full mt-[25px] py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea
                                        className="w-full mt-[25px] h-36 py-3 px-6 rounded-md outline-none font-light font-barlow text-[18px] text-[#9A9AA0]"
                                        id="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="mt-8 font-semibold text-white font-barlow md:text-xl text-base cursor-pointer hover:text-[#000] hover:bg-white py-4 rounded-[5px] hover:shadow-btnshadow shadow-btnbtnshadow md:px-36 px-16 bg-primary duration-300 text-center"
                                    >
                                        Submit Message
                                    </button>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick={false}
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                        transition={Bounce}
                                    />
                                </form>
                            </div>
                            <div data-aos="fade-down" className="md:mt-0 mt-8 md:w-2/4">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                        <i className="text-2xl text-white"><FaLocationPin /></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold font-barlow text-xl text-[#fff]">Address</h4>
                                        <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">Mohammadpur, Dhaka-1207</p>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex items-center">
                                    <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                        <i className="md:text-2xl text-xl text-white"><BiLogoGmail /></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold font-barlow text-xl text-[#fff]">Email</h4>
                                        <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">ariyaneiasin56@gmail.com</p>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex items-center">
                                    <div className="flex items-center justify-center md:w-20 w-16 md:h-20 h-16 rounded-full bg-[#6E7FD1]">
                                        <i className="md:text-2xl text-xl text-white"><FaPhoneAlt /></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold font-barlow text-xl text-[#fff]">Phone</h4>
                                        <p className="font-light font-barlow md:text-xl text-base text-[#9EA2BA] ">+8801704037578</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact