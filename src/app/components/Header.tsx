import React from "react";
import Link from "next/link";
import image from "next/image";

function Header() {
  return (
    <header className="bg-slate-700 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className=" flex-col max-w-[1366] mx-auto h-full justify-between items-center p-4">
        <div className="text-1xl mt-2 font-semibold">
             <div>
                <ul className="flex justify-between">
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
                      <Link href="Login">
                      <button className="mr-5 bg-[#CEFF00] text-slate-700 hover:bg-blue-200 hover:text-[#CEFF00] rounded-full capitalize font-semibold px-2 py-2">Login</button>
                      </Link>

                      <Link href="Sign up">
                      <button className="mr-4 bg-[#CEFF00] text-slate-700 hover:bg-blue-200 hover:text-[#CEFF00] rounded-full square font-semibold px-2 py-2">Sign up</button>
                      </Link>
                    </div>
                </ul>
             </div>

        </div>
      </nav>
    </header>
  )
}

export default Header;
