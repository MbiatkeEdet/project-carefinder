import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaLocation} from 'react-icons/fa'
import {FaMail} from 'react-icons/fa'

function Footer() {
    return<div className='bg-gray-40 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
        <ul>
            <p className='text-gray-800 font-bold text-3xl pb-7'>
                Care<span className='text-blue-700'>Finder</span>
            </p>
            <div className='flex gap-7 pb-4'>
              <FaInstagram className='text-2xl cursor-pointer hover:text-pink-700'/>
              <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-700'/>
              <FaYoutube className='text-2xl cursor-pointer hover:text-red-700'/>
            </div>
        </ul>
    </div>
    <div className="p-5">
      <ul>
        <p className="text-gray-700 font-bold text-2xl pb-4">Products</p>
        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Hospital Search</li>
        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Blog Post</li>
        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Stocks</li>
        <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Stocks</li>
      </ul>
    </div>
    <div className="p-5">
        <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">About</li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Contact</li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-blue-700 cursor-pointer">Admin Login</li>
        </ul>
    </div>
    <div className="p-5">
      <ul>
        <p className="text-gray-800 font-bold text-2xl pb-4">Resources</p>
        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Terms Of Service</li>
        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Give Feedback</li>
        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">FAQs</li>
        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </div>
    </div>;
}

export default Footer;