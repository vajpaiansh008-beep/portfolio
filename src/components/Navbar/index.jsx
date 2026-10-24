import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import resume from "../../assets/resume/Ansh-vajpai-resume.pdf";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#0B0B0F]/85 shadow-xl shadow-black/20 backdrop-blur-2xl"
          : "border-b border-white/[0.04] bg-[#0B0B0F]/20 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="group cursor-pointer text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            <span className="bg-gradient-to-b from-violet-300 to-violet-600 bg-clip-text text-transparent transition-colors">
              &lt;
            </span>
            <span className="transition-colors duration-300 group-hover:text-violet-300">
              AV
            </span>
            <span className="bg-gradient-to-b from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">
              /&gt;
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-violet-400 after:!w-full"
                className="relative cursor-pointer whitespace-nowrap py-2 text-sm font-medium tracking-wide text-gray-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-auto hidden items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-all duration-300 hover:border-violet-300/60 hover:shadow-xl hover:shadow-violet-500/25 md:flex lg:ml-6"
        >
          <FaDownload className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
          Resume
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl text-gray-200 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300 md:ml-4 lg:hidden"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/[0.08] bg-[#101017]/95 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden"
          >
            <ul className="mx-auto flex max-w-md flex-col items-center gap-2 px-6 py-6">
              {navLinks.map((item, index) => (
                <li key={item.to} className="w-full">
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full cursor-pointer rounded-xl border border-transparent px-5 py-3 text-center text-base font-medium text-gray-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.08] hover:text-violet-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="mt-3 w-full">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20"
                >
                  <FaDownload className="text-sm" />
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
