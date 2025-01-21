import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./Layout/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
