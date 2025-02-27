import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className="py-4 bg-[#343C55]">
            <div className="max-w-container px-4 md:px-0 mx-auto">
                <div className="md:flex justify-between">
                    <div className="">
                        <p  className="font-light font-barlow text-base md:text-[18px] text-white"><a href="">Copyright © 2024 Ariyan Eiasin. All Rights Reserved.</a></p>
                    </div>
                    <div className="flex justify-between mt-4 md:mt-0">
                        <a  className="font-light font-barlow text-base md:text-[18px] text-white mr-4" href="">Terms & Condition</a>
                        <a  className="font-light font-barlow text-base md:text-[18px] text-white ml-4" href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer