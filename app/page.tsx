import Image from "next/image";
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Footer from './components/section7'

export default function Home() {
  return (
    <>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </>
  );
}


// max-[430px]:w-[50%] → Applies from 0px to 430px.
// min-[431px]:max-[810px]:w-[80%] → Applies only between 431px and 810px, without affecting 0-430px styles.
