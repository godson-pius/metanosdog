import React from 'react'
import nivea from '../assets/images/nivea.png'
import fashion from '../assets/images/fashion.jpg'
import Slider from '../assets/images/Slider.png'

const Hero = () => {
  return (
    <>
        <div className="w-full py-5">
            <div className="flex w-full justify-between items-start">
                <div className="slider w-[150%] bg-orange-400 h-[26rem] md:h-100 border-solid border-4 border-white-500">
                  <img src={Slider} className='object-fill h-full w-full'></img>
                </div>

                <div className="second w-full hidden md:flex flex-col items-center">
                    <div className="w-full h-[13rem] py-30 pl-10 border-solid border-4 md:border-l-0 md:border-b-0 border-white-500 relative">
                        <img src={nivea} alt='' className='h-full w-full object-fill absolute mix-blend-normal left-[0%]'></img>
                        <div>
                          <h1 className='mt-28 text-xl font-bold text-black relative'>On Sale</h1>
                          <button className='bg-orange-400 p-2 text-white text-sm rounded hover:bg-orange-500 duration-300 relative'>Shop Now</button>
                        </div>
                    </div>
                    <div className="w-full h-[13rem] py-30 pl-10 border-solid border-4 md:border-l-0 md:border-t-4 border-white-500 relative">
                        <img src={fashion} alt='' className='h-full w-full object-fill absolute mix-blend-normal left-[0%]'></img>
                        <div>
                        <h1 className='mt-28 text-xl font-bold text-black relative'>On Sale</h1>
                        <button className='bg-orange-400 p-2 text-white text-sm rounded hover:bg-orange-500 duration-300 relative'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero