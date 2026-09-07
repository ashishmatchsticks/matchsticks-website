import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

// Homepage components
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Branding from "./components/Branding/Branding";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Clients from "./components/Clients/Clients";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Marquee from "./components/Marquee/Marquee";
import Outdoor from "./components/Outdoor/Outdoor";
import Portal from "./components/Portal/Portal";
import Process from "./components/Process/Process";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonial from "./components/Testimonials/Testimonials";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";

// About page
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop";
import ServicesHeader from "./pages/Services/ServicesHeader/ServicesHeader";
import ServicesStats from "./pages/Services/ServicesStats/ServicesStats";

function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />

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
        <Process />
        <Testimonial />
        <FinalCTA />
        <ServicesHeader />
        <ServicesStats />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;