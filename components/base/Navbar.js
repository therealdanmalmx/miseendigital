import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../utils";
import Image from 'next/image'
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  return (
    <nav
      className={`app__navbar sticky top-0 left-0 z-10 flex h-[80px] w-full items-center justify-between border-b-[1px] border-white px-8 py-14 backdrop-blur-sm transition-all duration-200
    ${isScrolled ? "bg-white" : "bg-secondary-color/100"}`}
    >
      <div className="app__navbar-logo cursor-pointer w-7/12 md:w-1/5">
        <Link href="/">
          {isScrolled ?
            <Image
              src={images.logoBlack}
              width={250}
              height={31}
              layout="responsive"
            />
          :
            <Image
              src={images.logoWhite}
              width={250}
              height={31}
              layout="responsive"
            />
          }
        </Link>
      </div>
      <div className="flex items-center">
        <div
          className={`mr-4 font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Menu
        </div>
        <div className="app__navbar-menu relative flex h-9 w-9 cursor-pointer items-center justify-center bg-primary-color">
          <HiMenuAlt4
            className="h-6 w-6 text-white"
            onClick={() => setToggle(true)}
          />

          {toggle && (
            <motion.div
              className="fixed top-0 bottom-0 right-0 z-10 flex h-screen w-full items-center justify-start bg-secondary-color p-4 text-center"
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX
                className="absolute right-4 top-4 h-6 w-6 text-white"
                onClick={() => setToggle(false)}
              />
              <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between lg:px-80">
                <ul className="text-left">
                  {["Home", "Services", "Works", "Contacts"].map((item) => (
                    <Link
                      passHref
                      key={item}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    >
                      <li className="m-4">
                        <a
                          className="text-5xl md:text-7xl font-bold leading-{3rem} uppercase text-white hover:text-primary-color"
                          onClick={() => setToggle(false)}
                        >
                          {item}
                        </a>
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="flex flex-col md:items-start">
                  <div className="text-left md:pb-5 hidden md:block">
                    <p className="text-white">Tel. +351 912 658 932</p>
                    <p className="text-white">hello@miseendigital.com</p>
                  </div>
                  <div className="app__footer-social flex justify-start ml-5 pt-5 md:pt-0 pb-5 md:ml-0">
                    <div className="group">
                      <a
                        href=""
                        className="mr-2 flex w-7 h-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out group-hover:bg-primary-color"
                      >
                        <FaInstagram className="text-secondary-color group-hover:text-white" />
                      </a>
                    </div>
                    <div className="group">
                    <a
                      href=""
                      className="mr-2 flex w-7 h-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out group-hover:bg-primary-color"
                    >
                      <FaTwitter className="text-secondary-color group-hover:text-white" />
                    </a>
                    </div>
                    <div className="group">
                      <a
                        href=""
                        className="mr-2 flex w-7 h-7 cursor-pointer items-center justify-center rounded-full duration-300 ease-in-out bg-white group-hover:bg-primary-color"
                      >
                        <FaLinkedinIn className="text-secondary-color  group-hover:text-white" />
                      </a>
                  </div>
                  </div>
                  <button className="bg-primary-color mt-7 transition duration-300 ease-in-out hover:bg-white hover:text-black">
                    Get in touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
