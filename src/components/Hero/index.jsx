import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/resume/Ansh-vajpai-resume.pdf";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import hero from "../../assets/images/hero.png";
import { portfolioData } from "../../data/portfolioData";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen bg-[#0B0B0F] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-xl text-gray-300 mb-3">Hello 👋</p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">I'm</h2>

          <h1 className="text-5xl md:text-7xl font-extrabold text-violet-500 mt-2">
            {personal.name}
          </h1>

          <div className="text-2xl md:text-3xl mt-6 font-semibold h-12">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "React Developer",
                "Backend Developer",
                "Java Programmer",
                "DSA Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </div>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            I build modern, responsive and scalable web applications using the
            MERN Stack. Passionate about clean code, backend development and
            solving real-world problems through Java and Data Structures &
            Algorithms.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-full flex items-center gap-3 font-semibold shadow-lg shadow-violet-600/30"
            >
              <FaDownload />
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-violet-500 hover:bg-violet-600 transition px-7 py-3 rounded-full font-semibold"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}

          <div className="flex gap-5 mt-12">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-violet-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-violet-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-violet-500 transition"
            >
              <SiLeetcode />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="text-3xl hover:text-violet-500 transition"
            >
              <MdEmail />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Glow */}

          <div className="absolute w-96 h-96 bg-violet-600 blur-[150px] rounded-full opacity-30"></div>

          <motion.img
            src={hero}
            alt="Ansh Vajpai"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[340px] md:w-[500px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
