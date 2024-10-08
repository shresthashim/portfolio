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
import tictactoeImg from "./assets/tictactoe.jpg";
import budgetcalcImg from "./assets/budgetcalc.png";
import notesAppImg from "./assets/notes.png";
import TodoImg from "./assets/todo.png";
import calcImg from "./assets/calc.png";
import rpsImg from "./assets/rps.png";
import bmiImg from "./assets/bmi.png";
import PassImg from "./assets/pass.png";
import TempImg from "./assets/temp.png";
import QRImg from "./assets/QR.png";
import TextUImg from "./assets/textutils.png";
import WeatherImg from "./assets/weather.png";
import DiceImg from "./assets/dice.png";
import DictionaryImg from "./assets/dictionary.png";
import BtrackerImg from "./assets/budget.png";
import chathubImg from "./assets/chathub.png";
import ThreeDPortfolioImg from "./assets/ThreeDPortfolio.png";
import googleImg from "./assets/google.png";
import moviehubImg from "./assets/moviehub.png";
import { ClimbingBoxLoader } from "react-spinners";

const App = () => {
  const projects = [
    {
      id: 1,
      image: moviehubImg,
      title: "MovieHub",
      description:
        "A movie database website showcasing the latest and popular movies. Built with Next Js and Tailwind CSS, this app features a search bar, a watchlist, and a movie detail page.",
      liveDemo: "https://moviehub-app.vercel.app/",
      github: "https://github.com/shresthashim/moviehub",
    },
    {
      id: 2,
      image: BtrackerImg,
      title: "Budget Tracker",
      description:
        "A straightforward Expense Management System built with MERN Stack, enabling users to easily track their income and expenses through a simple login interface.",
      liveDemo: "https://income-expense-tracker.cyclic.app/",
      github: "https://github.com/shresthashim/Budget-Tracker-login-Mern",
    },
    {
      id: 3,
      image: ThreeDPortfolioImg,
      title: "My 3d Portfolio",
      description: "A 3D portfolio website built with Vite and Three.js.",
      liveDemo: "https://shresthashim.github.io/3d-portfolio",
      github: "https://github.com/shresthashim/Google-Clone-NextJs14",
    },
    {
      id: 4,
      image: googleImg,
      title: "Google Clone",
      description: "A clone of google made by Next JS 14 using app router and styling by Tailwilnd Css. Deployed in vercel.",
      liveDemo: "https://google-clone-nextjs-14.vercel.app/",
      github: "https://github.com/shresthashim/Google-Clone-NextJs14",
    },

    {
      id: 5,
      image: chathubImg,
      title: "ChatHub",
      description:
        "ChatHub, a MERN stack-powered chat app with Socket.IO integration, delivers instant messaging, responsive design, secure authentication. Deployed in Vercel.",
      liveDemo: "https://yourchathub.vercel.app/",
      github: "https://github.com/shresthashim/chat-app",
    },
    {
      id: 6,
      image: tictactoeImg,
      title: "Tic Tac Toe",
      description:
        "Enjoy the classic game of Tic Tac Toe with this interactive and engaging web version built using HTML, CSS, and JavaScript. Challenge your friends or test your strategic skills against the computer in this timeless battle for victory!",
      liveDemo: "https://shresthashim.github.io/tic_tac_toe-game/",
      github: "https://github.com/shresthashim/tic_tac_toe-game",
    },
    {
      id: 7,
      image: budgetcalcImg,
      title: "Budget Calculator",
      description: "An intuitive React-based budget calculator for efficient financial management.",
      liveDemo: " https://shresthashim.github.io/Budget-Calculator/",
      github: "https://github.com/shresthashim/Budget-Calculator",
    },
    {
      id: 8,
      image: notesAppImg,
      title: "Notes App",
      description: "A sleek and versatile HTML/CSS/JS note app for organizing thoughts and tasks effortlessly.",
      liveDemo: "https://shresthashim.github.io/Note-App/",
      github: "https://github.com/shresthashim/Note-App",
    },
    {
      id: 9,
      image: TodoImg,
      title: "To-Do List",
      description: "A user-friendly HTML/CSS/JS to-do list app for efficient task management and productivity.",
      liveDemo: "https://shresthashim.github.io/To-Do-List-App/",
      github: "https://github.com/shresthashim/To-Do-List-App",
    },
    {
      id: 10,
      image: calcImg,
      title: "Calculator",
      description: "A feature-rich HTML/CSS/JS calculator app for quick and accurate mathematical calculations.",
      liveDemo: "https://shresthashim.github.io/Calculator/",
      github: "https://github.com/shresthashim/Calculator",
    },
    {
      id: 11,
      image: rpsImg,
      title: "Rock Paper Scissors",
      description: "An interactive HTML/CSS/JS rock paper scissors game for fun and competitive decision-making.",
      liveDemo: "https://shresthashim.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/shresthashim/Rock-Paper-Scissors",
    },
    {
      id: 12,
      image: bmiImg,
      title: "BMI Calculator",
      description: "A user-friendly HTML/CSS/JS BMI calculator app for assessing and tracking body mass index easily.",
      liveDemo: "https://shresthashim.github.io/BMI-Calculator/",
      github: "https://github.com/shresthashim/BMI-Calculator",
    },
    {
      id: 13,
      image: PassImg,
      title: "Random Password Generator",
      description:
        "A robust HTML/CSS/JS random password generator app that creates strong and secure passwords with customizable length and character options.",
      liveDemo: "https://shresthashim.github.io/Random-Password-Generator/",
      github: "https://github.com/shresthashim/Random-Password-Generator1",
    },
    {
      id: 14,
      image: TempImg,
      title: "Temperature Converter",
      description: "A temperature converter made by HTML, CSS and JavaScript",
      liveDemo: " https://shresthashim.github.io/Temperature-Converter/",
      github: "https://github.com/shresthashim/Temperature-Converter",
    },
    {
      id: 15,
      image: TodoImg,
      title: "To-Do React App",
      description: "A To-Do React Application made by React and using Bootstrap.",
      liveDemo: "https://ashimshrestha-todo.netlify.app/",
      github: "https://github.com/shresthashim/To-Do-React-App",
    },
    {
      id: 16,
      image: QRImg,
      title: "QR Code Generator",
      description:
        "Make your QR code yourself just by pasting the URL or any text using this HTML/CSS/JS based QR Code Generator.",
      liveDemo: "https://shresthashim.github.io/QR-Code-Generator/",
      github: " https://github.com/shresthashim/QR-Code-Generator",
    },
    {
      id: 17,
      image: TextUImg,
      title: "Text Utils React App",
      description: "Customize your texts and paragraphs through this React based Text Utils Application.",
      liveDemo: "https://urtextutils.netlify.app/",
      github: "https://github.com/shresthashim/Text-Utils-React",
    },
    {
      id: 18,
      image: WeatherImg,
      title: "Weather App",
      description: "Stay prepared with real-time weather updates at your fingertips using this weather app.",
      liveDemo: " https://shresthashim.github.io/Weather-App/",
      github: "https://github.com/shresthashim/Weather-App",
    },
    {
      id: 19,
      image: DiceImg,
      title: "Dice Roll Simulator",
      description: "Roll the virtual dice and let chance decide your fate.",
      liveDemo: "https://shresthashim.github.io/Dice-Roll/",
      github: "https://github.com/shresthashim/Dice-Roll",
    },
    {
      id: 20,
      image: DictionaryImg,
      title: "Dictionary",
      description: "Find the meaning of words from API based dictionary app. ",
      liveDemo: "https://shresthashim.github.io/Dictionary/",
      github: "https://github.com/shresthashim/Dictionary",
    },
  ];
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
