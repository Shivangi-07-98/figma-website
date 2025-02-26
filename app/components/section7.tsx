'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className=" flex justify-between xs:flex-col xs:gap-14">
        {/* Left Section */}
        <div className="flex flex-col justify-between xs:gap-8">
          <div>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <p className="text-[#BCBCBC] text-sm max-w-[40%] mt-4 xs:max-w-full">
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
          </p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {['twitter', 'instagram', 'pinterest', 'linkedin', 'tiktok', 'youtube'].map((icon) => (
              <Image key={icon} src={`/${icon}.png`} alt={icon} width={22} height={22} />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-4 gap-12 justify-end mr-0 pr-0 xs:flex xs:flex-col xs:gap-6">
          <div>
            <h3 className="text-[#FFFFFF] text-sm font-semibold">Product</h3>
            <ul className="mt-2 space-y-2 text-[#7B7B7B] text-sm">
              <li>Features</li>
              <li>Integrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-sm font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-[#7B7B7B] text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-sm font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-[#7B7B7B] text-sm">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-sm font-semibold pr-0 mr-0">Legal</h3>
            <ul className="mt-2 space-y-2 text-[#7B7B7B] text-sm">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
