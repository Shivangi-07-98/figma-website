'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './styles/section2.scss'

export default function Section2() {
  return (
    <section className="section2 text-center py-16 ">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#000000] text-sm border px-3 py-1 inline-block rounded-full mb-4">Boost your productivity</p>
        <h2 className="text-4xl font-bold">
          <span className="text-[#000000] text-5xl">A more effective way  </span><br />
          <span className="text-[#001354] text-5xl">to track progress</span>
        </h2>
        <p className="text-[#010D3E] mt-4 text-[17px] font-medium max-w-[28rem] mx-auto">
        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
      </div>


      <div >
      <div className="pb-16 relative bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] ">
      {/* Main Product Image */}
      <div className="relative  mx-auto  rounded-xl ">
        <Image src="/product-image.png" alt="Product Screenshot" width={900} height={600} className="w-full image1" />
        {/* Left Decorative Image */}
        <Image src="/torus.png" alt="Torus" width={180} height={180} className="absolute left-0 top-[29rem] image2" />
        {/* Right Decorative Image */}
        <Image src="/pyramid.png" alt="Pyramid" width={180} height={180} className="absolute right-0 top-[10rem] image3" />
      </div>

      {/* Features Section */}
      <div className="feature my-10 grid grid-cols-4  gap-8  mx-10">
        <FeatureCard 
          image="/leaf.png"
          title="Integration ecosystem"
          description="Track your progress and motivate your efforts everyday."
        />
        <FeatureCard 
          image="/circle.png"
          title="Goal setting and tracking"
          description="Set and track goals with manageable task breakdowns."
        />
        <FeatureCard 
          image="/lock.png"
          title="Secure data encryption"
          description="Ensure your data’s safety with top-tier encryption."
        />
        <FeatureCard 
          image="/bell.png"
          title="Customizable notifications"
          description="Get alerts on tasks and deadlines that matter most."
        />
      </div>
    </div>
      </div>
    </section>
  );
}

function FeatureCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <Image src={image} alt={title} width={20} height={20} />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-[#000000] text-start text-[15px] mt-2">{description}</p>
      <div className="flex items-center text-[#000000] text-[15px] mt-2 cursor-pointer">
        <span className="">Learn more</span>
        <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
}

