// NavBar section

export const sidebarVarients = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 12,
    },
  }),

  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const menuItemVarient = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      duration: 0.1,
    },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};

export const navItems = [
  { id: 1, title: "Services", href: "#services" },
  { id: 2, title: "Why Hire me", href: "#whyme" },
  { id: 3, title: "Projects", href: "#projects" },
  // { id: 1, title: "Testimonials", href: "#testimonials" },
  { id: 1, title: "Contact Me", href: "#contact" },
];

export const navVarients = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 },
  },
};

// Hero Section

export const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const role = "Frontend Developer";
export const nameText = " Hi, I'm";
export const personName = "Logeshwaran.";

export const description =
  "Frontend Software Developer with 3.6+ years of experience designing and delivering scalable, high-performance, and user-centric web applications using React.js. Proficient in JavaScript and TypeScript, with strong expertise in building and integrating RESTful APIs. Adept at creating reusable, modular components and optimizing application performance, while maintaining clean, well-structured, and maintainable code following best practices.";
export const AboutMe1 =
  "Frontend Software Developer with 3.6+ years of professional experience in building scalable, responsive web applications, specializing in React.js. hands-on frontend development experience using React, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Material UI.".split(
    "",
  );
export const AboutMe2 =
  "I have worked across multiple domains, including Real Estate, Government & Corporate Assessment, and Academic Simulation platforms, delivering clean, reusable UI components and user-friendly interfaces. I have a strong understanding of the software development lifecycle, API integration, debugging, performance optimization, and cross-browser compatibility.".split(
    "",
  );
export const AboutMe3 =
  "In my current role, I focus on frontend development with React, where I design and maintain reusable components, collaborate closely with backend teams to integrate REST APIs, and improve application performance through code optimization and bug fixing. I ensure mobile responsiveness and seamless user experience across devices and browsers.".split(
    "",
  );
export const AboutMe4 =
  "I have contributed to key projects such as Retrex, an Australia-based real estate platform, where I built dynamic property listing interfaces and enhanced user navigation. I also played a significant role in a Malaysia-based assessment portal, implementing interactive UI features and improving overall usability and performance.".split(
    "",
  );

// Service Section Variables

export const services = [
  {
    id: 1,
    title: "Ui/Ux Design",
    src: "",
    description: "loream I am a Frontend Software Developer with",
  },
  {
    id: 2,
    title: "Web Development",
    src: "",
    description: "loream I am a Frontend Software Developer with",
  },
  {
    id: 3,
    title: "App Development",
    src: "",
    description: "loream I am a Frontend Software Developer with",
  },
];

export const Variants = {
  offscreen: {
    opacity: 0,
    y: -100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

// Contact section

export const contactText = "Lets make your brand billiant".split(" ");
