import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = (name) => {
    toast(`Thank you ${name}, I will answer your message soon!`);
  };

  const onSubmit = async (contact) => {
    setContact({ ...contact, contact });
    await axios
      .post(
        "https://portfolio-backend-service-8k8u.onrender.com/create-message",
        contact
      )
      .then(() => {
        notify(contact.name);
        document.getElementById("form").reset();
      });
  };

  return (
    <section className="py-16 lg:section mt-12" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work
                <br />
                together!
              </h2>
            </div>
          </motion.div>
          <form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit(onSubmit)}
            id="form"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.name && (
              <span className="text-fuchsia-600">{errors.name.message}</span>
            )}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "This email is wrong",
                },
              })}
            />
            {errors.email && (
              <span className="text-fuchsia-600">{errors.email.message}</span>
            )}
            <textarea
              className="bg-transparent border-b py-3 resize-none mb-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your message"
              name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="text-fuchsia-600">{errors.message.message}</span>
            )}
            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              pauseOnHover={false}
              transition={Slide}
              hideProgressBar={false}
              closeOnClick={true}
              limit={5}
              theme="dark"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
