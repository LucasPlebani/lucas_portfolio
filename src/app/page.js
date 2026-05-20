"use client";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import StatCard from "../components/StatCard";
import FlagshipProject from "../components/FlagshipProject";
import Projects from "../components/Projects";
import DevProjects from "../components/DevProjects";
import StackCard from "../components/StackCard";
import NowCard from "../components/NowCard";
import Formations from "../components/Formations";
import SoftSkills from "../components/SoftSkills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { DEV_PROJECTS, PROJECTS, STACK, FORMATIONS } from "../data/portfolioData";
export default function Home() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["projects","dev-projects", "stack", "formations", "contact"];
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(ids[i]);
          return;
        }
      }
      setActive("hero");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="blob-field" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>
      <div className="app">
        <Nav active={active} onNav={nav} />
        <div className="bento">
            <Hero onContact={() => nav("contact")} />
          <StatCard />
          <FlagshipProject />
          <Projects projects={PROJECTS} />
          <DevProjects projects={DEV_PROJECTS} />
          <StackCard stack={STACK} />
          <NowCard />
          <Formations formations={FORMATIONS} />
          <SoftSkills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
