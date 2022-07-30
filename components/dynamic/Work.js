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
      <div className="relative">
        <div className="text-left flex items-center text-white hover:text-primary-color absolute ml-5 top-10">
          <HiOutlineChevronLeft className="w-6 h-6"/>
            <Link href="/works">
              <a
                className="text-lg text-white transition duration-300 ease-in-out hover:text-primary-color"
              >
                Works
              </a>
          </Link>
        </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
          />
        <div className="flex flex-col mx-5 text-white">
          <div className="text-5xl absolute top-48 font-bold">{title}</div>
          <div className="mt-3 absolute top-60 text-xl font-bold">{shortdescription}</div>
          <Link
            passHref
            href={projectLink}
          >
            <a className="absolute text-white top-80" target="_blank" noreferrer="true" >Project link</a>
          </Link>
        </div>
        <div className="m-16">{longdescription}</div>
      </div>
    );
  }
// }
