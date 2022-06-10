import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const company = [
  { title: "About us", url: "/about" },
  { title: "Portfolio", url: "/work" },
  { title: "Clients", url: "/clients" },
  { title: "Testimonials", url: "/testimonials" },
];

const Footer = () => {
  return (
    <div className="app__footer grid grid-cols-1 bg-secondary-color px-10 py-40 md:grid-cols-4">
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
          {[
            "UX / UI",
            "Mobile Development",
            "Web Development",
            "e-Commerce (incl. Shopify)",
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
        <p className="text-grey-color">whyhi@miseendigital.com</p>
        <button className="mt-7 transition duration-300 ease-in-out">
          Get in touch
        </button>
      </div>
      <div className="app__footer-col-1 mt-10 min-w-max sm:order-last md:order-first md:mt-0">
        <div className="app__footer-logo flex items-center justify-start ">
          <h1 className="mr-4 mb-4 text-3xl font-bold text-white">
            mise|en|digital.
          </h1>
        </div>
        <div className="app__footer-brand">
          <p className="text-white">
            ©{new Date().getFullYear()} mise|en|digital.
          </p>
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
