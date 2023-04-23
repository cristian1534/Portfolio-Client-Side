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

const Home = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Stack />
      <Services />
      <Work />
      <Contact />
      <Footer/>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Home;
