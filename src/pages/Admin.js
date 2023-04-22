import React, { useEffect, useState } from "react";
import Messages from "../components/Messages";
import Logo from "../assets/logo.png";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  const fetch_messages = async () => {
    const { data } = await axios.get(
      "https://portfolio-backend-service-8k8u.onrender.com/get-messages"
    );
    setMessages(data);
  };
  useEffect(() => {
    fetch_messages();
  }, []);

  return (
    <section className="bg-site bg-site bg-no-repeat bg-cover overflow-hidden">
      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="/">
              <img src={Logo} alt="" width={90} className="mx-auto" />
            </a>
            <button className="btn btn-sm">Logout</button>
          </div>
        </div>
      </div>
      <Messages messages={messages} />
      <div className="h-[80vh]"></div>
    </section>
  );
};

export default Admin;
