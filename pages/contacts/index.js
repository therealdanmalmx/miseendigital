import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../utils";
import { urlFor, client } from "../../client";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import Footer from "../../components/base/Footer";

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
    <>
    <div className="app__hero flex h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-cover bg-center" style={{backgroundImage: `url(${images.sample.src})`}}>
      <h1 className="mb-4 ml-16 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
        <span className="text-white">Contacts</span>
      </h1>
      <p className="mb-8 ml-16 text-lg text-white text-left">
        Lorem ipsum dolor sit amet, duo summo recteque repudiandae ea. Ea utinam accommodare pri, <br />
        an duo explicari interesset theophrastus, eu munere nonumes delicatissimi duo. 
      </p>

      <div className="flex">

      <div className="ml-16 flex items-center">
        <FaPhoneAlt className="text-white text-3xl mr-5"/>
        <div className="flex flex-col">
         <h6 className="text-white opacity-75 uppercase text-base mr-5">Phone</h6>
         <p className="text-white text-2xl">912 658 932</p>
        </div>
      </div>

      <div className="ml-16 flex items-center">
        <FaRegEnvelope className="text-white text-3xl mr-5"/>
        <div className="flex flex-col">
         <h6 className="text-white opacity-75 uppercase text-base mr-5">E-MAIL</h6>
         <p className="text-white text-2xl">geral@domain.com</p>
        </div>
      </div>
      </div>

    </div>

    <div className="app__contact w-full flex-1 flex-col py-28">
      <h1 className="app__contact-head-text mb-5 w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Get in touch with us
      </h1>
      {!isFormSubmitted ? (
        <form className="app__contact-form flex w-full flex-col items-center">
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
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              required
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
        </form>
      ) : (
        <div>
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Contacts;
