import React from 'react'
import Image from 'next/image';
import product1 from '../../../public/Product Image.png';
import product2 from '../../../public/Product Image (1).png';

const Cart = () => {
  return (

   
    //cart page
    <div className='bg-[#F9F9F9] pt-20 max-w-screen-2xl mx-auto overflow-x-hidden'>

    <h1 className='flex text-3xl font-light text-[#2A254B] mx-96'>Your shopping cart</h1>
    <div className='flex flex-row justify-around py-10 pl-28  text-xl font-light text-[#2A254B]  border-b-2 border-gray-300 mx-10'>
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
    </div>
{/* product 1 */}
    <div className="flex flex-row justify-around py-14">
        <div className='flex flex-col'>
            <Image src={product1} alt='Gray vase' className='w-[200px] h-[200px] ml-20' />
            <p className='ml-20 my-8 '><span className='text-xl font-normal '>Graystone vase </span><br/> A timeless ceramic vase with <br/>
            a tri color grey glaze.<br/>
            £85</p>
        </div>
        <div className='flex flex-col px-8 my-8 text-2xl'>

            1
        </div>
        <div className='flex flex-col px-8 my-8 text-2xl'>
        £85
        </div>
    </div>

 {/* product2 */}
    <div className="flex flex-row justify-around pb-16">
        <div className='flex flex-col'>
            <Image src={product2} alt='Basic White vase' className='w-[200px] h-[200px] ml-20' />
            <p className='ml-20 my-8 '><span className='text-xl font-normal '>Basic White vase</span><br/>
            Beautiful and simple this is<br/>
            one for the classics <br/>
            £85</p>
        </div>
        <div className='flex flex-col px-8 my-8 text-2xl '>

            1
        </div>
        <div className='flex flex-col px-8 my-8 text-2xl'>
        £85
        </div>
    </div>
    </div>
  
   

  
  )
}

export default Cart
