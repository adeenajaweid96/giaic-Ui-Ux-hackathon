import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import Hero from '../../../public/hero.jpg';

const Home = () => {
  return (
    <div className='mx-auto relative'>
      <Image src={Hero} alt='Hero-image' className=' bg-cover bg-bottom h-screen w-full '/>
      <div className='bg-white w-{300px} h-{300px} absolute right-36 top-20 pb-16 bg-fixed'>
        <h1 className='text-black text-4xl p-8 '>Luxury homeware for people<br/> who love timeless design quality</h1>
        <p className='text-gray-500 text-xl pl-8 mt-6 pb-28'>Shop the new Spring 2022 collection today</p>
      <Link href="\products"> 
      <button className='bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>
      </Link>      
        </div>
    </div>
  )
}

export default Home
