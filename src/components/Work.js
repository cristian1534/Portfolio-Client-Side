import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/it-devs.png";
import Img2 from "../assets/nico.png";
import Img3 from "../assets/hna.png";
import Img4 from "../assets/segur-app.png";
import Img5 from "../assets/backend-ong.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work.
              </h2>
              <p className="max-w mb-16">Check my Github for all Frontend, Backend and DevOps projects.
              </p>
              <a href="https://github.com/cristian1534" target="_blank" rel="noreferrer">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolutez-40 transition-all duration-300">
                  <img
                    src={Img1}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                  <a href="https://www.it-devs.tech" target="_blank" rel="noreferrer">
                  <span className="text-gradient">WWW.IT-DEVS.TECH</span>
                  </a>
                    <div>
                      <span className="text-3xl text-white">
                        Personal Freelance Website
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolutez-40 transition-all duration-300">
                  <img
                    src={Img4}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                  <a href="https://www.segur-app.netlify.app/" target="_blank" rel="noreferrer">
                  <span className="text-gradient uppercase">WWW.SEGUR-APP.netlify</span>
                  </a>
                    <div>
                      <span className="text-3xl text-white">
                        Security service.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolutez-40 transition-all duration-300">
                  <img
                    src={Img2}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                  <a href="https://nicocandiotifit.com/" target="_blank" rel="noreferrer">
                    <span className="text-gradient">NICO-FIT</span>
                    </a>
                    <div>
                      <span className="text-3xl text-white">
                        Website with Paid video classes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 mt-5"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolutez-40 transition-all duration-300">
                  <img
                    src={Img3}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                    <span className="text-gradient">E-E</span>
                    <div>
                      <span className="text-3xl text-white">
                        Personal Training with backoffice
                      </span>
                      <p>Deployment in progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
              style={{marginTop:"3rem"}}
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolutez-40 transition-all duration-300">
                  <img
                    src={Img5}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-14 group-hover:bottom-10 group-hover:bg-black/90 group-hover:rounded group-hover:p-3 transition-all duration-700 z-50">
                  <a href="https://www.backend-ong-service.onrender.com/api/v1/docs/" target="_blank" rel="noreferrer">
                    <span className="text-gradient">BACKEND MICROSERVICIOS</span>
                    </a>
                    <div>
                      <span className="text-3xl text-white">
                        No Country
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
