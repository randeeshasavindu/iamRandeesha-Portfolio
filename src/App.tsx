import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
export function App() {
  return <div className="w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>;
}