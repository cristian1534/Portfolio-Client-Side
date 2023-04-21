import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Development",
    description: "Freelance Fullstack Development for your Project.",
    link: "Learn more",
  },
  {
    name: "DevOps",
    description: "Freelance DevOps service for your Projects..",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Freelance Development applying the latest DevOps technologies.
            </h3>
            <a
              href="https://www.it-devs.tech/presupuesto"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-sm">Calculate your Cost</button>
            </a>
          </motion.div>
          <div className="flex-1">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              {services.map((svc, index) => {
                const { name, description, link } = svc;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex-1"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                    </div>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="https://www.t-devs.tech/servicios"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="https://www.it-devs.tech/servicios"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
