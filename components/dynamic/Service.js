import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Footer from "../base/Footer";

import { FaChevronCircleLeft } from "react-icons/fa";

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
      <>
        <div className="flex flex-col items-center justify-center">
          <Link href="/services">
            <button
              type="button"
              className="mt-40 mb-10 bg-primary-color text-lg text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              Back to services
            </button>
          </Link>
          <div className=" text-center text-5xl font-bold">{title}</div>
          <div className="mt-3 text-center text-xl font-bold">
            {description}
          </div>
          <img
            className="relative mx-auto mb-10 mt-5 h-[400px] w-full object-cover transition duration-300 ease-in-out md:h-[600px] md:w-[1000px]"
            src={urlFor(imgUrl)}
            alt={urlFor(imgUrl)}
          />
        </div>
      </>
    );
  }
}
