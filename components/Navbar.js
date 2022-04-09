import { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY >= 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', changeBackground)
    });

  return (
    <nav className={`app__navbar fixed top-0 left-0 transition-all duration-200 w-full h-[80px] border-b-[1px] border-white flex justify-between items-center px-8 py-14 backdrop-blur-sm z-10
    ${isScrolled ? "bg-white" : "bg-transparent"}`} >
        <div className="app__navbar-logo flex justify-start items-center ">
            <h1 className={`text-3xl text-white font-bold mr-4 sm:text-4xl ${isScrolled ? "text-black" : "text-white"}`} >Brand.</h1>
        </div>
        <div className="flex items-center">
            <div class={`text-white font-bold mr-4 ${isScrolled ? "text-black" : "text-white"}`}>Menu</div> 
            <div className="app__navbar-menu cursor-pointer w-9 h-9 relative flex justify-center items-center bg-primary-color"> 
                <HiMenuAlt4 className="text-white w-6 h-6" onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div className="fixed text-center flex justify-center items-center top-0 bottom-0 right-0 z-10 p-4 w-full bg-secondary-color h-screen"
                        whileInView={{ y: [-100, 0]}}
                        transition={{ duration: 0.85, ease: 'easeOut'}} 
                    >
                    <HiX className="text-white w-6 h-6 absolute right-4 top-4" onClick={() => setToggle(false)} /> 
                    <ul className="">
                        {['Home', 'About','Work','Skills','Contact'].map((item) => (
                                <li className="m-4" key={item}>
                                    <a className="text-white font-bold text-6xl hover:text-primary-color" href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
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
