"use client";
import React from "react";
import { remove } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import Link from "next/link";
interface CartItem {
    _id: number;
    title: string;
    description: string;
    image: string;
    price: number;

}

const CartItem: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);

    const handleRemove = (id: number) => {
        dispatch(remove(id));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
            <div className="space-y-6">
                {cartItems.map((item: CartItem) => (
                    <div key={item._id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                        {/* Image Section */}
                        <div className="flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                height={150}
                                width={150}
                                className="rounded-md"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="ml-4 flex-grow">
                            <h5 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h5>
                            <h5 className="text-lg font-medium text-gray-600 mt-2">
                                ${item.price}
                            </h5>
                        </div>

                        {/* Button Section */}
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            onClick={() => handleRemove(item._id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
          <Link href="\checkout"><button className="bg-gray-400 text-gray-700 font-bold text-xl my-10 ml-[45%] border-2 rounded-md w-[200px] h-[60px]">Checkout</button> </Link>  
        </div>
    );
};
export default CartItem;




// import React from 'react'
// import Image from 'next/image';
// import product1 from '../../../public/Product Image.png';
// import product2 from '../../../public/Product Image (1).png';

// const Cart = () => {
//   return (


//     //cart page
//     <div className='bg-[#F9F9F9] pt-20 max-w-screen-2xl mx-auto overflow-x-hidden'>

//     <h1 className='flex text-3xl font-light text-[#2A254B] mx-96'>Your shopping cart</h1>
//     <div className='flex flex-row justify-around py-10 pl-28  text-xl font-light text-[#2A254B]  border-b-2 border-gray-300 mx-10'>
//         <h1>Product</h1>
//         <h1>Quantity</h1>
//         <h1>Total</h1>
//     </div>
// {/* product 1 */}
//     <div className="flex flex-row justify-around py-14">
//         <div className='flex flex-col'>
//             {/* <Image src={product1} alt='Gray vase' className='w-[200px] h-[200px] ml-20' /> */}
//             <Image src={product1} alt='Gray vase' className='w-[200px] h-[200px] ml-20' />

//             <p className='ml-20 my-8 '><span className='text-xl font-normal '>Graystone vase </span><br/> A timeless ceramic vase with <br/>
//             a tri color grey glaze.<br/>
//             £85</p>
//         </div>
//         <div className='flex flex-col px-8 my-8 text-2xl'>

//             1
//         </div>
//         <div className='flex flex-col px-8 my-8 text-2xl'>
//         £85
//         </div>
//     </div>

//  {/* product2 */}
//     <div className="flex flex-row justify-around pb-16">
//         <div className='flex flex-col'>
//             <Image src={product2} alt='Basic White vase' className='w-[200px] h-[200px] ml-20' />
//             <p className='ml-20 my-8 '><span className='text-xl font-normal '>Basic White vase</span><br/>
//             Beautiful and simple this is<br/>
//             one for the classics <br/>
//             £85</p>
//         </div>
//         <div className='flex flex-col px-8 my-8 text-2xl '>

//             1
//         </div>
//         <div className='flex flex-col px-8 my-8 text-2xl'>
//         £85
//         </div>
//     </div>
//     </div>




//   )
// }

// export default Cart
