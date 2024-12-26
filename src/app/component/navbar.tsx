import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Avion.png";
import { Search ,ShoppingCart,CircleUserRound , Menu  } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (

    <div>
    <div className='flex justify-between p-6 border-bg-slate-600 border-b-2 '>
        <Search className='hidden md:block text-gray-600' />
      <Image src={Logo} alt="Avion" className=' flex justify-center'/>
      <div className='hidden md:flex text-gray-600'>
       <a href="/cart"> <ShoppingCart/></a>
<CircleUserRound className='ml-8'/>
</div>


    </div>
<div className='hidden md:block'>
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
<Link href='/listing'>Chairs</Link>
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

<Sheet>
  <SheetTrigger className='md:hidden'>
  <Menu/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
      <Image src={Logo} height={50} width={50} alt='logo'/>
      </SheetTitle>
      <SheetDescription>
      <ul className='py-8 '>
      <li className='pb-2  transition duration-300 hover:text-gray-900'>
    <Link href="#">Plant pots</Link></li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href="#">Ceramics</Link>
</li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href="#">Tables</Link>
</li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href='/listing'>Chairs</Link>
</li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href="#">Crockery</Link>
</li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href="#">Tableware</Link>
</li>
<li className='pb-2  transition duration-300 hover:text-gray-900'>
<Link href="#">Cutlery</Link>
</li> 

      </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>

  )
}

export default Navbar
