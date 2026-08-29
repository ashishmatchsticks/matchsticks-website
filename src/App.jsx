import Branding from "./components/Branding/Branding";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Loader from "./components/Loader/Loader";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Outdoor from "./components/Outdoor/Outdoor";
import Portal from "./components/Portal/Portal";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
    <Loader/>
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
    </main>
    </>
  );
}

export default App;