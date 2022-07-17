import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Image from "next/image";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Work({ works }) {
  const { title, description, projectLink, imgUrl } = works;
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
            <Link href="/works">
              <a
                className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color"
              >
                Back to works
              </a>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="text-5xl font-bold">{title}</div>
          <div className="mt-3 text-xl font-bold">{description}</div>
          <Link
            href={`${projectLink}`}
            className="mt-3 text-center text-xl font-bold"
          >
            <a>Project link: {projectLink}</a>
          </Link>
          <img
            className=" relative mx-auto mt-5 h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
            src={urlFor(imgUrl)}
            alt={urlFor(imgUrl)}
          />
        </div>
        </div>
    );
  }
}
