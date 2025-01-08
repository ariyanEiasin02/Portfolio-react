import React, { useEffect, useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import cdDownland from '../../assets/Eiasin_FrontEndDeveloper_CV.pdf'
const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    const [activeLink, setActiveLink] = useState('');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };
    return (
        <div className={`bg-[#6B97D4] py-2 ${scroll ? "z-[10] fixed top-0 left-0 w-full" : ""}`}>
            <div className="max-w-container mx-auto">
                <nav className="flex justify-between items-center md:px-0 px-4 py-4">
                    <div className="">
                        <h2 className="italic font-semibold font-barlow text-2xl  text-[#ffffff] tracking-widest">AriyanEiasin</h2>
                    </div>
                    <div className="">
                        <div onClick={handleMenu} className="md:hidden block">
                            {
                                menu ? <i className={`text-3xl ${scroll ? "text-[#fff]" : "text-white"}`}><IoMdClose /></i> : <i className={`text-3xl ${scroll ? "text-[#fff]" : "text-white"}`}><IoMdMenu /></i>
                            }
                        </div>
                        <div className="">
                            <ul className={`md:flex gap-x-8 px-4 py-10 md:py-0 md:px-0  absolute md:static ${menu ? 'top-[78px] duration-700 w-full left-0  bg-[#6D7CD1] z-[50]' : '-top-96 w-full left-0'}`}>
                                <li className='mt-0 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('home')} className={`${activeLink === 'home' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#banner">Home</a>
                                </li>
                                <li className='mt-3 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('about')} className={`${activeLink === 'about' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#about">About</a>
                                </li>
                                <li className='mt-3 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('portfolio')} className={`${activeLink === 'portfolio' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#Portfolio">Portfolio</a>
                                </li>
                                <li className='mt-3 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('service')} className={`${activeLink === 'service' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#Service">Service</a>
                                </li>
                                <li className='mt-3 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('contact')} className={`${activeLink === 'contact' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#Contact">Contact</a>
                                </li>
                                <li className='mt-3 md:mt-0'>
                                    <a onClick={() => handleSetActiveLink('blog')} className={`${activeLink === 'blog' ? 'text-red-500' : ''} font-semibold font-barlow text-[18px] cursor-pointer hover:text-primary duration-300 text-white`} href="#Blog">Blog</a>
                                </li>
                                <li className='mt-6 md:mt-0'>
                                    <a className='font-semibold text-white font-barlow text-[18px] cursor-pointer hover:bg-lastprimary py-4 rounded-[5px] hover:shadow-btnshadow shadow-btnhovershadow px-8 bg-primary duration-300' href={cdDownland} download>Download CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar




