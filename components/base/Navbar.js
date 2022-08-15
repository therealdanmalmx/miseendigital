import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../utils";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
      <div className="app__navbar-logo w-7/12 cursor-pointer md:w-1/5">
        <Link href="/">
          {isScrolled ? (
            <Image
              src={images.logoBlack}
              alt="Mis en Digital logo in black"
              width={250}
              height={31}
              layout="responsive"
            />
          ) : (
            <Image
              src={images.logoWhite}
              alt="Mis en Digital logo in white"
              width={250}
              height={31}
              layout="responsive"
            />
          )}
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
              className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-start bg-secondary-color p-4 text-center"
              animate={{ y: [-50, 0] }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <HiX
                className="absolute right-4 top-4 h-6 w-6 text-white"
                onClick={() => setToggle(false)}
              />
              <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between md:px-8 xl:px-80">
                <ul className="text-left">
                  {["Home", "Services", "Works", "Contacts"].map((item) => (
                    <Link
                      passHref
                      key={item}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    >
                      <li className="m-4">
                        <a
                          className="leading-{3rem} text-5xl font-bold uppercase text-white hover:text-primary-color md:text-7xl"
                          onClick={() => setToggle(false)}
                        >
                          {item}
                        </a>
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="flex flex-col md:items-start">
                  <div className="hidden text-left md:block md:pb-5">
                    <p className="text-white">Tel. +351 912 658 932</p>
                    <p className="text-white">hello@miseendigital.com</p>
                  </div>
                  <div className="app__footer-social ml-5 flex justify-start pt-5 pb-5 md:ml-0 md:pt-0">
                    <div className="group">
                      <a
                        href=""
                        className="mr-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out group-hover:bg-primary-color"
                      >
                        <FaInstagram className="text-secondary-color group-hover:text-white" />
                      </a>
                    </div>
                    <div className="group">
                      <a
                        href=""
                        className="mr-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out group-hover:bg-primary-color"
                      >
                        <FaTwitter className="text-secondary-color group-hover:text-white" />
                      </a>
                    </div>
                    <div className="group">
                      <a
                        href=""
                        className="mr-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out group-hover:bg-primary-color"
                      >
                        <FaLinkedinIn className="text-secondary-color  group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                  <button className="mt-7 bg-primary-color transition duration-300 ease-in-out hover:bg-white hover:text-black">
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
