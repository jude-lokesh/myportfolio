import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ThreeBackground from "./components/ThreeBackground";
import CustomCursor from "./components/CustomeCursor";
// import NumberSection from "./components/NumberSection";

const NavBar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./components/HeroSection"));
const NumberSec = lazy(() => import("./components/NumberSection"));
// const ServiceSection = lazy(() => import("./components/ServiceSection"));
const About = lazy(() => import("./components/About"));
const WhyMe = lazy(() => import("./components/WhyMe"));
const ProjectSection = lazy(() => import("./components/ProjectSection"));
const TestimonialsSection = lazy(
  () => import("./components/TestimonialsSection"),
);
const ContactSection = lazy(() => import("./components/ContactSection"));
const ContactMe = lazy(() => import("./components/ContactMe"));
function App() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <ThreeBackground />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          {" "}
          <NavBar />
          <Hero />
          {/* <NumberSec /> */}
          {/* <ServiceSection /> */}
          <WhyMe />
          <About />
          <ProjectSection />
          {/* <TestimonialsSection /> */}
          {/* <ContactSection /> */}
          <ContactMe />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
