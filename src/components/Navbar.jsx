import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsX, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/navigation";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = "/uploads/Logo.png";

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="absolute top-4 left-1/2 z-50 w-[92vw] max-w-6xl -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-2xl shadow-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={handleClose}
            className="flex items-center gap-3"
          >
            <img
              className="h-10 w-16 rounded-md brightness-200 object-contain"
              src={logoUrl}
              alt="Wassalha Logo"
            />
          </Link>

          <button
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="rounded-full border border-white/20 p-2 text-white transition hover:text-orange-400 lg:hidden"
          >
            {isOpen ? <BsX size={24} /> : <BsList size={24} />}
          </button>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-white">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to} className="relative text-sm font-semibold">
                    <Link
                      to={link.to}
                      className={`transition duration-300 ${
                        isActive ? "text-orange-400" : "hover:text-orange-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-1/2 -bottom-3 -translate-x-1/2 text-orange-400"
                      >
                        <BsDash size={40} className="translate-y-3" />
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-3 rounded-2xl border border-white/20 bg-black/70 px-4 py-4 text-white shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-3 text-sm font-semibold">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={handleClose}
                      className={`transition duration-300 ${
                        isActive ? "text-orange-400" : "hover:text-orange-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

