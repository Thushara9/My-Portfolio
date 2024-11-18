import React from 'react';
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="relative py-5  w-[1200px] m-auto MyGradient overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#171d32] to-transparent z-10 pointer-events-none" />
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#171d32] to-transparent z-10 pointer-events-none" />

      <Marquee autoFill speed={50} pauseOnHover>
        <div className="flex items-center space-x-12 overflow-hidden">
          <img src="https://img.icons8.com/?size=96&id=20909&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=21278&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=108784&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=123603&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=SDVmtZ6VBGXt&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=zfHRZ6i1Wg0U&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=20906&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
          <img src="https://img.icons8.com/?size=96&id=cdYUlRaag9G9&format=png" alt="" className="w-[110px] transition-transform transform hover:scale-110" />
        </div>
      </Marquee>
    </div>
  );
}

export default LogoMarquee;
