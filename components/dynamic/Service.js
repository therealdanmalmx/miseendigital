import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Footer from "../base/Footer";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ services }) {
  const { title, description, imgUrl } = services;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <div className="w-full px-20 pt-40 mx-auto">
        <div className="text-left flex items-center mb-10 hover:text-primary-color">
          <HiOutlineChevronLeft className="w-6 h-6"/>
            <Link href="/services">
              <a
                className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color"
              >
                Back to services
              </a>
          </Link>
        </div>
        <div className="ring-offset-8 flex flex-col justify-center">
          <div className="text-left text-5xl font-bold">{title}</div>
          <div className="mt-3 text-left text-xl font-normal">
            {description}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="relative mb-10 mt-5 h-[400px] w-full object-cover transition duration-300 ease-in-out md:h-[800px] md:w-[1200px]"
            src={urlFor(imgUrl)}
            alt={urlFor(imgUrl)}
          />
        </div>
      </div>
    );
  }
}
