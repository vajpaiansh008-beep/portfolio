import { motion } from "framer-motion";

const SemiCircleProgress = ({ percentage, children }) => {
  const radius = 55;
  const circumference = Math.PI * radius; // Half circle

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">

      <svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
      >
        {/* Background */}

        <path
          d="M15 70 A55 55 0 0 1 125 70"
          fill="none"
          stroke="#2d2d3a"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Progress */}

        <motion.path
          d="M15 70 A55 55 0 0 1 125 70"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
        />
      </svg>

      {/* Percentage */}

      <div className="-mt-10 text-xl font-bold text-violet-400">
        {percentage}%
      </div>

      {/* Icon */}

      <div className="text-5xl text-violet-500 mt-3">
        {children}
      </div>

    </div>
  );
};

export default SemiCircleProgress;