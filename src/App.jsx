import About from "./components/About/About";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Branding from "./components/Branding/Branding";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Clients from "./components/Clients/Clients";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Loader from "./components/Loader/Loader";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Outdoor from "./components/Outdoor/Outdoor";
import Portal from "./components/Portal/Portal";
import Process from "./components/Process/Process";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonial from "./components/Testimonials/Testimonials";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";
import AboutCulture from "./pages/About/AboutCulture/AboutCulture";
import AboutHeader from "./pages/About/AboutHeader";
import AboutStats from "./pages/About/AboutStats/AboutStats";
import AboutStory from "./pages/About/AboutStory/AboutStory";
import AboutTeam from "./pages/About/AboutTeam/AboutTeam";
import AboutTestimonial from "./pages/About/AboutTestimonial/AboutTestimonial";
import AboutTimeline from "./pages/About/AboutTimeline/AboutTimeline";
import AboutValues from "./pages/About/AboutValues/AboutValues";

function App() {
  return (
    <>
    <Loader/>
    <CustomCursor />
    <Navbar/>
    <main>
      <Hero />
      <Portal />
      <Marquee />
      <Intro />
      <Stats />
      <FeaturedWork />
      <Outdoor />
      <Branding />
      <Services />
      <CaseStudy />
      <VideoShowcase />
      <BeforeAfter />
      <Clients />
      <About />
      <Process />
      <Testimonial />
      <FinalCTA />
      <Footer />
      <AboutHeader />
      <AboutStats />
      <AboutStory />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutCulture />
      <AboutTestimonial />
    </main>
    </>
  );
}

export default App;