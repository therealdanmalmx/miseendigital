import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../utils";
import { urlFor, client } from "../../client";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "Contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="app__contact w-full flex-1 flex-col py-28">
      <h1 className="app__contact-head-text mb-5 w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Get in touch with us
      </h1>
      {!isFormSubmitted ? (
        <div className="app__contact-form flex w-full flex-col items-center">
          <div className="mb-4 flex w-full px-5 md:w-[50%]">
            <input
              className="w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-4 flex w-full px-5 md:w-[50%]">
            <input
              className="w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              type="text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex w-full px-5 md:w-[50%]">
            <textarea
              className="h-[150px] w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="mt-5 bg-primary-color text-lg text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default Contacts;
