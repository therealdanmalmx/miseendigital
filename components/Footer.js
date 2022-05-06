import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link'

const company = [
  { title:'About us', url:'/about' },
  { title:'Portfolio', url:'/work' },
  { title:'Clients', url:'/clients' },
  { title:'Testimonials', url:'/testimonials' }
];

const Footer = () => {
  return (
    <div className="app__footer bg-secondary-color px-10 py-40 grid grid-cols-1 md:grid-cols-4">
      <div className="app__footer-col-2 xxs:mb-6 xs:mb-6 sm:mb-6">
          <h1
            className="mr-4 mb-4 text-base font-bold text-white"
          >
            Company
          </h1>
        <ul>
          {company.map((item, index) =>(
            <li className="pb-3" key={item.title + index}>
              <Link href={item.url}>
                <a
                  className="text-base font-normal cursor-pointer hover:text-primary-color"
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-3 xxs:mb-6 xs:mb-6 sm:mb-6">
          <h1
            className="mr-4 mb-4 text-base font-bold text-white"
          >
            Services
          </h1>
        <ul>
          {[
            "Web Design",
            "Mobile Development",
            "Web Development",
            "e-Commerce",
            "Marketing Digital",
            "Branding"
          ].map((item) =>(
            <li className="pb-3" key={item}>
                <a
                  className="text-base font-normal cursor-pointer hover:text-primary-color"
                >
                  {item}
                </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__footer-col-4">
          <h1
            className="mr-4 mb-4 text-base font-bold text-white"
          >
            Contacts
          </h1>
        <p className="text-grey-color">Tel. +351 912 658 932</p>
        <p className="text-grey-color">geral@domain.com</p>
        <button className="mt-7">Get in touch</button>
      </div>
      <div className="app__footer-col-1 min-w-max sm:order-last mt-10 md:mt-0 md:order-first">
        <div className="app__footer-logo flex items-center justify-start ">
          <h1
            className="mr-4 mb-4 text-3xl font-bold text-white"
          >
            Brand.
          </h1>
        </div>
        <div className="app__footer-brand">
          <p className="text-white">©2021 Brand.</p>
        </div>
        <div className="mt-2 mb-10">
          <a className="mr-4 text-xs" href="">Terms and conditions</a>
          <a className="text-xs" href="">Privacy Policy</a>
        </div>
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
    </div>
  )
};

export default Footer;
