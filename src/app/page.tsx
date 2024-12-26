"use client";
import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Qualification from "../components/Qualification/Qualification";
import { projects } from "../../data/projects";
import dynamic from "next/dynamic";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import Projects from "@/components/Projects/Projects";

const Page: React.FC = () => {
  return (
    <>
      <Header />

      <About />
      <Qualification />
      <Experience />
      <Projects projects={projects} />
      <Contact />
      <ScrollUp />
    </>
  );
};

export default Page;
