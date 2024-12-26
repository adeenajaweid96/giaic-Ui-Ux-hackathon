import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Avion.png";
import { Search, ShoppingCart, CircleUserRound } from 'lucide-react';
import leftimage from "../../../public/Image Left.png";
import photo1 from "../../../public/Photo (2).png";
import photo2 from "../../../public/Photo.png";
import photo3 from "../../../public/Photo (1).png";
import photo4 from "../../../public/Parent.png";
import Delievery from '../../../public/Delivery-removebg-preview.png';
import Purchase from "../../../public/Purchase-removebg-preview.png";
import sprout from "../../../public/Sprout-removebg-preview.png";
import check from "../../../public/Checkmark.png";


const List = () => {
  return (

<div>

{/* max-w-screen-2xl mx-auto */}
      <div className='flex flex-row flex-wrap'>
        <div>
        <Image src={leftimage} alt='leftside image'/></div>
        <div className='py-20 pl-10'>
        <h1 className='text-4xl flex justify-start flex-wrap  font-medium  text-[#2A254B]  '>The Dandy Chair<br />£250</h1>
        <p className='text-[#2A254B] text-xl font-medium py-8'>Description<br/>A timeless design, with premium materials features as one of our most<br />
          popular and iconic pieces. The dandy chair is perfect for any stylish<br />
          living space with beech legs and lambskin leather upholstery.</p>
        <ul className='list-disc text-xl py-10 text-[#2A254B] font-light'>
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>
        </div>
      </div>
      <h1 className='flex flex-wrap justify-around pt-10 text-[#2A254B] text-3xl ml-20 font-semibold' >You might also like</h1>

      <div className='flex justify-center flex-wrap gap-10 pt-10'>

        <div className=''>
          <Image src={photo1} alt='Card1' />
          <h1 className='pt-5 text-{#2A254B}'>The Dandy chair</h1>
          <p className='pt-2'>£250</p>
        </div>

        <div className=''>
          <Image src={photo2} alt='Card2' />
          <h1 className='pt-5 text-{#2A254B}'>Rustic Vase Set</h1>
          <p className='pt-2'>£155</p>
        </div>


        <div className=''>
          <Image src={photo3} alt='Card3' />
          <h1 className='pt-5 text-{#2A254B}'>The Silky Vase</h1>
          <p className='pt-2'>£125</p>
        </div>

        <div className=''>
          <Image src={photo4} alt='Card4' />
          <h1 className='pt-5 text-{#2A254B}'>The Lucy Lamp</h1>
          <p className='pt-2' >£399</p>
        </div>


      </div>
      <div className='flex justify-center items-center'>
        <button className='flex justify-center items-center bg-gray-100 text-gray-500  my-10 px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>
      </div>

      <div className='bg-white pb-14'>
        <h1 className='text-2xl text-center pt-10 text-{#2A254B} pb-10'>What makes our brand different</h1>


        <div className='flex justify-center flex-wrap gap-8 '>
          <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image src={Delievery} alt='Van' />
            <h1 className='text-{#2A254B} text-xl pt-5'>Next day as standard</h1>
            <p className='pt-6'>Order before 3pm and get<br />
              your order the next day as<br /> standard</p>
          </div>

          <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image src={check} alt='check-on' />
            <h1 className='text-{#2A254B} text-xl pt-5'>Made by true artisans</h1>
            <p className='pt-6'>Handmade crafted goods<br />
              made with real passion and<br /> craftmanship</p>
          </div>

          <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image src={Purchase} alt='purchase' />
            <h1 className='text-{#2A254B} text-xl pt-5'>Unbeatable prices</h1>
            <p className='pt-6'>For our materials and quality<br />
              you wont find better prices<br /> anywhere</p>
          </div>



          <div className=' w-80  bg-gray-100 pl-8 pt-5 pb-8'>
            <Image src={sprout} alt='Van' />
            <h1 className='text-{#2A254B} text-xl pt-5'>Recycled packaging</h1>
            <p className='pt-6'>We use 100% recycled to<br />
              ensure our footprint is more<br /> manageable</p>
          </div>

        </div>

      </div>

      <div className=' flex justify-center w-[100%] h-[500px] bg-[#F9F9F9]'>
        <div className='bg-white w-[85%] h-[350px] mt-20'>
          <h1 className='text-[#2A254B] flex  justify-center items-center text-4xl font-medium pt-16'>Join the club and get the benefits</h1>
          <p className='flex justify-center items-center text-center text-xl text-[#2A254B] font-medium pt-10'>Sign up for our newsletter and receive exclusive offers on<br />
            new ranges, sales, pop up stores and more</p>

          <form className="mt-8 relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-72 px-4 py-2 bg-[#F9F9F9] h-[3rem] text-black"
            />
            <button className="bg-[#2A254B]  -ml-4  text-white px-6 py-3">
              Sign up
            </button>
          </form>
        </div>
      </div>

    </div>

  )
}

export default List
