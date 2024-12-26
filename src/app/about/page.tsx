import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Container from "../../../public/Image Block.png";
import LastImage from "../../../public/half-image.jpg";
import Delievery from '../../../public/Delivery-removebg-preview.png';
import Purchase from "../../../public/Purchase-removebg-preview.png";
import sprout from "../../../public/Sprout-removebg-preview.png";
import check from "../../../public/Checkmark.png";
import sofa from '../../../public/Image (1).png';


const About = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>

            {/* 1 */}
            <div className='bg-white w-full flex flex-row flex-wrap justify-around py-10'>
                <h2 className='text-3xl p-5 text-[#2A254B] font-light'>A brand built on the love of craftmanship,<br />
                    quality and outstanding customer service</h2>
                <Link href='/products'>
                    <button className='bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[230px] h-[70px]'>View Our Products</button>
                </Link>
            </div>
            {/* // 2 */}
            <div className='bg-white flex justify-center flex-wrap gap-14 py-14 mt-4'>
                <div className='px-16 pt-6 pb-8' style={{ backgroundColor: '#2A254B' }}>
                    <h1 className='text-white text-2xl font-semibold px-6 pt-16'>It started with a small idea</h1>
                    <p className='text-white px-6 pt-6 pb-28'>A global brand with local beginnings, our story begain in a<br />
                        small studio in South London in early 2014</p>

                    <button className=' bg-[#F9F9F926] text-white ml-10  px-10  w-[200px] h-[60px] '>View Collection</button>
                </div>
                <div>
                    <Image src={Container} alt='Sofa-image' />
                </div>

            </div>

            {/* 3 */}
            <div className="flex flex-wrap flex-row py-16">
                <div>
                    <Image src={sofa} alt='sofa' />
                </div>
                <div className='w-[50%] bg-[#F9F9F9]'>
                    <h1 className='text-[#2A254B] text-3xl font-light py-10 pl-10'>Our service is not just personal, it is actually<br/>
                        hyper personally exquisite</h1>
                    <p className='text-[#2A254B] text-[16px] font-light pl-10 pb-10'>When we started Avion, the idea was simple. Make high quality furniture<br/>
                     affordable and available for the mass market.
                     </p>
                    <p className='text-[#2A254B] text-[16px] font-light pl-10 pb-32'> Handmade, and lovingly crafted furniture and homeware is what we live,<br/>
                       breathe and design so our Chelsea boutique become the hotbed for the<br/>
                        London interior design community.</p>

                    <button className='bg-gray-100  text-gray-500 ml-10  px-10  border-2 rounded-md w-[230px] h-[70px]'>Get in touch</button>
                </div>
            </div>


            {/* 4 */}
            <div className='bg-white pb-14'>
                <h1 className='text-2xl text-center pt-10 text-{#2A254B} pb-10'>What makes our brand different</h1>
                <div className='flex flex-wrap gap-8 justify-center'>
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
            {/* 5 */}

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

export default About
