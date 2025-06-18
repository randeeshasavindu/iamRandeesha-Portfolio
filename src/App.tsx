import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TeamCollaboration } from "./components/TeamCollaboration";

export function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <TeamCollaboration />
        <Contact />
      </main>
      <Footer /> {}
    </div>
  );
}