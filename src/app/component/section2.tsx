import React from 'react'
import Image from "next/image";
import Delievery from '../../../public/Delivery-removebg-preview.png';
import Purchase from "../../../public/Purchase-removebg-preview.png";
import sprout from "../../../public/Sprout-removebg-preview.png";
import check from "../../../public/Checkmark.png";
// import { Sprout } from 'lucide-react';

const Section2 = () => {
  return (
    <div className='bg-white pb-14'>
      <h1 className='text-2xl text-center pt-10 text-{#2A254B} pb-10'>What makes our brand different</h1>


      <div className='flex flex-wrap gap-8 justify-center'>
        <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image  src={Delievery} alt='Van'/>
            <h1 className='text-{#2A254B} text-xl pt-5'>Next day as standard</h1>
            <p className='pt-6'>Order before 3pm and get<br/>
             your order the next day as<br/> standard</p>
        </div>

        <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image  src={check} alt='check-on'/>
            <h1 className='text-{#2A254B} text-xl pt-5'>Made by true artisans</h1>
            <p className='pt-6'>Handmade crafted goods<br/>
             made with real passion and<br/> craftmanship</p>
        </div>

        <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image  src={Purchase} alt='purchase'/>
            <h1 className='text-{#2A254B} text-xl pt-5'>Unbeatable prices</h1>
            <p className='pt-6'>For our materials and quality<br/>
             you wont find better prices<br/> anywhere</p>
        </div>



        <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image  src={sprout} alt='Van'/>
            <h1 className='text-{#2A254B} text-xl pt-5'>Recycled packaging</h1>
            <p className='pt-6'>We use 100% recycled to<br/>
             ensure our footprint is more<br/> manageable</p>
        </div>
      
      </div>

    </div>
  )
}

export default Section2
