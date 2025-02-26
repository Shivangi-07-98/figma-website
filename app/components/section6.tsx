import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SignupSection = () => {
  return (
    <section className="relative w-full py-16 pb-28 bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] flex flex-col items-center justify-center">
      {/* Left Star Image */}
      <Image
        src="/star.png"
        alt="Star"
        width={300}
        height={300}
        className="absolute left-0 top-[30%] transform -translate-y-1/2 "
      />

      {/* Right Helix Image */}
      <Image
        src="/helix.png"
        alt="Helix"
        width={300}
        height={300}
        className="absolute right-0 top-[17%] transform -translate-x-4"
      />

      {/* Content */}
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-5xl font-bold text-[#001354]">
          Sign up for <span className="text-[#001354]">free</span> today
        </h2>
        <p className="text-[#010D3E] mx-auto text-base text-center max-w-[26rem] mt-3">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="bg-[#000000] text-[#FFFFFF] px-5 py-2 rounded-xl font-semibold shadow-lg">
            Get for free
          </button>
          <button className="flex items-center gap-2 text-[#000000] text-base font-semibold">
            Learn more <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
