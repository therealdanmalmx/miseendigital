import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { images } from "../../utils";
import Image from 'next/image'

const company = [
  { title: "About us", url: "/about" },
  { title: "Portfolio", url: "/work" },
  { title: "Clients", url: "/clients" },
  { title: "Testimonials", url: "/testimonials" },
];

const services = [
  { title: "UX/UI", url: "/services/web-design"},
  { title: "Web Development", url: "/services/web-development" },
  { title: "e-Commerce (incl. Shopify)", url: "/services/e-commerce" },
];

const Footer = () => {
  return (
    <div className="app__footer max-w-full grid grid-cols-1 bg-secondary-color px-10 py-40 md:grid-cols-4">
      <div className="app__footer-col-2 xxs:mb-6 xs:mb-6 sm:mb-6">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Company</h1>
        <ul>
          {company.map((item, index) => (
            <li className="pb-3" key={item.title + index}>
              <Link href={item.url}>
                <a className="cursor-pointer text-base font-normal hover:text-primary-color">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-3 xxs:mb-6 xs:mb-6 sm:mb-6">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Services</h1>
        <ul>
          {services.map((item) => (
            <li className="pb-3" key={item}>
              <Link href={item.url}>
                <a className="cursor-pointer text-base font-normal hover:text-primary-color">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-4">
        <h1 className="mr-4 mb-4 text-base font-bold text-white">Contacts</h1>
        <p className="text-grey-color">Tel. +351 912 658 932</p>
        <p className="text-grey-color">hello@miseendigital.com</p>
        <button className="bg-primary-color mt-7 transition duration-300 ease-in-out hover:bg-white hover:text-black">
          Get in touch
        </button>
      </div>
      <div className="app__footer-col-1 mt-10 min-w-max sm:order-last md:order-first md:mt-0">
        <div className="app__footer-logo flex items-center justify-start pb-2">
            <Image
              src={images.logoWhite}
              width={250}
              height={31}
              alt={images.logoWhite}
            />
        </div>
        <div className="app__footer-brand">
          <p className="text-white">
            ©{new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="mt-2 mb-10">
          <a className="text-xs" href="/privacy_policy">
            Privacy Policy
          </a>
        </div>
        <div className="app__footer-social flex">
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
      </div>
    </div>
  );
};

export default Footer;
