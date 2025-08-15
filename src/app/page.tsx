"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}