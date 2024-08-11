// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p>Contains everything concerning landing page</p>
//       </div>
//   

import React from 'react'
import Header from "/src/app/components/Header"
import Image from 'next/image'
import hospital7 from '/public/hospital7.jpg'

function Home({ children }: { children: React.ReactNode }) {
  return (
     <div className="max-w 4xl mx-auto py-12">
      <h1 className="text-center font-semibold text-14xl h-40 mb-7">Home</h1>
      <div className="relative grid grid-cols-2 bg-blue-200">
        <div className="relative">
          <Image layout="responsive" src={hospital7} width={422} height={123}/>
        </div>
        <div>
        <h2 className="font-bold text-center text-5xl text-blue-600">Easily Find Hospitals Within Your Location</h2>

<p>Use Carefinder to find the best hospitals in your vicinity by clicking on the search button</p>

<button className="mt-40 ml-7 bg-[#CEFF00]  text-slate-700 rounded-full capitalize font-semibold px-12 py-2">Search</button>
        </div>

      </div>
     </div>
    
  )
}
<Header/>
export default Home


