import { motion } from "framer-motion";
import SemiCircleProgress from "../UI/SemiCircleProgress";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSecurityscorecard,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiOpenjdk,
} from "react-icons/si";

const icons = {
  html: <SiHtml5 />,
  css: <SiCss />,
  javascript: <SiJavascript />,
  react: <SiReact />,
  redux: <SiRedux />,
  tailwind: <SiTailwindcss />,
  node: <SiNodedotjs />,
  express: <SiExpress />,
  authentication: <SiSecurityscorecard />,
  mongodb: <SiMongodb />,
  java: <SiOpenjdk />,
  git: <SiGit />,
  github: <SiGithub />,
  postman: <SiPostman />,
};

const tech = [
  { name: "HTML", icon: "html", level: 95 },
  { name: "CSS", icon: "css", level: 90 },
  { name: "JavaScript", icon: "javascript", level: 88 },
  { name: "React", icon: "react", level: 85 },
  { name: "Redux", icon: "redux", level: 75 },
  { name: "Tailwind CSS", icon: "tailwind", level: 92 },
  { name: "Node.js", icon: "node", level: 80 },
  { name: "Express", icon: "express", level: 80 },
  { name: "Authentication", icon: "authentication", level: 90 },
  { name: "MongoDB", icon: "mongodb", level: 78 },
  { name: "Java", icon: "java", level: 85 },
  { name: "Git", icon: "git", level: 82 },
  { name: "GitHub", icon: "github", level: 85 },
  { name: "Postman", icon: "postman", level: 80 },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-[#0B0B0F] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-16 text-center sm:mb-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            Technologies & Tools
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, responsive, and
            scalable web applications.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30" />
        </div>

        {/* Technology cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1A1A24] via-[#15151E] to-[#111119] p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/[0.08] sm:gap-5 sm:p-6"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-violet-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

              {/* Top accent */}
              <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-2/3" />

              {/* Progress indicator and icon */}
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                <SemiCircleProgress percentage={item.level}>
                  <div className="text-3xl text-violet-400 transition-colors duration-300 group-hover:text-fuchsia-400 sm:text-4xl">
                    {icons[item.icon]}
                  </div>
                </SemiCircleProgress>
              </div>

              {/* Technology name */}
              <h3 className="relative z-10 text-center text-sm font-semibold tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                {item.name}
              </h3>

              {/* Bottom accent */}
              <div className="h-0.5 w-8 rounded-full bg-violet-500/30 transition-all duration-300 group-hover:w-14 group-hover:bg-violet-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
