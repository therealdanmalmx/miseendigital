import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "./../utils";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar bg-slate-50 border-slate-100 sticky top-0 z-10 flex w-full items-center justify-between px-8 py-4 backdrop-blur-sm">
      <div className="app__navbar-logo flex items-center justify-start ">
        <Image width={90} height={90} src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links flex flex-1 items-center justify-center">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="mx-4 cursor-pointer flex-col text-center"
            key={`link-${item}`}
          >
            <div className="bg-transparent mb-1 h-1 w-1 rounded-full" />
            <a
              className="text-gray-600 flex-col font-medium uppercase duration-300 ease-in-out hover:text-primary-color"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu relative flex h-9 w-9 items-center justify-center rounded-full bg-primary-color sm:hidden">
        <HiMenuAlt4
          className="h-6 w-6 text-white"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-10 h-screen w-3/6 bg-white p-4 sm:hidden"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              className="absolute right-4 h-6 w-6 text-black"
              onClick={() => setToggle(false)}
            />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li className="m-4" key={item}>
                  <a
                    className="font-bold uppercase text-primary-color"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
