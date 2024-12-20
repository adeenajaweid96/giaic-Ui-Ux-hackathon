import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Avion.png";
import { Search ,ShoppingCart,CircleUserRound  } from 'lucide-react';



const Navbar = () => {
  return (

    <div>
    <div className='flex justify-between p-6 border-bg-slate-600 border-b-2 '>
        <Search className='text-gray-600' />
      <Image src={Logo} alt="Avion" className='flex justify-center !important'/>
      <div className='flex text-gray-600'>
<ShoppingCart />
<CircleUserRound className='ml-8'/>
</div>


    </div>
<div>
    <ul className='flex justify-center p-5 gap-12 text-xl text-gray-400'>
<li className=''>
    <Link href="#">Plant pots</Link></li>
<li>
<Link href="#">Ceramics</Link>
</li>
<li>
<Link href="#">Tables</Link>
</li>
<li>
<Link href="\listing">Chairs</Link>
</li>
<li>
<Link href="#">Crockery</Link>
</li>
<li>
<Link href="#">Tableware</Link>
</li>
<li>
<Link href="#">Cutlery</Link>
</li> 
   </ul>
</div>
    </div>
  )
}

export default Navbar
