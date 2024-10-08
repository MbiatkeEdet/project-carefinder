
import React from 'react'
import Link from 'next/link'
import Header from "../../src/app/components/Header"
import Footer from "../../src/app/components/Footer"
import Image from 'next/image'
import hospital7 from '/public/hospital7.jpg'
import hospitallogin from '/public/hospital-login.jpg'

interface PageProps {
  children?: React.ReactNode;
}
const Page: React.FC<PageProps> = ({ children }) => {
  return (

    <>
    <Header />
     <div className="max-w-4xl mx-auto py-2">
      <h1 className="font-semibold text-4xl h-40 mt-7">Home</h1>
      <div className="grid grid-cols-2 grid-rows-2 bg-blue-200">
        <div className="relative">
          <Image layout="intrinsic"src={hospital7} width={422} height={123} alt="display-icon"/>
        </div>
        <div>
         <h2 className="font-light text-center text-6xl text-blue-600">Finding the right medical care is crucial for your well-being and peace of mind</h2>

 <p className="font-light text-center text-4xl mt-4 text-blue-600">At care-finder, we simplify the process of locating high quality healthcare services tailored to your specific needs. Our platform connects you with trusted providers,ensuring you receive the best care possible</p>
         </div>
         
       </div>
       <div>
       </div>
       <div>
         <section className="bg-white py-20 mt-20">
         <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
           <h1 className="text-3xl text-center text-gray-800 font-semibold md: text-4">
             Gain access to the most up-to-date and reliable hospital information
             in Nigeria.
          </h1>
        <div className="flex flex-col rounded-md shadow-md">
          <div className="p-6 flex flex-col items-center hover:bg-gray-200">
             <Image
                src={hospital7} width={422} height={123}
                alt="download-icon"
              />
              <h3 className="mt-5 mb-2 text-gray-800 text-lg font-semibold">
                Download and save
              </h3>
              <p className="text-gray-600 font-light text-center">
                Found a hospital you love? Download CSV or share quick access
                later. Carefinder allows you to download and share, making it
                convenient to revisit them whenever you need.
              </p>
             </div>
           </div>
           {/* card 2 */}
           <div className="flex flex-col p-8 rounded-md shadow-md">
             <div className="p-8 flex flex-col items-center hover:bg-gray-200">
               <Image layout="intrinsic"src={hospitallogin} width={422} height={232} alt="search-icon" />
               <h3 className="mt-5 mb-2 text-gray-800 text-light font-semibold">
                 Advanced Search
               </h3>
               <p className="text-gray-600 font-light text-center">
                 Our intuitive search filters allow you to narrow down your
                 hospital search based on location, medical specialization,
                 available services, and more. With just a few clicks, You will
                 find the hospitals that best match your needs.
               </p>
             </div>
           </div>
         </div>
        { children }
         </section>
         <Footer />
        
       </div>
      
    </div>
    </>
    
  );
};
export default Page;

// import React from 'react';
// import Image from 'next/image';
// import Header from '../../src/app/components/Header';
// import Footer from '../../src/app/components/Footer';
// import hospital7 from '/public/hospital7.jpg';
// import hospitallogin from '/public/hospital-login.jpg';

// interface PageProps {
//   children: React.ReactNode;
// }

// const Page: React.FC<PageProps> = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <div className="max-w-4xl mx-auto py-2">
//         <h1 className="font-light text-4xl h-20 mt-[100px]">Welcome To The Carefinder Application</h1>
//         <div className="grid grid-col-2 grid-rows-2 bg-blue-200">
//           <div className="relative">
//             <Image layout="responsive" src={hospital7} width={422} height={223} alt="display-icon" />
//           </div>
//           <div>
//             <h2 className="font-light text-center text-6xl text-blue-700">
//               Finding the right medical care is crucial for your well-being and peace of mind
//             </h2>
//             <p className="font-light text-center text-4xl mt-4 text-blue-600">
//               At care-finder, we simplify the process of locating high-quality healthcare services tailored to your specific needs. Our platform connects you with trusted providers, ensuring you receive the best care possible.
//             </p>
//           </div>
//         </div>
//         <div>
//           <section className="bg-white py-20 mt-20">
//             <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
//               <h1 className="text-3xl text-center text-gray-800 font-semibold md:text-4xl">
//                 Gain access to the most up-to-date and reliable hospital information in Nigeria.
//               </h1>
//               <div className="flex flex-col rounded-md shadow-md">
//                 <div className="p-6 flex flex-col items-center hover:bg-gray-200">
//                   <Image src={hospital7} width={422} height={123} alt="download-icon" />
//                   <h3 className="mt-5 mb-2 text-gray-800 text-lg font-semibold">Download and Save</h3>
//                   <p className="text-gray-600 font-light text-center">
//                     Found a hospital you love? Download CSV or share quick access later. Carefinder allows you to download and share, making it convenient to revisit them whenever you need.
//                   </p>
//                 </div>
//               </div>
//               {/* Card 2 */}
//               <div className="flex flex-col p-8 rounded-md shadow-md">
//                 <div className="p-8 flex flex-col items-center hover:bg-gray-200">
//                   <Image layout="responsive" src={hospitallogin} width={422} height={232} alt="search-con" />
//                   <h3 className="mt-5 mb-2 text-gray-800 text-lg font-semibold">Advanced Search</h3>
//                   <p className="text-gray-600 font-light text-center">
//                     Our intuitive search filters allow you to narrow down your hospital search based on location, medical specialization, available services, and more. With just a few clicks, you will find the hospitals that best match your needs.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Page;


