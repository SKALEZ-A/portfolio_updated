"use client";
import dynamic from "next/dynamic";

const DynamicStarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import("@/components/About"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const DynamicWorks = dynamic(() => import("@/components/Works"), {
  ssr: false,
});
const DynamicHero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const DynamicTech = dynamic(() => import("@/components/Tech"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
export default function Home() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <>
      <div className="relative z-0 gradient-bg-welcome">
        <div className="gradient-bg-welcome bg-cover bg-no-repeat bg-center">
          <DynamicNavbar />
          <DynamicHero />
        </div>
        <DynamicAbout />

        {/* <Experience /> */}
        <DynamicTech />
        <DynamicWorks />

        <div className="relative z-0">
          <DynamicContact />

          <DynamicStarsCanvas />
        </div>
        <DynamicFooter />
      </div>
    </>
  );
}
