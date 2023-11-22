import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Location from "./components/Location/Location";
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
import BtrackerImg from "./assets/budget.png"

const App = () => {
  const projects = [
    {
      
      id: 1,
      image: BtrackerImg,
      title: "Budget Tracker",
      description:
        "A straightforward Expense Management System built with MERN Stack, enabling users to easily track their income and expenses through a simple login interface.",
      liveDemo: "https://income-expense-tracker.cyclic.app/",
      github: "https://github.com/AsHim1123/Budget-Tracker-login-Mern",
    },   
    {
      id: 2,
      image: tictactoeImg,
      title: "Tic Tac Toe",
      description:
        "Enjoy the classic game of Tic Tac Toe with this interactive and engaging web version built using HTML, CSS, and JavaScript. Challenge your friends or test your strategic skills against the computer in this timeless battle for victory!",
      liveDemo: "https://ashim1123.github.io/tic_tac_toe-game/",
      github: "https://github.com/AsHim1123/tic_tac_toe-game",
    },
    {
      id: 3,
      image: budgetcalcImg,
      title: "Budget Calculator",
      description: "An intuitive React-based budget calculator for efficient financial management.",
      liveDemo: " https://ashim1123.github.io/Budget-Calculator/",
      github: "https://github.com/AsHim1123/Budget-Calculator",
    },
    {
      id: 4,
      image: notesAppImg,
      title: "Notes App",
      description: "A sleek and versatile HTML/CSS/JS note app for organizing thoughts and tasks effortlessly.",
      liveDemo: "https://ashim1123.github.io/Note-App/",
      github: "https://github.com/AsHim1123/Note-App",
    },
    {
      id: 5,
      image: TodoImg,
      title: "To-Do List",
      description: "A user-friendly HTML/CSS/JS to-do list app for efficient task management and productivity.",
      liveDemo: "https://ashim1123.github.io/To-Do-List-App/",
      github: "https://github.com/AsHim1123/To-Do-List-App",
    },
    {
      id: 6,
      image: calcImg,
      title: "Calculator",
      description: "A feature-rich HTML/CSS/JS calculator app for quick and accurate mathematical calculations.",
      liveDemo: "https://ashim1123.github.io/Calculator/",
      github: "https://github.com/AsHim1123/Calculator",
    },
    {
      id: 7,
      image: rpsImg,
      title: "Rock Paper Scissors",
      description: "An interactive HTML/CSS/JS rock paper scissors game for fun and competitive decision-making.",
      liveDemo: "https://ashim1123.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/AsHim1123/Rock-Paper-Scissors",
    },
    {
      id: 8,
      image: bmiImg,
      title: "BMI Calculator",
      description: "A user-friendly HTML/CSS/JS BMI calculator app for assessing and tracking body mass index easily.",
      liveDemo: "https://ashim1123.github.io/BMI-Calculator/",
      github: "https://github.com/AsHim1123/BMI-Calculator",
    },
    {
      id: 9,
      image: PassImg,
      title: "Random Password Generator",
      description:
        "A robust HTML/CSS/JS random password generator app that creates strong and secure passwords with customizable length and character options.",
      liveDemo: "https://ashim1123.github.io/Random-Password-Generator/",
      github: "https://github.com/AsHim1123/Random-Password-Generator1",
    },
    {
      id: 10,
      image: TempImg,
      title: "Temperature Converter",
      description: "A temperature converter made by HTML, CSS and JavaScript",
      liveDemo: " https://ashim1123.github.io/Temperature-Converter/",
      github: "https://github.com/AsHim1123/Temperature-Converter",
    },
    {
      id: 11,
      image: TodoImg,
      title: "To-Do React App",
      description: "A To-Do React Application made by React and using Bootstrap.",
      liveDemo: "https://ashimshrestha-todo.netlify.app/",
      github: "https://github.com/AsHim1123/To-Do-React-App",
    },
    {
      id: 12,
      image: QRImg,
      title: "QR Code Generator",
      description:
        "Make your QR code yourself just by pasting the URL or any text using this HTML/CSS/JS based QR Code Generator.",
      liveDemo: "https://ashim1123.github.io/QR-Code-Generator/",
      github: " https://github.com/AsHim1123/QR-Code-Generator",
    },
    {
      id: 13,
      image: TextUImg,
      title: "Text Utils React App",
      description: "Customize your texts and paragraphs through this React based Text Utils Application.",
      liveDemo: "https://urtextutils.netlify.app/",
      github: "https://github.com/AsHim1123/Text-Utils-React",
    },
    {
      id: 14,
      image: WeatherImg,
      title: "Weather App",
      description: "Stay prepared with real-time weather updates at your fingertips using this weather app.",
      liveDemo: " https://ashim1123.github.io/Weather-App/",
      github: "https://github.com/AsHim1123/Weather-App",
    },
    {
      id: 15,
      image: DiceImg,
      title: "Dice Roll Simulator",
      description: "Roll the virtual dice and let chance decide your fate.",
      liveDemo: "https://ashim1123.github.io/Dice-Roll/",
      github: "https://github.com/AsHim1123/Dice-Roll",
    },
    {
      id: 16,
      image: DictionaryImg,
      title: "Dictionary",
      description: "Find the meaning of words from API based dictionary app. ",
      liveDemo: "https://ashim1123.github.io/Dictionary/",
      github: "https://github.com/AsHim1123/Dictionary",
    },
  ];
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Qualification />
      <Experience />
      <Project projects={projects} />
      <Contact />
      <Location />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
