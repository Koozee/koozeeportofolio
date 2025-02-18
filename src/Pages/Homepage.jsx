import About from "../components/Fragments/About";
import Projects from "../components/Fragments/Projects";
import Skills from "../components/Fragments/Skills";
import Journey from "../components/Fragments/Journey";
import Contact from "../components/Fragments/Contact";
import Footer from "../components/Fragments/Footer";
import Hero from "../components/Fragments/Hero";
import Header from "../components/Fragments/Header";
import Chatbot from "../components/Elements/ChatBot";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Chatbot />
      <Footer />
    </>
  );
}
