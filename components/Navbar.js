import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 150) {
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
      className={`app__navbar fixed top-0 left-0 z-10 flex h-[80px] w-full items-center justify-between border-b-[1px] border-white px-8 py-14 backdrop-blur-sm transition-all duration-200
    ${isScrolled ? "bg-white" : "bg-transparent"}`}
    >
      <div className="app__navbar-logo flex items-center justify-start ">
        <h1
          className={`mr-4 text-3xl font-bold sm:text-4xl 
          ${isScrolled ? "text-black" : "text-white"}`}
        >
          Brand.
        </h1>
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
              className="fixed top-0 bottom-0 right-0 z-10 flex h-screen w-full items-center justify-center bg-secondary-color p-4 text-center"
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX
                className="absolute right-4 top-4 h-6 w-6 text-white"
                onClick={() => setToggle(false)}
              />
              <ul className="">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Our Work",
                  "Contacts",
                ].map((item) => (
                  <Link
                    passHref
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  >
                    <li className="m-4" key={item}>
                      <a
                        className="text-6xl font-bold text-white hover:text-primary-color"
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
