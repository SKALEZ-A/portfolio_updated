import Image from "next/image";
import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../../public/assets";
import avatarproject from "@/public/assets/avatarproject.png";
import horizon_dapp from "@/public/assets/horizon-dapp.png";
import NFT from "@/public/assets/project-1.png";
import wallet from "@/public/assets/project-2.png";

import html from "@/public/assets/tech/html.png";
import css from "@/public/assets/tech/css.png";
import reactjs from "@/public/assets/tech/reactjs.png";
import redux from "@/public/assets/tech/redux.png";
import tailwind from "@/public/assets/tech/tailwind.png";
import nodejs from "@/public/assets/tech/nodejs.png";
import solidity from "@/public/assets/tech/solidity.png";
import git from "@/public/assets/tech/git.png";
import hardhat from "@/public/assets/tech/hardhat.png";

import backend_img from "../../public/assets/backend.png";
import { web } from "@/public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Smart Contracts Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend_img,
  },
  {
    title: "Web3 Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "hardhat",
    icon: hardhat,
  },

  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Minting Platform",
    description:
      "An Nft minting site that allows minting of SkalezInc Nfts on the goerli network. Fully inspired by LearnWeb3Dao",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ethers",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: NFT,
    // source_code_link: "https://avatar-project-ochre.vercel.app/",
    source_code_link: "https://github.com/SKALEZ-A/LW3-Nft-collection/",
  },
  {
    name: "Horizon Portfolio Tracker",
    description:
      "An intuitive dapp to track your Arbitrum blockchain portfolio, including recent transactions and total token holdings.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "etherscan-api",
        color: "pink-text-gradient",
      },
    ],
    image: horizon_dapp,
    source_code_link: "https://github.com/SKALEZ-A/horizon-swap",
  },
  {
    name: "Web3 wallet Dapp",
    description:
      "A dapp that allows for easy fund transfers, directly from your wallet to another wallet address, keeps track and displays transactions in form of memes on the goerli chain,  with an improved, user-friendly UI.",
    tags: [
      {
        name: "hardhat",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: wallet,
    source_code_link: "https://web3-wallet-sample.vercel.app",
  },
  {
    name: "Avatar Airdrop Protocol",
    description:
      "A comprehensive real-world project that allows users to claim $avatar token with a fee after completing specific tasks, the token gets sent to their wallet, allowing users to also refer other users and get token rewards.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "ethers",
        color: "pink-text-gradient",
      },
    ],
    image: avatarproject,
    source_code_link: "https://avatar-project-ochre.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
