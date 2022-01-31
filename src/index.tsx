import React from "react";
import ReactDOM from "react-dom";
import AppDownload from "./Components/AppDownload";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HowWork from "./Components/HowWork";
import MainSection from "./Components/MainSection";
import Plans from "./Components/Plans";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainSection />
    <HowWork />
    <AppDownload />
    <Plans />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
