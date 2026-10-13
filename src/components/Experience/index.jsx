import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-[#0B0B0F] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            My <span className="text-violet-500">Journey</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My learning path and future goals.
          </p>
        </div>

        <div className="relative border-l-2 border-violet-600 ml-6">
          {portfolioData.timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="mb-16 ml-10"
            >
              <div className="absolute -left-[13px] w-6 h-6 bg-violet-600 rounded-full border-4 border-[#0B0B0F]" />

              <span className="text-violet-400 font-semibold">{item.year}</span>

              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

              <h4 className="text-gray-300 mt-2">{item.subtitle}</h4>

              <p className="text-gray-400 mt-4 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
