import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Image from "next/future/image";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Work({ works }) {
  const { title, shortdescription, longdescription, projectLink, imgUrl } =
    works;
  const router = useRouter();

  if (router.isFallback && !works) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <>
        <div className="absolute bottom-20 mx-10 grid grid-cols-4 grid-rows-2">
          <div className="group flex self-center pb-10 transition duration-300 ease-in-out">
            <div>
              <HiOutlineChevronLeft className="h-6 w-6 text-white group-hover:text-primary-color" />
            </div>
            <Link passHref href="/works">
              <a className="text-lg text-white transition duration-300 ease-in-out group-hover:text-primary-color">
                WORKS
              </a>
            </Link>
          </div>
          <div className="col-span-3 row-start-2 self-center bg-black py-3 px-2 text-center text-3xl font-bold text-white sm:col-span-2 md:col-span-2 md:w-full md:text-5xl lg:col-span-2 lg:w-full">
            {title}
          </div>
          <div className="col-span-4 row-start-3 mt-3 text-base font-semibold text-white sm:col-span-3 md:col-span-3 md:text-2xl lg:col-span-2 lg:w-96 lg:text-xl">
            {shortdescription}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className="h-[calc(100vh_-_113px)] w-full object-cover"
          src={`${urlFor(imgUrl)}`}
          alt={urlFor(imgUrl)}
          width="5000"
          height="5000"
        />
        <div className="app__contact grid w-full grid-cols-1 py-28 px-8 md:grid-cols-1 lg:grid-cols-2">
          <div className="intro-company">
            <p className="pb-2 text-left text-xl font-normal leading-10">
              Customer Experience Design
            </p>
            <h1 className="app__contact-head-text mb-10 flex-col text-left text-3xl font-bold leading-tight md:text-5xl md:leading-snug">
              About the Project
            </h1>
            <button className="text-black duration-300 ease-in-out">
              <Link passHref href={projectLink}>
                <a className="text-white" target="_blank" noreferrer="true">
                  Visit Project
                </a>
              </Link>
            </button>
          </div>
          <div className="text-company pt-10 md:w-full lg:w-10/12">
            {longdescription}
          </div>
        </div>
      </>
    );
  }
}
