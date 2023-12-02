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

export default function Home() {
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
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
