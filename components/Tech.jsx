import React from "react";
import Image from "next/image";

import html from "@/public/assets/tech/html.png";
import css from "@/public/assets/tech/css.png";
import typescript from "@/public/assets/tech/typescript.png";
import javascript from "@/public/assets/tech/javascript.png";

// import { BallCanvas } from "./canvas";
import BallCanvas from "../components/canvas/Ball";
import { SectionWrapper } from "@/app/hoc";
import { technologies } from "@/app/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <Image src={technology.icon} className="h-18 w-18" alt="html" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
