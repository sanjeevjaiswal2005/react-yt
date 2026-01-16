import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white">
        <Navbar />
        <Section />
        <Footer/>
      </div>
    </>
  );
};

export default App;
