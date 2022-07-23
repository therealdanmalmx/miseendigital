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
      <div className="relative mb-100">
        <div className="text-left z-10 flex items-center mb-10 hover:text-primary-color">
          <HiOutlineChevronLeft className="w-6 h-6"/>
            <Link href="/works">
              <a
                className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color"
              >
                Back to works
              </a>
          </Link>
        </div>
          <img
            className="absolute top-0 mx-auto h-screen w-full"
            src={urlFor(imgUrl)}
            alt={urlFor(imgUrl)}
          />
        <div className="flex flex-col mx-20 text-white">
          <div className="text-5xl absolute top-48 font-bold">{title}</div>
          <div className="mt-3 absolute top-60 text-xl font-bold">{description}</div>
          <Link
            passHref
            href={projectLink}
            className="mt-3 text-center text-xl font-bold absolute top-60 z-10"
          >
            <a target="_blank" noreferrer >See the project here</a>
            {/* See the project <a href={projectLink}>here</a> */}
          </Link>
        </div>
        </div>
    );
  }
}
