import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Experience";
import CounterSection from "./Components/CounterSection";
import ContactSection from "./Components/ContactUs";
import Footer from "./Components/Footer";
// import ChatBot from "./Components/Chat";
import RagChatBot from "./Components/RagChatBot.jsx";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Hero></Hero>
    <main id="main">
      <AboutUs></AboutUs>
      <Services></Services>
      <CounterSection></CounterSection>
      <ContactSection></ContactSection>
      <RagChatBot />
    </main>
    <Footer></Footer>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
