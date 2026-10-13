import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-[#111116] text-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-[#1A1A24] border border-white/10 rounded-3xl p-10">

          <FaGraduationCap className="text-5xl text-violet-500 mb-6" />

          <h2 className="text-3xl font-bold">
            Education
          </h2>

          <h3 className="text-xl mt-6">
            Maharana Pratap College of Technology
          </h3>

          <p className="text-gray-400 mt-3">
            Bachelor of Technology
          </p>

          <p className="text-gray-400">
            2022 - Present
          </p>

          <p className="text-violet-400 mt-5">
            CGPA : 8.01
          </p>

        </div>

      </div>
    </section>
  );
};

export default Education;