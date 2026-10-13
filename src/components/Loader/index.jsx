import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0B0B0F] flex justify-center items-center z-[9999]">
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
        className="text-5xl font-bold text-violet-500"
      >
        Loading...
      </motion.h1>
    </div>
  );
};

export default Loader;
