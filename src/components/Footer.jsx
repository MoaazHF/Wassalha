import { motion } from "framer-motion";

const contacts = [
  {
    label: "+20 1123456789",
    icon: "/uploads/icons8-whatsapp.svg",
    alt: "WhatsApp",
  },
  {
    label: "wassalha@gmail.com",
    icon: "/uploads/icons8-gmail-50.png",
    alt: "Email",
  },
];

const socialMedia = [
  { icon: "/uploads/icons8-facebook.svg", alt: "Facebook" },
  { icon: "/uploads/icons8-instagram.svg", alt: "Instagram" },
  { icon: "/uploads/icons8-x-50.png", alt: "X" },
];

const coverage = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Aswan",
  "Qena",
  "Sharm El-Sheikh",
  "Damanhour",
];

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="mx-auto my-10 w-[90vw] rounded-2xl bg-gray-200 p-6 shadow-2xl md:p-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 border-t-2 border-gray-300 pt-6 md:grid-cols-3 text-center"
      >
        <div>
          <h2 className="mb-4 text-2xl font-bold">Contact us</h2>
          <ul className="space-y-3">
            {contacts.map((item) => (
              <motion.li
                key={item.label}
                variants={itemVariants}
                className="flex items-center justify-center gap-3"
              >
                <img className="h-8 w-8" src={item.icon} alt={item.alt} />
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Social Media</h2>
          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((item) => (
              <motion.img
                key={item.alt}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="h-9 w-9 cursor-pointer"
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Coverage</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            {coverage.map((city) => (
              <motion.li key={city} variants={itemVariants}>
                {city}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
