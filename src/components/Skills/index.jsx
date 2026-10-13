import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-violet-400">
      {title}
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
          }}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          className="bg-[#1A1A24] border border-white/10 rounded-xl py-5 text-center font-medium hover:border-violet-500 cursor-pointer transition"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-28 bg-[#0B0B0F] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            My <span className="text-violet-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="space-y-16">

          <SkillCategory
            title="Frontend"
            skills={skills.frontend}
          />

          <SkillCategory
            title="Backend"
            skills={skills.backend}
          />

          <SkillCategory
            title="Languages"
            skills={skills.languages}
          />

          <SkillCategory
            title="Tools"
            skills={skills.tools}
          />

        </div>

      </div>
    </section>
  );
};

export default Skills;