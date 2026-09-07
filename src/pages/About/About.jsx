import FinalCTA from "../../components/FinalCTA/FinalCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutCTA from "./AboutCTA/AboutCTA";
import AboutCulture from "./AboutCulture/AboutCulture";
import AboutHeader from "./AboutHeader";
import AboutStats from "./AboutStats/AboutStats";
import AboutStory from "./AboutStory/AboutStory";
import AboutTeam from "./AboutTeam/AboutTeam";
import AboutTestimonial from "./AboutTestimonial/AboutTestimonial";
import AboutTimeline from "./AboutTimeline/AboutTimeline";
import AboutValues from "./AboutValues/AboutValues";

function About() {
  return (
    <>
    <Navbar />
      <AboutHeader />
      <AboutStats />
      <AboutStory />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutCulture />
      <AboutTestimonial />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default About;