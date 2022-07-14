import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../utils";
import { urlFor, client } from "../../client";
import { HiOutlineX } from "react-icons/hi";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const formValidation = (e) => {
    e.preventDefault();
    console.log({ errorMessage });
    if (!formData.message) {
      setErrorMessage("A message is required");
      const message = document.querySelector("textarea");
      message.style.border = "2px solid #DC2638";
      message.addEventListener("keydown", () => {
        clearErrorMessage();
      });
    }
    if (!formData.email) {
      setErrorMessage("E-mail is required");
      const email = document.querySelector('input[name = "email"]');
      email.style.border = "2px solid #DC2638";
      email.addEventListener("keydown", () => {
        clearErrorMessage();
      });
    }
    if (!formData.name) {
      setErrorMessage("Your name is required");
      const name = document.querySelector('input[name = "name"]');
      name.style.border = "2px solid #DC2638";
      name.addEventListener("keydown", () => {
        clearErrorMessage();
      });
    }
    if (!formData.message && !formData.name && !formData.email) {
      document
        .querySelectorAll("input")
        .forEach((el) => (el.style.border = "2px solid #DC2638"));
      document.querySelector("textarea").style.border = "2px solid #DC2638";
      setErrorMessage("Please fill in all required fields");
    }
    if (formData && formData.name && formData.email && formData.message) {
      handleSubmit();
    }
  };

  const clearErrorMessage = () => {
    document
      .querySelectorAll("input")
      .forEach((el) => (el.style.border = "2px solid grey"));
    document.querySelector("textarea").style.border = "2px solid grey";
    setErrorMessage("");
  };

  console.log("formData", formData.name);

  const handleSubmit = () => {
    setErrorMessage("");
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
      <h1 className="mb-4 pl-16 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
        <span className="text-white">Contacts</span>
      </h1>
      <p className="mb-8 pl-16 text-lg text-white text-left">
      Lorem ipsum dolor sit amet, duo summo recteque repudiandae ea. Ea utinam accommodare pri, <br />
      an duo explicari interesset theophrastus, eu munere nonumes delicatissimi duo. 
      </p>
    </div>

    <div className="app__contact w-full flex-1 flex-col py-28">
      <h1 className="app__contact-head-text mb-5 flex-1 flex-col text-center font-bold md:text-5xl">
        Get in touch with us
      </h1>
      {!isFormSubmitted ? (
        <form
          noValidate
          onSubmit={formValidation}
          className="app__contact-form flex w-full flex-col items-center"
        >
          <div className="mb-4 flex w-full px-4 md:w-[50%]">
            <input
              className="w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              required
              minLength="10"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-4 flex w-full px-4 md:w-[50%]">
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
          <div className="flex w-full px-4 md:w-[50%]">
            <textarea
              className="h-[150px] w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              placeholder="Your Message"
              value={message}
              name="message"
              type="textarea"
              required
              minLength="50"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex w-full px-4 md:w-[50%] mt-3 mb-3">
            <label className="flex">
                <input 
                  type="checkbox" 
                  className="w-5 h-5"
                  checked={checked}
                  onChange={handleChange}
                />
                <p className="pl-2">I have read and accept the privacy policy</p>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 bg-primary-color text-lg text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
            // onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
      {errorMessage && (
        <div className="px-4 duration-1000 ease-in-out">
          <div className="mx-auto mt-4 w-full md:w-1/2 md:p-4">
            <p className="relative underline-color flex items-center justify-between text-left text-xl leading-10 bg-warning-color text-white md:justify-center">
              {errorMessage}
              <span
                className="cursor-pointer text-white absolute right-4"
                onClick={() => clearErrorMessage("")}
              >
                <HiOutlineX className="h-6 w-6 text-white md:ml-8" />
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Contacts;
