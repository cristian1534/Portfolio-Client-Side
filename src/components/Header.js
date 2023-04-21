import React from "react";
import Logo from "../assets/logo.png";
import CV from "../assets/IT-CV-Cristian-2023.pdf";
const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" width={90} className="mx-auto" />
          </a>
          <a href={CV} download="IT-CV-Cristian-2023.pdf">
            <button className="btn btn-sm">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
