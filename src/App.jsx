import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Loader from "./components/Loader/Loader";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Portal from "./components/Portal/Portal";

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
    </main>
    </>
  );
}

export default App;