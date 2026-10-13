import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#0B0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-violet-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some projects I've built while learning full stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {portfolioData.projects.map((project, index) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={false}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#1A1A24] rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500 transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-violet-600/20 text-violet-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-full"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-violet-500 hover:bg-violet-600 transition px-5 py-2 rounded-full"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
