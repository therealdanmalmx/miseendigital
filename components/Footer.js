import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="app__footer bg-secondary-color px-10 py-40">
       <div className="app__footer-logo flex items-center justify-start ">
        <h1
          className="mr-4 text-3xl font-bold text-white"
        >
          Brand.
        </h1>
      </div>
      <p className="text-white my-4">©2021 Brand.</p>
      <div className="app__footer-social flex">
        <a href="" className="bg-white rounded-full mr-2 h-6 w-6 cursor-pointer flex justify-center items-center">
            <FaFacebookF className="text-secondary-color"/>
        </a>
        <a href="" className="bg-white rounded-full mr-2 marker:h-6 w-6 cursor-pointer flex justify-center items-center">
            <FaInstagram className="text-secondary-color"/>
        </a>
        <a href="" className="bg-white rounded-full mr-2 h-6 w-6 cursor-pointer flex justify-center items-center">
            <FaTwitter className="text-secondary-color"/>
        </a>
        <a href="" className="bg-white rounded-full mr-2 h-6 w-6 cursor-pointer flex justify-center items-center">
            <FaLinkedinIn className="text-secondary-color"/>
        </a>
      </div>
    </div>
  )
};

export default Footer;
