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
        <div className={menuIcon ? 
        'md:hidden absolute top-[100px] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300'
        :
        'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen gb-slate-800 text-white text-center ease-in duration-300'
        }>
        <div className="w-full">

          <ul className='uppercase font-bold text-2xl'>
            
            <li onClick={handleSmallerScreensNavigation} className='py-4 hover:text-[#CEFF00]-[#CEFF00] cursor-pointer'>
               <Link href="/">Home</Link>
            </li>
            <li onClick={handleSmallerScreensNavigation} className='py-4 hover:text-[#CEFF00]-[#CEFF00] cursor-pointer'>
               <Link href="/admin">Admin</Link>
            </li>
            <li onClick={handleSmallerScreensNavigation} className='py-4 hover:text-[#CEFF00]-[#CEFF00] cursor-pointer'>
               <Link href="/contact">Contact</Link>
            </li>
            <li onClick={handleSmallerScreensNavigation} className='py-4 hover:text-[#CEFF00]-[#CEFF00] cursor-pointer'>
               <Link href="/services">Services</Link>
            </li>
          </ul>
          <div className='flex flex-col justify-center items-center mt-17'>
            <Link href="/login" onClick={handleSmallerScreensNavigation}>
            <button className='bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5'>login</button>
            </Link>
            <Link href="/signup" onClick={handleSmallerScreensNavigation}>
            <button className=' border-2 bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5'>signup</button>
            </Link>
          </div>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
