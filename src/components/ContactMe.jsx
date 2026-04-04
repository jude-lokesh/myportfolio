import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    label: "Email",
    value: "logeshwarankvm@gmail.com",
    link: "mailto:logeshwarankvm@gmail.com",
    type: "internal",
    icon: <MdEmail />,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 9500351513",
    link: "tel:+919500351513", // ✅ fixed
    type: "internal",
    icon: <FaPhoneAlt />,
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/logeshwaranvm",
    link: "https://www.linkedin.com/in/logeshwaranvm",
    type: "external",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    label: "GitHub",
    value: "github.com/jude-lokesh",
    link: "https://github.com/jude-lokesh",
    type: "external",
    icon: <FaGithub />,
  },
];

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
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              aria-label={item.label}
              rel="noopener noreferrer"
              //           className="group relative p-6 rounded-2xl border border-white/20
              // bg-white/5 backdrop-blur-md
              // transition-all duration-300
              // hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
              // cursor-pointer"
            >
              <div className="text-3xl text-green-400 mb-3 transition-transform duration-300 group-hover:scale-125">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                {item.label}

                {item.type === "external" && (
                  <span className="text-xs text-green-400">↗</span>
                )}
              </h3>

              <p className="text-gray-400 text-sm mt-1 break-words">
                {item.value}
              </p>
            </a>
          );
        })}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="https://www.linkedin.com/in/logeshwaranvm"
          target={"_blank"}
          rel="noopener noreferrer"
          aria-label={"linkedin"}
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
