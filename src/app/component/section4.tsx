import React from 'react'
import Image from 'next/image';
import Container from "../../../public/Image Block.png";
import LastImage from "../../../public/half-image.jpg";

const Section4 = () => {
  return (
    <>
    <div className='bg-white flex justify-center flex-wrap gap-14 py-14'>
        <div className='px-16 pt-6 pb-8' style={{ backgroundColor: '#2A254B' }}>
<h1 className='text-white text-2xl font-semibold px-6 pt-16'>It started with a small idea</h1>
<p className='text-white px-6 pt-6 pb-28'>A global brand with local beginnings, our story begain in a<br/>
 small studio in South London in early 2014</p>

 <button className=' bg-[#F9F9F926] text-white ml-10  px-10  w-[200px] h-[60px] '>View Collection</button>

        </div>
        <div>
            <Image src={Container} alt='Sofa-image'/>
        </div>
      
    </div>


    <div className=''>
<Image src={LastImage} alt='Lastimage' className="pb-10 h-[40vh] bg-cover bg-center relative md:h-[70vh]"/>
<h1 className='text-white  flex  justify-center items-center text-3xl font-semibold -mt-[350px] relative'>Join the club and get the benefits</h1>
<p className='text-white font-semibold relative p-3  flex justify-center items-center'>Sign up for our newsletter and receive exclusive offers on<br/>
 new ranges, sales, pop up stores and more</p>

 <div className=" relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ul className="flex space-x-4 text-xs md:text-sm items-center">
            <li className="flex items-center text-white">
              <span className="mr-2 text-white">✔</span> Exclusive offers
            </li>
            <li className="flex items-center text-white">
              <span className="mr-2 text-white">✔</span> Free events
            </li>
            <li className="flex items-center text-white">
              <span className="mr-2 text-white">✔</span> Large discounts
            </li>
          </ul>
        </div>
        <form className="mt-8 relative flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-72 px-4 py-2  text-black"
          />
          <button className="bg-[#2A254B]  -ml-7  text-white px-6 py-2">
            Sign up
          </button>
        </form>
    </div>
    </>
  )
}

export default Section4
