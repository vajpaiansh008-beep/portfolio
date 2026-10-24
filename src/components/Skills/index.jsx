import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

const SkillCategory = ({ title, skills }) => (
  <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#15151F] via-[#111119] to-[#0D0D14] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/[0.05] sm:p-8">
    <h3 className="mb-7 inline-block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent">
      {title}
    </h3>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
          className="group relative flex min-h-[76px] cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#1A1A24]/90 px-3 py-5 text-center font-medium text-gray-300 shadow-sm shadow-black/20 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/[0.08] hover:text-white hover:shadow-lg hover:shadow-violet-500/10"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative z-10 break-words text-sm transition-colors duration-300 sm:text-base">
            {skill}
          </span>
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
      className="relative overflow-hidden bg-[#0B0B0F] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-fuchsia-600/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center sm:mb-20">
          <span className="mb-5 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            What I Work With
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies I use to build modern, responsive, and reliable web
            applications.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md shadow-violet-500/30" />
        </div>

        <div className="space-y-12 sm:space-y-16">
          <SkillCategory title="Frontend" skills={skills.frontend} />

          <SkillCategory title="Backend" skills={skills.backend} />

          <SkillCategory title="Languages" skills={skills.languages} />

          <SkillCategory title="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
