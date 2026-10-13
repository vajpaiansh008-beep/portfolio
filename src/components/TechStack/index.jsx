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
    <section id="tech" className="py-28 bg-[#111116] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Tech <span className="text-violet-500">Stack</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              className="bg-[#1A1A24] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-violet-500 transition"
            >
              <SemiCircleProgress percentage={item.level}>
                <div className="text-4xl text-violet-500">
                  {icons[item.icon]}
                </div>
              </SemiCircleProgress>

              <h3 className="font-semibold text-xl">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
