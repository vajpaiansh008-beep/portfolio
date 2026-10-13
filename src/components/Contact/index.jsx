import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

import { portfolioData } from "../../data/portfolioData";

const Contact = () => {
  const { personal, contact } = portfolioData;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    toast.success("EmailJS will be connected once you create your account.");

    // Later we'll replace this with the real EmailJS code.

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-[#0B0B0F] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-violet-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Info icon={<MdEmail />} title="Email" value={contact.email} />

            <Info icon={<FaPhoneAlt />} title="Phone" value={contact.phone} />

            <Info
              icon={<FaMapMarkerAlt />}
              title="Location"
              value={contact.location}
            />

            <div className="flex gap-5 text-3xl pt-4">
              <a href={personal.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-violet-500 transition" />
              </a>

              <a href={personal.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-violet-500 transition" />
              </a>

              <a href={personal.leetcode} target="_blank" rel="noreferrer">
                <SiLeetcode className="hover:text-violet-500 transition" />
              </a>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A24] rounded-xl px-5 py-4 outline-none border border-white/10 focus:border-violet-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A24] rounded-xl px-5 py-4 outline-none border border-white/10 focus:border-violet-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A24] rounded-xl px-5 py-4 outline-none border border-white/10 focus:border-violet-500 resize-none"
            />

            <button
              disabled={loading}
              className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-5 bg-[#1A1A24] p-5 rounded-2xl border border-white/10">
      <div className="text-3xl text-violet-500">{icon}</div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );
};

export default Contact;
