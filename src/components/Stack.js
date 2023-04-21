import React from "react";
import {
  SiAnsible,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiJest,
  SiMocha,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Stack = () => {
  return (
    <section id="stack">
      <div className="container mx-auto mb-10">
        <h1 className="h1 uppercase text-gradient mb-5">
          My favorite stack to work !
        </h1>
        <span>
          These are some of the tech I enjoy working with. A good stack is the
          most important when I am working for my clients.
        </span>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="slider"
        >
          <div className="slide-track">
            <div className="slide container">
              <SiReact color="violet " size={50} />
              <span className="text-gradient">React</span>
            </div>
            <div className="slide">
              <SiRedux color="violet " size={50} />
              <span className="text-gradient">Redux</span>
            </div>
            <div className="slide">
              <SiNodedotjs color="violet " size={50} />
              <span className="text-gradient">Node</span>
            </div>
            <div className="slide">
              <SiExpress color="violet " size={50} />
              <span className="text-gradient">Express</span>
            </div>
            <div className="slide">
              <SiMongodb color="violet " size={50} />
              <span className="text-gradient">Mongo</span>
            </div>
            <div className="slide">
              <SiPython color="violet" size={50} />
              <span className="text-gradient">Python</span>
            </div>
            <div className="slide">
              <SiPostgresql color="violet" size={50} />
              <span className="text-gradient">Postgresql</span>
            </div>
            <div className="slide">
              <SiJest color="violet" size={50} />
              <span className="text-gradient">Jest</span>
            </div>
            <div className="slide">
              <SiMocha color="violet " size={50} />
              <span className="text-gradient">Mocha</span>
            </div>
            <div className="slide">
              <SiDocker color="violet" size={50} />
              <span className="text-gradient">Docker</span>
            </div>
            <div className="slide">
              <SiGit color="violet " size={50} />
              <span className="text-gradient">Git</span>
            </div>
            <div className="slide">
              <SiGithubactions color="violet " size={50} />
              <span className="text-gradient">Github Actions</span>
            </div>
            <div className="slide">
              <SiAnsible color="violet " size={50} />
              <span className="text-gradient">Ansible</span>
            </div>
            <div className="slide">
              <SiJenkins color="violet " size={50} />
              <span className="text-gradient">Jenkins</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
