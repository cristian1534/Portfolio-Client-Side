import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [admin, setAdmin] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify_access = () => {
    toast.success("Welcome!");
  };

  

  const navigate = useNavigate();

  const onSubmit = async (admin) => {
   try{
    setAdmin({ ...admin, admin });
    await axios
      .post("https://portfolio-backend-service-8k8u.onrender.com/login", admin)
      .then((data) => {
        const { session_token } = data.data.authentication;
        localStorage.setItem("auth-admin", session_token);
        document.getElementById("form").reset();
        notify_access();
        navigate("/admin");
      })
   }catch(error) {
    return toast.error("Email or Password wrong.")
   }
   
  };

  return (
    <section className="py-16 lg:section bg-site " id="contact">
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
                Private Section
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                BackOffice
                <br />
                Login
              </h2>
            </div>
          </motion.div>
          <form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center"
            onSubmit={handleSubmit(onSubmit)}
            id="form"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="ADMIN email"
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
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="ADMIN password"
              password="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.password && (
              <span className="text-fuchsia-600">
                {errors.password.message}
              </span>
            )}

            <button type="submit" className="btn btn-lg w-full mt-5">
              Access
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

export default Login;
