"use client"
import { useState } from "react";
import Link from "next/link";
import image from "next/image";
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'

function Header() 
{
  const [menuIcon, setIcon] = useState( false );
  const handleSmallerScreensNavigation =() =>
  {
    setIcon  ( !menuIcon );
  }
  return (
    <header className="bg-slate-700 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="flex max-w-[1366] mx-auto h-full justify-between items-center p-4">
        <div className="text-1xl mt-2 font-bold">
             <div>
                <ul className="hidden md:flex bold font-semibold text-1xl lg:text-10px] text-slate-800">
                  <li className="mr-4 lg:mr-8 hover:text-blue-200">
                    <Link href='/'>Home</Link>
                  </li>
                    <li className="mr-4 lg:mr-8 hover:text-blue-200">
                        <Link href='/admin'>Admin</Link>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-blue-200">
                    <Link href='/contact'>Contact</Link>
                    </li>
                    <li className="mr-4 lg:mr-7 hover:text-blue-200">
                    <Link href='/services'>Services</Link>
                    </li>
                    <div>
                      <Link href="/Login">
                      <button className="mr-5 bg-[#CEFF00] text-slate-700 hover:bg-blue-200 hover:text-[#CEFF00] rounded-full lowercase font-light px-3 py-2">Login</button>
                      </Link>

                      <Link href="/signup">
                      <button className="mr-4 bg-[#CEFF00] text-slate-700 hover:bg-blue-200 hover:text-[#CEFF00] rounded-full lowercase font-light px-3 py-2">Sign up</button>
                      </Link>
                    </div>
                </ul>
             </div>

        </div>

        <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
          {menuIcon ?
           (<AiOutlineClose size={24} className='text-[#CEFF00]' />)
           :
           (<AiOutlineMenu size={24} className='text-[#CEFF00]' />)
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;
