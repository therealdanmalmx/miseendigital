import Image from 'next/image';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from "./../utils";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar w-full flex justify-between items-center px-8 py-4 bg-slate-50 backdrop-blur-sm border-slate-100 fixed z-10">
        <div className="app__navbar-logo flex justify-start items-center ">
            <Image width={90} height={90} src={images.logo} alt="logo"/>
        </div>
        <ul className="app__navbar-links flex-1 flex justify-center items-center">
            {['home', 'about','work','skills','contact'].map((item) => (
                <li className="text-center mx-4 cursor-pointer flex-col" key={`link-${item}`}>
                    <div className="w-1 h-1 bg-transparent rounded-full mb-1" />
                    <a className="text-gray-600 flex-col uppercase font-medium ease-in-out duration-300 hover:text-primary-color" href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className="app__navbar-menu w-9 h-9 rounded-full relative flex justify-center items-center bg-primary-color sm:hidden">
            <HiMenuAlt4 className="text-white w-6 h-6" onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div className="fixed top-0 bottom-0 right-0 z-10 p-4 w-3/6 bg-white h-screen sm:hidden"
                    whileInView={{ x: [300, 0]}}
                    transition={{ duration: 0.85, ease: 'easeOut'}} 
                >
                   <HiX className="text-black w-6 h-6 absolute right-4" onClick={() => setToggle(false)} /> 
                   <ul>
                    {['home', 'about','work','skills','contact'].map((item) => (
                            <li className="m-4" key={item}>
                                <a className="text-primary-color uppercase font-bold" href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar