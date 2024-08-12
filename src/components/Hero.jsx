import React from 'react';
import { MdOutlinePlayCircleOutline } from "react-icons/md";


const Hero = () => {
  return (
    <>
      <div className="w-full border-t h-auto min-h-[105vh] bg-[#37517E]">
      <div className="md:w-[80%] w-[90%] mx-auto h-full grid md:mt-10 mt-20 grid-r grid-cols-12 gap-y-3 items-center ">
        <div className="md:col-span-6 col-span-12 md:order-1 order-2">
            <h1 className='text-white font-bold sm:text-5xl text-3xl'>Better Solutions for Your Business</h1>
            <h1 className='text-gray-300 font-semibold mt-1 text-xl md:text-2xl'>We are team of talented designers making websites with Bootstrap</h1>
            <div className="btns flex gap-3 mt-7">
                <button className='bg-[#47B2E4] px-8 text-white font-semibold rounded-full py-2'>Get Started</button>
                <div className="flex items-center gap-2 text-white">
                <MdOutlinePlayCircleOutline size={30} />
                <button>Watch Video</button>
                </div>
            </div>
        </div>
        <div className="md:col-span-6 col-span-12 md:order-2 order-1 ">
            <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
