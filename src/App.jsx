import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
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
    </main>
    </>
  );
}

export default App;