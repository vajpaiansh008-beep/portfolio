import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "../../data/portfolioData";

const DSA = () => {
  const { dsa } = portfolioData;

  return (
    <section id="dsa" className="py-28 bg-[#111116] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            DSA & <span className="text-violet-500">Coding</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Strengthening problem-solving through consistent practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Java Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A24] rounded-3xl border border-white/10 p-8"
          >
            <FaJava className="text-6xl text-violet-500" />

            <h3 className="text-3xl font-bold mt-6">Java for DSA</h3>

            <p className="text-gray-400 mt-5 leading-8">{dsa.description}</p>

            <div className="flex flex-wrap gap-3 mt-8">
              {dsa.topics.map((topic) => (
                <span
                  key={topic}
                  className="bg-violet-600/20 text-violet-400 px-4 py-2 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* LeetCode */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A24] rounded-3xl border border-white/10 p-8 flex flex-col justify-center"
          >
            <SiLeetcode className="text-6xl text-yellow-400" />

            <h3 className="text-3xl font-bold mt-6">LeetCode Profile</h3>

            <p className="text-gray-400 mt-5">
              Follow my coding journey and explore my problem-solving progress.
            </p>

            <a
              href={dsa.leetcode}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-full w-fit"
            >
              Visit Profile →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DSA;
