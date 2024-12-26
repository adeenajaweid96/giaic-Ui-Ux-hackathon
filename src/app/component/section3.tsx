import React from 'react'
import Image from "next/image";
import photo1 from "../../../public/Photo (2).png";
import photo2 from "../../../public/Photo.png";
import photo3 from "../../../public/Photo (1).png";
import photo4 from "../../../public/Parent.png";
// import { Card } from "flowbite-react";


const Section3 = () => {
  return (
    <div className='flex justify-center flex-wrap gap-10 pt-10 max-w-screen-2xl mx-auto'>
        <div className=''>
            <Image src={photo1} alt='Card1'/>
            <h1 className='pt-5 text-{#2A254B}'>The Dandy chair</h1>
            <p className='pt-2'>£250</p>
        </div>

        <div className=''>
            <Image src={photo2} alt='Card2'/>
            <h1 className='pt-5 text-{#2A254B}'>Rustic Vase Set</h1>
            <p className='pt-2'>£155</p>
        </div>


        <div className=''>
            <Image src={photo3} alt='Card3'/>
            <h1 className='pt-5 text-{#2A254B}'>The Silky Vase</h1>
            <p className='pt-2'>£125</p>
        </div>

        <div className=''>
            <Image src={photo4} alt='Card4'/>
            <h1 className='pt-5 text-{#2A254B}'>The Lucy Lamp</h1>
            <p className='pt-2' >£399</p>
        </div>

     

  
        {/* <button className=' bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button> */}
   
{/*    
        <div className='flex justify-center items-center'>
   <button className='flex justify-center items-center bg-gray-100 text-gray-500  my-10 px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>
 </div>  */}

 <div className='flex justify-center py-20'>
      <button className=' bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>
      </div>
   
   
      </div>


  )
}

export default Section3
