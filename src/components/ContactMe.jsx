import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    label: "Email",
    value: "logeshwarankvm@gmail.com",
    link: "mailto:yourmail@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 9500351513",
    link: "tel:+919876543210",
    icon: <FaPhoneAlt />,
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/logeshwaranvm",
    link: "https://www.linkedin.com/in/logeshwaranvm",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    label: "GitHub",
    value: "github.com/jude-lokesh",
    link: "https://github.com/jude-lokesh",
    icon: <FaGithub />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="container max-w-screen-xl mx-auto px-4 mt-40 mb-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white font-bold text-4xl md:text-5xl text-center"
      >
        Contact Me
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {contactInfo.map((item) => (
          <motion.a
            key={item.id}
            variants={item}
            href={item.link}
            target={
              item.label === "Email" || item.label === "Phone"
                ? "_self"
                : "_blank"
            }
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-white/20 
                       bg-white/5 backdrop-blur-md
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            {/* Icon */}
            <div className="text-3xl text-green-400 mb-3 transition-transform duration-300 group-hover:scale-125">
              {item.icon}
            </div>

            {/* Label */}
            <h3 className="text-white font-semibold text-lg">
              {item.label}
            </h3>

            {/* Value */}
            <p className="text-gray-400 text-sm mt-1 break-words">
              {item.value}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="mailto:yourmail@gmail.com"
          className="inline-block px-6 py-3 bg-green-500 text-black rounded-full font-medium
                     transition hover:scale-110 hover:shadow-lg"
        >
          Let’s Connect
        </a>
      </motion.div>
    </section>
  );
};

export default ContactMe;