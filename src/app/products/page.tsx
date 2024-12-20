import React from 'react';
import Image from "next/image";
// import List from "./list";
import product from "../../../public/product.jpg";
import Frame from "../../../public/Frame 143.png";
import photo1 from "../../../public/Photo (2).png";
import photo2 from "../../../public/Photo.png";
import photo3 from "../../../public/Photo (1).png";
import photo4 from "../../../public/Parent.png";
import photo5 from "../../../public/Photo (5).png";
import photo6 from "../../../public/Photo (6).png";
import photo7 from "../../../public/Photo(7).png";
import photo8 from "../../../public/Photo(8).png";



const Product = () => {
  return (
    <div>
{/* <List/> */}
        <Image src={Frame} alt='product-list' className='w-full'/>
        {/* <Image src={product} alt='photo' className='relative w-[100%]  bg-no-repeat  bg-cover bg-center '/> */}


        <div className='flex justify-center flex-wrap gap-10 pt-10'>
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
      </div>


      <div className='flex justify-center flex-wrap gap-10 pt-14'>
        <div className=''>
            <Image src={photo5} alt='Card1'/>
            <h1 className='pt-5 text-{#2A254B}'>The Dandy chair</h1>
            <p className='pt-2'>£250</p>
        </div>

        <div className=''>
            <Image src={photo6} alt='Card2'/>
            <h1 className='pt-5 text-{#2A254B}'>Rustic Vase Set</h1>
            <p className='pt-2'>£155</p>
        </div>


        <div className=''>
            <Image src={photo7} alt='Card3'/>
            <h1 className='pt-5 text-{#2A254B}'>The Silky Vase</h1>
            <p className='pt-2'>£125</p>
        </div>

        <div className=''>
            <Image src={photo8} alt='Card4'/>
            <h1 className='pt-5 text-{#2A254B}'>The Lucy Lamp</h1>
            <p className='pt-2' >£399</p>
        </div>

  
        <button className=' bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>
      </div>

      
      <div className='flex justify-center flex-wrap gap-10 pt-14'>
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
        <button className=' bg-gray-100 text-gray-500 ml-10  px-10  border-2 rounded-md w-[200px] h-[60px] '>View Collection</button>

      </div>
    </div>
  )
}

export default Product
