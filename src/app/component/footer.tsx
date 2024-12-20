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

    <div className='grid grid-rows-1 w-full h-5/6 realtive pt-10 bg-[#2A254B] '>
 <div className='grid grid-cols-2'>Menu</div>
 <div className=' grid grid-cols-2'>Categories</div>
 <div className='grid grid-cols-2'>Our Company</div>
 <div className='grid grid-cols-6'>Join Our mailing list</div>

    <div>
        <h1>Copyright 2022 Avian LTD</h1>

        <LinkedInIcon/>
        <FacebookIcon/>
        <InstagramIcon/>
        <PinterestIcon/>
        <TwitterIcon/>
        <FaSkype />

        </div>
   </div>
  )
}

export default Footer




