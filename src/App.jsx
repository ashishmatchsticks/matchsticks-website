import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Loader/>
    <Navbar/>
    <main>
      <Hero />
    </main>
    </>
  );
}

export default App;