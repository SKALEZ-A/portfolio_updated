"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { services } from "@/app/constants";
import { SectionWrapper } from "@/app/hoc";
import { fadeIn, textVariant } from "@/app/utils/motion";

import html from "@/public/assets/tech/html.png";

import TabButton from "./TabButton";

import profile from "@/public/assets/profile.jpg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>React JS/Next</li>
        <li>Ethers JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>LearnWeb3 DAO</li>
        <li>Ophir Institute</li>
        <li>Dapp University</li>
        <li>Alchemy University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Ophir Developer</li>
        <li>Gnosis Chain Advocate</li>
      </ul>
    ),
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <section className="text-white mt-3 py-6">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image
              alt="profile"
              src={profile}
              className="w-[250px] h-[250px] rounded-2xl"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
              <motion.p className="text-sm md:text-md text=[#ADB7BE] lg:text-lg">
                👋I&apos;m Skalez, a blockchain developer and DeFi enthusiast
                with a knack for building secure smart contracts and Crafting
                intuitive and captivating user interfaces is my forte, ensuring
                smooth interactions with blockchain systems.. I&apos;m
                passionate about DeFi&apos;s potential and eager to collaborate
                with startups and fellow devs to shape the future. Let&apos;s
                connect! 🌐
              </motion.p>
              <div className="flex flex-row mt-8 ">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certification")}
                  active={tab === "certification"}
                >
                  Certifications
                </TabButton>
              </div>
              <div className="mt-5">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </section>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
