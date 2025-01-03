import React, { useEffect, useState } from 'react'

const BackTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
    
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  },[]);
  return (
    <>
        <div className={`z[9999] ${scroll ? "block z-[9999]" : "hidden"}`}>
          <button onClick={scrollToTop} className="font-barlow text-base font-semibold text-lastprimary right-4 bottom-[138px] fixed [writing-mode:vertical-lr] z-50">To Top</button>

          <div className="progress-container w-[1px] h-16 right-[29px] bottom-16 fixed bg-[#f3f3f3] z-50">
            <div className="progress-bar bg-lastprimary w-full h-0" style={{ height: `${scrollTop}%` }}></div>
          </div>
        </div>
    </>
  )
}

export default BackTop

