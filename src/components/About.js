import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-6">
              Im a freelancer Fullstack Dev with DevOps culture.
            </h3>
            <p className="text-center">
              My name is Cristian, fanatic of Software Development with 3 years
              of experience now <br />
              During my career I have done Bootcamps, University Diplomas, and
              several courses regarding <br />
              MERN stack, Python and DevOps culture, I have been part of many
              development teams working under
              <br />
              SCRUM culture reaching all goals required. Nowadays expecting new
              challenges, I look forward to <br />
              hear from your offering. Let's work together!!!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 mt-4">
                  {inView ? <CountUp start={0} end={3} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  experience <br />
                  Frontend
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 mt-4">
                  {inView ? <CountUp start={0} end={3} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  experience
                  <br />
                  Backend
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 mt-4">
                  {inView ? <CountUp start={0} end={1} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  experience
                  <br />
                  DevOPs
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <Link to="contact">
                  <button className="btn btn-lg">Contact me</button>
                </Link>
                <a
                  href="https://www.linkedin.com/mwlite/in/cristian-machuca-8883a01b2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gradient btn-link"
                >
                  My Linkedln
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
