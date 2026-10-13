import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { portfolioData } from "../../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <h2 className="text-white font-semibold">
          © {new Date().getFullYear()} Ansh Vajpai
        </h2>

        <div className="flex gap-5 text-2xl text-white">
          <a href={personal.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={personal.leetcode} target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
