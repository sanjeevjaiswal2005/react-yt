import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Kodr from "./pages/Kodr";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* static routing */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/kodr" element={<Kodr />} />
        {/* nested routing */}
      </Routes>
    </>
  );
};

export default App;
