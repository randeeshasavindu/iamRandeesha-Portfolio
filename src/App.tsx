import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer /> {}
    </div>
  );
}