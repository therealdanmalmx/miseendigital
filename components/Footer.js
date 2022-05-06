import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="app__footer grid grid-cols-3 bg-secondary-color px-10 py-40 md:grid-cols-4">
      <div className="app__footer-col-2">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Company</h1>
        <ul>
          {["About us", "Portfolio", "Clients", "Testimonials"].map((item) => (
            <li className="pb-3" key={item}>
              <a className="cursor-pointer text-base font-normal hover:text-primary-color">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-3">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Services</h1>
        <ul>
          {[
            "Web Design",
            "Mobile Development",
            "Web Development",
            "e-Commerce",
            "Marketing Digital",
            "Branding",
          ].map((item) => (
            <li className="pb-3" key={item}>
              <a className="cursor-pointer text-base font-normal hover:text-primary-color">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-4">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Contacts</h1>
        <p className="text-grey-color">Tel. +351 912 658 932</p>
        <p className="text-grey-color">geral@domain.com</p>
        <button className="mt-7 transition duration-300 ease-in-out">
          Get in touch
        </button>
      </div>
      <div className="app__footer-col-1 mt-10 min-w-max sm:order-last md:order-first md:mt-0">
        <div className="app__footer-logo flex items-center justify-start ">
          <h1 className="mr-4 mb-4 text-3xl font-bold text-white">Brand.</h1>
        </div>
        <div className="app__footer-brand">
          <p className="text-white">©2021 Brand.</p>
        </div>
        <div className="mt-2 mb-10">
          <a className="mr-4 text-xs" href="">
            Terms and conditions
          </a>
          <a className="text-xs" href="">
            Privacy Policy
          </a>
        </div>
        <div className="app__footer-social flex">
          <a
            href=""
            className="mr-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <FaFacebookF className="text-secondary-color" />
          </a>
          <a
            href=""
            className="mr-2 flex w-6 cursor-pointer items-center justify-center rounded-full bg-white marker:h-6"
          >
            <FaInstagram className="text-secondary-color" />
          </a>
          <a
            href=""
            className="mr-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <FaTwitter className="text-secondary-color" />
          </a>
          <a
            href=""
            className="mr-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <FaLinkedinIn className="text-secondary-color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
