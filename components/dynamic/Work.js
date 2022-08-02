import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Image from "next/future/image";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Work({ works }) {
  const { title, shortdescription, longdescription, projectLink, imgUrl } = works;
  const router = useRouter();

  // if (router.isFallback) {
  //   return (
  //     <section>
  //       <h1>Loading...</h1>
  //     </section>
  //   );
  // } else {
    return (
      <>
        <div className="grid grid-cols-4 grid-rows-2 mx-10 absolute bottom-20">
          <div className="flex self-center pb-10 group transition duration-300 ease-in-out">
            <div>
              <HiOutlineChevronLeft className="w-6 h-6 text-white group-hover:text-primary-color"/>
            </div>
              <Link
                passHref
                href="/services"
              >
                <a
                  className="text-lg text-white transition duration-300 ease-in-out group-hover:text-primary-color"
                >
                  Services
                </a>
            </Link>
          </div>
          <div className="row-start-2 col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-2 md:w-full lg:w-full text-3xl md:text-5xl self-center text-center py-3 px-2 text-white bg-black font-bold">{title}</div>
          <div className="row-start-3 col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 mt-3 lg:w-96 text-white text-base md:text-2xl lg:text-xl font-semibold">
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
        <div className="app__contact w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-28 px-8">
            <div className="intro-company">
                <p className="text-left font-normal leading-10 text-xl pb-2">Customer Experience Design</p>
                <h1 className="app__contact-head-text mb-10 flex-col text-left font-bold leading-tight md:leading-snug text-3xl md:text-5xl">
                    About the Project
                </h1>
                <button className="text-black duration-300 ease-in-out">
                  <Link
                    passHref
                    href={projectLink}
                  >
                    <a className="text-white" target="_blank" noreferrer="true" >Visit Project</a>
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
// }
