import { FC } from 'react';
import Link from 'next/link'

const page: FC = () => {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
};

export default page

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
    <div className="text-7xl  mt-80 text-blue-400">Home
    <section className="relative grid grid-cols-3">
      <div className="relative">
        <Image layout="fixed" src={hospital7} width={400} height={400}/>
      </div>
    </section>
    </div>
    
  )
}
<Header/>
export default Home


