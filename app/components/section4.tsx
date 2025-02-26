'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Section4() {
  return (
    <>
    <section className="text-center mt-24 pt-16 max-[430px]:mt-28 px-6 ">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#000000] text-sm border px-3 py-1 inline-block rounded-full mb-4">Boost your productivity</p>
        <h2 className="text-4xl font-bold max-[430px]:text-[32px]">
          <span className="text-[#000000] ">A more effective way  </span><br />
          <span className="text-[#001354] ">to track progress</span>
        </h2>
        <p className="text-[#010D3E] mt-4 text-[17px] max-[430px]:text-[22px] max-[430px]:max-w-[23rem] font-medium max-w-[28rem] mx-auto">
        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
      </div>


      
    </section>

    <div >
      <section className="max-[430px]:pt-8 pt-8 pb-20  px-6 max-[430px]:px-2 max-[430px]:mx-0  flex justify-center items-end gap-6 flex-wrap min-[431px]:max-[810px]:flex-col min-[431px]:max-[810px]:items-center">
      {/* Free Plan */}
      <div className="bg-white shadow-md rounded-xl max-[430px]:rounded-3xl p-6 w-70 max-[430px]:w-80 max-[430px]:py-10  border border-gray-200">
        <h3 className="text-[#6F6C90] font-semibold text-left">Free</h3>
        <p className="text-4xl font-bold my-6 text-left">$O<span className="text-gray-500 text-lg ml-1">/monthly</span></p>
        <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 w-full">Get started for free</button>
        <ul className="mt-6 space-y-2 text-gray-600 text-sm text-left">
          <li className="flex items-center"><Check className="mr-3" /> Up to 5 project members</li>
          <li className="flex items-center"><Check className="mr-3" /> Unlimited tasks and projects</li>
          <li className="flex items-center"><Check className="mr-3" /> 2GB storage</li>
          <li className="flex items-center"><Check className="mr-3" /> Integrations</li>
          <li className="flex items-center"><Check className="mr-3" /> Basic support</li>
        </ul>
      </div>

      {/* Pro Plan */}
      <div className="bg-black text-[#FFFFFF] shadow-lg rounded-xl max-[430px]:rounded-3xl p-8 w-70 max-[430px]:w-80 max-[430px]:py-12 relative border border-gray-200">
        <div className='flex justify-between'>
        <h3 className="text-gray-300 font-semibold text-left">Pro</h3>
        <div className="w-24 text-right text-xs bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text font-semibold border-[0.2px] border-gray-700 p-1 px-2 rounded-lg mr-0">Most Popular</div>
        </div>
        <p className="text-4xl font-bold my-6 text-left">$9<span className="text-[#999999] text-lg font-semibold ml-1">/monthly</span></p>
        <button className="bg-white text-black py-[0.4rem] px-4 rounded-lg mt-4 w-full">Sign up now</button>
        <ul className="mt-6 space-y-2 text-[#FFFFFF] text-sm text-left">
          <li className="flex items-center"><Check className="mr-3" /> Up to 50 project members</li>
          <li className="flex items-center"><Check className="mr-3" /> Unlimited tasks and projects</li>
          <li className="flex items-center"><Check className="mr-3" /> 50GB storage</li>
          <li className="flex items-center"><Check className="mr-3" /> Integrations</li>
          <li className="flex items-center"><Check className="mr-3" /> Priority support</li>
          <li className="flex items-center"><Check className="mr-3" /> Advanced support</li>
          <li className="flex items-center"><Check className="mr-3" /> Export support</li>
        </ul>
      </div>

      {/* Business Plan */}
      <div className="bg-white shadow-md rounded-xl max-[430px]:rounded-3xl  p-6 w-70 max-[430px]:w-80 max-[430px]:py-12 border border-gray-200">
        <h3 className="text-[#6F6C90] font-semibold text-left">Business</h3>
        <p className="text-4xl font-bold my-6 text-left">$19<span className="text-gray-500 text-lg ml-1">/monthly</span></p>
        <button className="bg-black text-white py-2 px-4 rounded-full mt-4 w-full">Sign up now</button>
        <ul className="mt-6 space-y-2 text-gray-600 text-sm text-left">
          <li className="flex items-center"><Check className="mr-3" /> Up to 5 project members</li>
          <li className="flex items-center"><Check className="mr-3" /> Unlimited tasks and projects</li>
          <li className="flex items-center"><Check className="mr-3" /> 200GB storage</li>
          <li className="flex items-center"><Check className="mr-3" /> Integrations</li>
          <li className="flex items-center"><Check className="mr-3" /> Dedicated account manager</li>
          <li className="flex items-center"><Check className="mr-3" /> Custom fields</li>
          <li className="flex items-center"><Check className="mr-3" /> Advanced analytics</li>
          <li className="flex items-center"><Check className="mr-3" /> Export capabilities</li>
          <li className="flex items-center"><Check className="mr-3" /> API access</li>
          <li className="flex items-center"><Check className="mr-3" /> Advanced security features</li>
        </ul>
      </div>
    </section>
      </div>
    </>
  );
}
