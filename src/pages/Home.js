import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Stack from "../components/Stack";
import Footer from "../components/Footer";

const cardsData = [
  {
    imgSrc: require("../assets/it-devs.png"),
    title: "WWW.IT-DEVS.TECH",
    description: "Personal Freelance Website",
    url: "https://it-devs.tech",
  },
  {
    imgSrc: require("../assets/segur-app.png"),
    title: "WWW.SEGUR-APP.netlify",
    description: "Security Service.",
    url: "https:/segur-app.netlify.app/",
  },
  {
    imgSrc: require("../assets/nico.png"),
    title: "NICO-FIT",
    description: "Website with Paid video classes",
    url: "https://nicocandiotifit.com/",
  },
  {
    imgSrc: require("../assets/hna.png"),
    title: "E-E",
    description: "Personal Training with Backoffice",
    status: "Deployment in progress",
  },
  {
    imgSrc: require("../assets/backend-ong.png"),
    title: "BACKEND MICROSERVICIOS",
    description: "No Country REST API Service Project",
    url: "https://backend-ong-service.onrender.com/api/v1/docs",
  },
  {
    imgSrc: require("../assets/chatroom.png"),
    title: "Student's Chatroom",
    description: "Service for E-Learning Plataform Project",
    url: "https://chatroom-service.onrender.com/",
  },{
    imgSrc: require("../assets/walletClient.png"),
    title: "Virtual Wallet Client",
    description: "Microservice Client for Virtual Wallet",
    url: "https://pinguiwallet.netlify.app",
  },
  {
    imgSrc:require("../assets/walletServer.png"),
    title: "Virtual Wallet Server",
    description: "Microservice Backend for Virtual Wallet",
    url: "https://rest-api-wallet-no-country-production.up.railway.app/",
  },
  {
    imgSrc:require("../assets/jobs.png"),
    title: "Jobs Site",
    description: "Website for Candidates Workers Profiles",
    url: "https://job-site-chi.vercel.app/",
  },
  {
    imgSrc: require("../assets/enlace.png"),
    title: "ENLACE-ONG",
    description: "No Country ENLACE-ONG Jobs Project",
    url: "https://enlace-ong.vercel.app/",
  }
];

const Home = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Stack />
      <Services />
      <Work cardsData={cardsData} />
      <Contact />
      <Footer />
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Home;
