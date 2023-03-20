import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  wishly,
  didaac,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  londex,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "No-Coding Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "ZedPro.Me",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2013 - Feb 2016",
    points: [
      "Implemented websites, mobile applications, and landing pages from concept through deployment.",
      "Standardized all output with a new, responsive, mobile-first approach and strategy.",
      "Assessed UX and UI designs for technical feasibility.",
      "Developed standard and ad hoc reports in graph format as required.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CYPER",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2016 - Nov 2018",
    points: [
      "Analyzed 30+ user requirements to derive technical software design and performance requirements.",
      "Integrated existing software into 13 upgraded, modified systems for higher performance.",
      "Designed and Managed 5+ large databases using Node.js, ORM and SQL/No-SQL.",
      "Troubleshooted 3000+ code-related issues and defects.",
    ],
  },
  {
    title: "Full stack Web Developer",
    company_name: "Internut Sdn. Bhd.",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - April 2022",
    points: [
      "Developing cross-platform web applications for E-commerce, E-Learning and private niche social networking.",
      "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed.",
      "Collaborate with senior level usability specialists and technology/business leaders to interpret requirements into interactive experiences.",
      "Conduct research and developed creative processes by sharing new trends and development technologies with other designers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Upwork / Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Integration between Smart contract and React using Web3.js and ethers.js.",
      "Build and deploy Smart Contract on Polygon, Thundercore, BSC, Ethereum networks using Truffle and Remix IDE.",
      "Build and deploy ERC20, ERC721, ERC1155, Pool, Stake, Vote, Vaults contract.",
      "Fork PancakeSwap and Uniswap, SafeMoon token.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "AIDA",
    designation: "DR",
    company: "Zedpro.me",
    image: "https://zedpro.me/assets/images/client/testimonial-1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Ken Hewer",
    designation: "CFO",
    company: "Cyper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jyYApx_V88fk2Z8R49Ob5ryQgsJvEuLIuhOjXUkTYA&s",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lim Keong ",
    designation: "CTO",
    company: "Internut Sdn. Bhd.",
    image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/v1424228558/iwq5zunzqtuqx1jjetb6.jpg",
  },
];

const projects = [
  {
    name: "Londex",
    description:
      "Londex is designing green and cost effective Decentralised Finance by providing a complete set of Defi features on Moonbeam, Avax, Bsc while accelerating their adoption.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: londex,
    source_code_link: "https://github.com/",
  },
  {
    name: "Didiagha.ac",
    description:
      "Email campaign set up, email automation, email template design, sales funnel, Shopify and website marketing, landing page design, email data base and copywriting.",
    tags: [
      {
        name: "Bubble",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: didaac,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wishly-app",
    description:
      "Build the React Native application. Wishly is the social media community app focused on making the world a better place through accessible philanthropy.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: wishly,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
