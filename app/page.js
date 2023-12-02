"use client";
import Image from "next/image";
import { BrowserRouter } from "react-router-dom";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/canvas/Stars";
import Tech from "@/components/Tech";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicStarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});

export default function Home() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 gradient-bg-welcome">
        <div className="gradient-bg-welcome bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />

        {/* <Experience /> */}
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          {/* {isClient && <DynamicStarsCanvas />} */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
