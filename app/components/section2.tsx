'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Section2() {

  const featureCards = [
    {
      image: "/leaf.png",
      title: "Integration ecosystem",
      description: "Track your progress and motivate your efforts everyday.",
    },
    {
      image: "/circle.png",
      title: "Goal setting and tracking",
      description: "Set and track goals with manageable task breakdowns.",
    },
    {
      image: "/lock.png",
      title: "Secure data encryption",
      description: "Ensure your data's safety with top-tier encryption.",
    },
    {
      image: "/bell.png",
      title: "Customizable notifications",
      description: "Get alerts on tasks and deadlines that matter most.",
    }
  ];

  return (
    <section className="text-center py-16 ">
      <div className="max-w-3xl mx-auto ">
        <p className="text-[#000000] text-sm border px-3 py-1 inline-block rounded-full mb-4">Boost your productivity</p>
        <h2 className="text-5xl font-bold max-[430px]:text-[32px]">
          <span className="text-[#000000]  ">A more effective way  </span><br />
          <span className="text-[#001354] ">to track progress</span>
        </h2>
        <p className="text-[#010D3E] mt-4 text-[17px] max-[430px]:text-[22px] max-[430px]:max-w-[25rem] font-medium max-w-[28rem] mx-auto">
        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
      </div>


      <div >
      <div className="pb-16 relative bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] ">
      {/* Main Product Image */}
      <div className="relative  mx-auto  rounded-xl max-[430px]:mt-6">
        <Image src="/product-image.png" alt="Product Screenshot" width={900} height={600} className="w-full" />
        {/* Left Decorative Image */}
        <Image src="/torus.png" alt="Torus" width={180} height={180} className="absolute left-0 top-[29rem] max-[430px]:hidden" />
        {/* Right Decorative Image */}
        <Image src="/pyramid.png" alt="Pyramid" width={180} height={180} className="absolute right-0 top-[10rem] max-[430px]:hidden" />
      </div>


      {/* Features Section */}
      <div className="m-10 grid grid-cols-4 gap-8 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center max-[430px]:gap-y-11">
          {featureCards.map((card, index) => (
            <div key={index} className="flex flex-col items-start justify-start w-full max-[430px]:w-[75%] max-[430px]:mx-auto">
              <Image src={card.image} alt={card.title} width={20} height={20} />
              <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
              <p className="text-[#000000] text-start text-[15px] mt-2">{card.description}</p>
              <div className="flex items-center text-[#000000] text-[15px] mt-2 cursor-pointer">
                <span>Learn more</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

    </div>
      </div>
    </section>
  );
}

