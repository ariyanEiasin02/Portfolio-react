import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    const skillsItems = [
        {
            'title' : 'HTML5',
            'description':'Proficient in creating semantic and well-structured HTML layouts for responsive web design.'
        },
        {
            'title' : 'CSS3',
            'description':'Expert in styling web pages with CSS3, implementing layouts, animations, and transitions.'
        },
        {
            'title' : 'JavaScript ES6+',
            'description':'Skilled in modern JavaScript features such as async/await, destructuring, and ES6 modules for clean and efficient code.'
        },
        {
            'title' : 'Tailwind CSS',
            'description':'Proficient in using Tailwind CSS for building responsive and modern designs with utility-first classes.'
        },
        {
            'title' : 'Bootstrap',
            'description':'Experience in using Bootstrap to quickly prototype responsive web designs with pre-built components.'
        },
        {
            'title' : 'React.js',
            'description':'Specialized in building dynamic and interactive single-page applications (SPAs) with React.js.'
        },
        {
            'title' : 'Next.js',
            'description':'Specialized in building dynamic and interactive single-page applications (SPAs) with Next.js.'
        },
        {
            'title' : 'Redux',
            'description':'Experience in managing global state and ensuring scalable, predictable app behavior with Redux.'
        },
        {
            'title' : 'Firebase',
            'description':'Proficient in using Firebase for real-time databases, authentication, hosting, and cloud functions to build scalable and secure web applications.'
        },
        {
            'title' : 'Responsive Design',
            'description':'Proficient in creating fully responsive websites that provide an optimal viewing experience across various devices.'
        },
        {
            'title' : 'Cross Browser Compatibility',
            'description':'Ensuring that web applications function properly across all major browsers, offering a consistent user experience.'
        },
        {
            'title' : 'Git & GitHub',
            'description':'Skilled in version control using Git and GitHub, enabling collaboration and versioning in development projects.'
        },
        {
            'title' : 'Problem Solving & Debugging',
            'description':'Excellent at problem-solving and debugging code, ensuring robust and efficient web application performance.'
        },
    ]
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="max-w-container md:px-0 px-4 mx-auto">
                    <div data-aos="fade-down" className="text-center">
                        <span className="font-semibold font-barlow text-xl text-[#FC7868]">My Skills</span>
                        <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">Technologies I Work With</h3>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            skillsItems.map((skilItem)=>(
                                <div className="bg-[#f4f4f9] shadow-lg rounded-lg py-6 px-4 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer">
                            <h4 className="font-barlow font-semibold text-2xl text-[#333]">{skilItem.title}</h4>
                            <p className="font-openSans font-normal text-base text-[#A9ACC6] mt-4">{skilItem.description}</p>
                        </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills