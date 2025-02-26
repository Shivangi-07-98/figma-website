'use client';

import Image from 'next/image';

export default function Section3() {
  return (
    <>
    <section className="text-center py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#000000] text-sm border px-3 py-1 inline-block rounded-full mb-4">Everything you need</p>
        <h2 className="text-5xl font-bold max-[430px]:text-[32px]">
          <span className="text-[#000000] ">Streamlined for easy </span><br />
          <span className="text-[#001354] ">management</span>
        </h2>
        <p className="text-[#010D3E] mt-4 text-[17px] max-[430px]:text-[22px] max-[430px]:max-w-[22rem] font-medium max-w-[28rem] mx-auto">
          Enjoy customizable lists, teamwork tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
        </p>
      </div>

      
    </section>
    <div className="mt-12 mx-auto flex max-[430px]:flex-col max-[430px]:mx-2 max-[430px]:px-0 justify-center gap-10">
        {/* Card 1 */}
        <div className="bg-white shadow-xl rounded-xl max-[430px]:rounded-3xl py-6 px-8 text-center relative flex flex-col items-center border border-gray-200">
          <Image src="/cube-helix.png" alt="Helix" width={250} height={250} className="mb-4" />
          <h3 className="text-[#000000] text-2xl font-semibold">Integration ecosystem</h3>
          <p className="text-[#010D3E] mt-2 max-w-[17rem] text-sm">
            Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl rounded-xl max-[430px]:rounded-3xl py-6 px-8 text-center relative flex flex-col items-center border border-gray-200">
          <Image src="/cube.png" alt="Cube" width={250} height={240} className="mb-4" />
          <h3 className="text-[#000000] text-2xl font-semibold">Goal setting and tracking</h3>
          <p className="text-[#010D3E] mt-2 max-w-[17rem] text-sm">
            Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
          </p>
        </div>
      </div>
    </>
  );
}
