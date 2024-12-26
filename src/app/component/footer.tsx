import React from 'react'
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaSkype } from "react-icons/fa6";
// import { Linkedin ,Facebook ,Instagram ,Twitter , } from 'lucide-react';



const Footer = () => {
  return (
    <footer className='bg-[#2A254B] overflow-x-hidden'>
      <div className='flex flex-row py-10 justify-between gap-10 px-20 flex-wrap bg-[#2A254B] max-w-screen-2xl mx-auto '>

        <div className='flex flex-col text-white font-extralight text-xs gap-2'>
          <h1>Menu</h1>
          <p>New arrivals</p>
          <p>Best sellers</p>
          <p>Recently viewed</p>
          <p>Popular this week</p>
          <p>All products</p>
        </div>

        <div className=' flex flex-col text-white font-extralight text-xs gap-2'>
          <h1>Categories</h1>
          <p>Crockery</p>
          <p>Furniture</p>
          <p>Homeware</p>
          <p>Plant pots</p>
          <p>Chairs</p>
        </div>

        <div className='flex flex-col text-white font-extralight text-xs gap-2'>
          <h1>Our Company</h1>
          <p>About us</p>
          <p>Vacancies</p>
          <p>Contact us</p>
          <p>Privacy</p>
          <p>Returns policy</p>
        </div>

        <div className='flex flex-col text-white font-extralight text-xs gap-4'>
          <h1>Join Our mailing list</h1>
          
        <form className="mt-8 relative flex flex-col sm:flex-row gap-4  justify-center items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-72 px-4 py-2  text-black bg-[#433c72]"
          />
          <button className="bg-white text-[#2A254B] -ml-7 px-6 py-2">
            Sign up
          </button>
        </form>
      </div>
      </div>

      <div className=' border-t-2 border-gray-600  text-white flex justify-between py-6 px-10 max-w-screen-2xl mx-auto'>
        <h1 className='text-center sm:text-xs font-extralight  gap-2 '>Copyright 2022 Avian LTD</h1>
        <div className='hidden sm:flex gap-6 '>
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
          <FaSkype className='text-2xl' />
          <TwitterIcon />
          <PinterestIcon /></div>
      </div>
      {/* <div className='grid grid-rows-1 w-full h-5/6 realtive pt-10 bg-[#2A254B] max-w-screen-2xl mx-auto  '> */}
      {/* pt-6 pb-6 mx-12 */}
    
    </footer>
  )
}

export default Footer




