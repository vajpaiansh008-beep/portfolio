import { motion } from "framer-motion";
import {
  FaCode,
  FaJava,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="bg-[#111116] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-violet-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Get to know me better.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 leading-9 text-lg">
              {portfolioData.about.description}
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <InfoCard icon={<FaCode />} title="Stack" value="MERN Stack" />

            <InfoCard icon={<FaJava />} title="DSA" value="Java" />

            <InfoCard icon={<FaGraduationCap />} title="CGPA" value="8.01" />

            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              value="Gwalior, India"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-6 hover:border-violet-500 transition duration-300">
      <div className="text-3xl text-violet-500">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="text-gray-400 mt-2">{value}</p>
    </div>
  );
};

export default About;
