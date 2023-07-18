import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = ({ cardsData }) => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest
              <br />
              Work.
            </h2>
            <p className="max-w mb-16">
              Check my Github for all Frontend, Backend and DevOps projects.
            </p>
            <a href="https://github.com/cristian1534" target="_blank" rel="noreferrer">
              <button className="btn btn-sm">View all projects</button>
            </a>
          </div>

          {/* Loop through the cardsData array to generate dynamic cards */}
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-40 sm:h-48 md:h-64 relative">
                  <img
                    src={card.imgSrc}
                    alt=""
                    className="group-hover:scale-125 absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                    <a href={card.url} target="_blank" rel="noreferrer">
                      <span className="text-gradient">{card.title}</span>
                    </a>
                    <div>
                      <span className="text-3xl text-white">{card.description}</span>
                      {/* You can add more information if needed */}
                      {card.status && <p className="text-white">{card.status}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
