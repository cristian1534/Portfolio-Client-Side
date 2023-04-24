import React from "react";
import Image from "../assets/Avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="min-h[85vh] lg:min-h[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-6"
            >
              CRISTIAN <span>Machuca</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[-1]"
            >
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "with",
                  2000,
                  "DevOps Culture",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Welcome to my Web Portfolio.
            </motion.p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact">
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a
                href="https://www.linkedin.com/in/cristian-machuca-8883a01b2/"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                My Linkedln
              </a>
            </div>
            <div className="flex text-[-20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.github.com/cristian1534">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/mwlite/in/cristian-machuca-8883a01b2">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              src={Image}
              alt="cristian-banner"
              width={450}
              className="rounded"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
