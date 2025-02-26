'use client';

import Image from 'next/image';

type Testimonial = {
  text: string;
  name: string;
  username: string;
  image: string;
  fade?: boolean;
  middle?: boolean;
};

const testimonials = [
  { text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", name: "Alex Rivera", username: "@jamietechguru00", image: "/profile.jpg", fade: true },
  { text: "Our team’s productivity has skyrocketed since we started using this tool.", name: "Josh Smith", username: "@jsmith", image: "/profile.jpg" },
  { text: "This app has completely transformed how I manage my projects and deadlines.", name: "Morgan Lee", username: "@morganlewhiz", image: "/profile.jpg" }
];

const middleTestimonials: Testimonial[] = [
  { text: "I was amazed at how quickly we were able to integrate this app into our workflow.", name: "Casey Jordan", username: "@caseyj", image: "/profile.jpg", fade: true },
  { text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", name: "Taylor Kim", username: "@taylorkimm", image: "/profile.jpg", middle: true },
  { text: "The customizability and integration capabilities of this app are top-notch.", name: "Riley Smith", username: "@rileysmith1", image: "/profile.jpg" }
];

const rightTestimonials = [
  { text: "Adopting this app for our team has streamlined our project management and improved communication across the board.", name: "Jordan Patels", username: "@jpatelsdesign", image: "/profile.jpg", fade: true },
  { text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.", name: "Sam Dawson", username: "@dawsontechtips", image: "/profile.jpg" },
  { text: "Its user-friendly interface and robust features support our diverse needs.", name: "Casey Harper", username: "@casey09", image: "/profile.jpg" }
];

export default function TestimonialsSection() {
  return (
    <div className="relative">
      {/* Full gradient overlay at the top */}
      <div className="absolute top-[10rem] left-0 w-full h-[150px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      <section className="py-6 px-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#000000] text-sm border px-3 py-1 inline-block rounded-full mb-4">Testimonials</p>
          <h2 className="text-5xl font-bold">What our users say</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 py-14 mb-14 p-5">
          {[testimonials, middleTestimonials, rightTestimonials].map((column, colIndex) => (
            <div key={colIndex} className={`flex flex-col ${colIndex === 1 ? 'gap-6' : colIndex === 0 ? 'gap-6' : 'gap-0'}`}>
              {column.map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative px-5 py-6 bg-white rounded-xl shadow-lg border border-gray-200 
                    ${testimonial.fade ? "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:to-transparent before:rounded-xl" : ""} 
                    ${colIndex === 1 && index === 0 ? "h-[130px]" : colIndex === 1 && index === 1 ? "h-[200px]" : "h-[140px]"}`}
                >
                  <p className="text-gray-800 text-sm">{testimonial.text}</p>
                  <div className="flex items-center mt-4">
                    {/* Profile Image */}
                    
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="ml-3">
                      <p className="font-semibold text-xs">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
