"use client"
// import Image from "next/image";
// import Link from 'next/link';
// import Frame from "../../../public/Frame 143.png";
// import { ShoppingCart } from 'lucide-react';
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../redux/cartslice";
// import { set } from "sanity";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description:string;
// }
//     const Products: React.FC = () => {
//         const [products, setProducts] = useState<Product[]>([]);
//         const dispatch = useDispatch();

// const getProducts = async () => {
//     const fetchApi = await fetch("https://hackathon-apis.vercel.app/api/products");
//     const res:Product[] = await fetchApi.json();
// setProducts(res);
// };

// const handleAdd = (product: Product) => {
//     dispatch(add(product));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//     return (
//         <div className='max-w-screen-2xl mx-auto'>
//             <Image src={Frame} alt='product-list' className='w-full' />
//             <div  className='flex justify-center flex-wrap gap-10 pt-10'>
//             {products.map((product) => (

//                             <Link href={`products/${product.id}`} key={product.id}>

//                     <div key={product.id} className='w-full max-w-sm bg-white'>
//                         <Image className='w-[400px] h-[400px]' src={product.image} alt={product.name} width={400} height={400}/>
//                         <h1 className='pt-5 text-[#2A254B]'>{product.name}</h1>
//                         <p className='pt-2'>{product.price}</p>
//     <Link href="/cart"> <button onClick={()=>handleAdd(product)}  className="bg-gray-100 text-gray-500 ml-10 px-10 border-2 rounded-md w-[200px] h-[60px]">
//         Add to Cart <ShoppingCart className="text-gray-500"/></button></Link>
//      </div>
//                     </Link>
//                 ))}
                      


//             </div>
//             {/* <div className='flex justify-center py-20'>
//             <Link href="/cart">

//                 <button className='bg-gray-100 text-gray-500 ml-10 px-10 border-2 rounded-md w-[200px] h-[60px]'>
//                     View Collection <ShoppingCart className="text-black"/>
//                 </button>
//                 </Link>
//             </div> */}
//         </div>
        
//     );
// };

// export default Product;






   // {res.map((val: any, i: any) => (
    // <Link href={`products/${val._id}`} key={i}>
{/* 
    <div key={i} className='w-full max-w-sm bg-white'>
        <Image className='w-[400px] h-[400px]' src={val.image} alt={val.name} width={400} height={400}/>
        <h1 className='pt-5 text-[#2A254B]'>{val.name}</h1>
        <p className='pt-2'>{val.price}</p>
<Link href="/cart"> <button  className="bg-gray-100 text-gray-500 ml-10 px-10 border-2 rounded-md w-[200px] h-[60px]">
Add to Cart <ShoppingCart className="text-gray-500"/></button></Link>
</div>
    </Link>
))} */}
      





import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslice";
import sanityClient from "../../../sanityClient"; // Import the Sanity client

interface Product {
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    const getProducts = async () => {
        // Fetch products from Sanity
        const query = `*[_type == "product"] {
            _id,
            title,
            price,
            description,
            "image": image.asset->url
        }`;
        const res: Product[] = await sanityClient.fetch(query);
        setProducts(res);
    };

    const handleAdd = (product: Product) => {
        dispatch(add(product));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="gap-5 grid lg:grid-cols-3 p-12 max-w-screen-2xl mx-auto">
            {products.map((product) => (
                <div
                    key={product._id}
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <Link href={`products/${product._id}`}>
                        <div>
                            <Image
                                className="p-8 rounded-t-lg w-[400px] h-[400px]"
                                src={product.image}
                                alt={product.title}
                                height={200}
                                width={200}
                            />
                        </div>
                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {product.title}
                            </h5>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${product.price}
                                </span>
                                <button
                                    onClick={() => handleAdd(product)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Products;


















// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { add } from "../redux/cartslice";

// interface Product {
//   _id: number;
//   title: string;
//   price: number;
//   image: string;
//   description:string;
// }

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const dispatch = useDispatch();

//   const getProducts = async () => {
//     const data = await fetch("https://hackathon-apis.vercel.app/api/products");
//     const res: Product[] = await data.json();
//     setProducts(res);
//   };

//   const handleAdd = (product: Product) => {
//     dispatch(add(product));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);


//   return (
//     <>
//       <div className="gap-5 grid lg:grid-cols-3 p-12">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <Link href={`products/${product._id}`}>
//               <div>
//                 <Image
//                   className="p-8 rounded-t-lg w-[400px] h-[400px]"
//                   src={product.image}
//                   alt={product.title}
//                   height={200}
//                   width={200}
//                 />
//               </div>
//               <div className="px-5 pb-5">
//                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                   {product.title}
//                 </h5>
//                 <div className="flex items-center mt-2.5 mb-5">
//                   {/* <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                     {/* Rating stars */}
//                     {[...Array(4)].map((_, index) => (
//                       <svg
//                         key={index}
//                         className="w-4 h-4 text-yellow-300"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                     ))}
//                     {/* Empty star */}
//                     <svg
//                       className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                   {/* </div> */} 
//                   {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//                     5.0
//                   </span> */}
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                     ${product.price}
//                   </span>
//                   <button onClick={()=>handleAdd(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Products;