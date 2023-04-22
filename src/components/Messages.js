import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { BiTrash } from "react-icons/bi";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Messages = ({ messages }) => {
  const handle_delete = async (id) => {
    await axios
      .delete(
        `https://portfolio-backend-service-8k8u.onrender.com/delete-message/${id}`
      )
      .then(() => notify());
  };

  const notify = () => {
    toast.success("Message deleted successfully.");
  };

  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-5 text-[36px] lg:text-[60px] font-primary font-semibold leading-[-1] text-center"
      >
        <TypeAnimation
          sequence={["Welcome", 2000, "to", 2000, "BackOffice", 2000]}
          speed={50}
          className="text-gradient  "
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
      <table className="table container mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        {messages.map((msg) => (
          <tbody key={msg._id}>
            <tr>
              <td data-label="Name" className="h3">
                {msg.name}
              </td>
              <td data-label="Email" className="h3">
                {msg.email}
              </td>
              <td data-label="Message">{msg.message}</td>
              <td data-label="Delete">
                <button
                  className="btn btn-sm"
                  onClick={() => handle_delete(msg._id)}
                >
                  <BiTrash />
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
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Messages;
