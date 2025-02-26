'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Menu } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <div className="relative  min-h-screen bg-gradient-to-tr from-[#183EC2] via-[#EAEEFE] to-[#EAEEFE]

">
        {/* Top Bar */}
        <div className="w-full bg-black text-gray-500 text-center text-sm py-2 max-[430px]:py-3">
          <span className='max-[430px]:hidden'>This page is included in a free SaaS Website Kit.</span> <span className="text-gray-200 inline-flex items-center gap-1">View the complete Kit <ArrowRight size={14} /></span>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 max-[430px]:hidden">
          <Image src="/framer.png" alt="Made by Framer" width={180} height={100} />
          <div className="flex items-center font-semibold gap-6 text-gray-500 text-base">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Customers</a>
            <a href="#" className="hover:underline">Updates</a>
            <a href="#" className="hover:underline">Help</a>
            {/* <button className="bg-black text-white px-4 py-2 rounded-lg">Get for free</button> */}
            <button className="bg-[#000000] text-[#FFFFFF] px-5 py-2 rounded-xl font-semibold shadow-lg">
              Get for free
            </button>
          </div>
        </nav>

        <nav className="min-[431px]:hidden flex justify-between items-center px-4 py-4 ">
          <Image src="/mb-logo.png" alt="Made by Framer" width={70} height={70} />

          <div>
            <Menu />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative flex items-center px-12 max-[430px]:px-8 py-20 max-[430px]:py-10 pb-32 max-[430px]:pb-[34rem] max-[430px]:flex-col ">
          {/* Left Side */}
          <div className="w-1/2 max-[430px]:w-full">
            <p className="border-[1.3px]  border-gray-400 text-black px-3 py-1 rounded-lg inline-block text-base font-medium mb-4 max-[430px]:text-xs ">Version 2.0 is here</p>
            <h1 className="text-[90px] max-[430px]:text-[50px] font-bold text-black leading-tight max-[430px]:my-6 ">Pathway to <span className='text-[#001354]'>productivity</span></h1>
            <p className="text-[#010D3E] mt-4 text-xl w-[30rem] max-[430px]:w-full">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

            {/* Buttons */}
            <div className="mt-6 flex items-center  gap-4">
              <button className="bg-[#000000] text-[#FFFFFF] px-5 py-2 rounded-xl font-semibold shadow-lg">
                Get for free
              </button>
              <button className="flex items-center gap-2 text-[#000000] text-base font-medium">
                Learn more <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 ">
            <Image src="/cylinder.png" alt="3D Design 1" width={200} height={200} className="absolute top-0 right-[34rem] max-[430px]:hidden" />
            <Image src="/visual.png" alt="3D Design 2"
              width={600} height={600}

              className="absolute top-0 right-0 max-[430px]:top-[31rem]   " />
            <Image src="/half-torus.png" alt="3D Design 3" width={210} height={210} className="absolute -bottom-[6rem] right-5 max-[430px]:hidden" />
          </div>
        </section>
 

      </div>

      {/* Brand Logos */}
      <div className='max-[430px]:hidden '>
        <div className="w-full  p-0 mb-8   ">
          <Image src="/brands.png" alt="Brand Logos" width={1300} height={20} className='' />
        </div>
      </div>

      <div className='min-[431px]:hidden '>
        <div className="w-full  p-0 mb-8   ">
          <Image src="/mb-brands.png" alt="Brand Logos" width={1300} height={20} className='' />
        </div>
      </div>
      


    </>
  );
}
