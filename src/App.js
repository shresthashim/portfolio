import React, {useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Qualification from "./components/Qualification/Qualification";
import { projects } from "./data/projects";

import { ClimbingBoxLoader } from "react-spinners";

const App = () => {
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ClimbingBoxLoader speedMultiplier='1.2' color={"#F37A24"} loading={loading} size={30} aria-label='Loading Spinner' data-testid='loader' />
        </div>
      ) : (
        <>
          <Header />
          <Navbar />
          <About />
          <Qualification />
          <Experience />
          <Project projects={projects} />
          <Contact />
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
};

export default App;
