import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
