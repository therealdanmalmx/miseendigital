import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import { images } from "../../utils";
import Image from "next/future/image";
import TypeOfServices from "./TypeOfServices";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ services }) {
  console.log({ services });
  const { title, description, imgUrl, typeofservice } = services;
  const router = useRouter();

  if (router.isFallback && !services) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <>
        <div className="absolute bottom-20 mx-10 grid grid-cols-4 grid-rows-2">
          <div className="flex self-center pb-10">
            <div>
              <HiOutlineChevronLeft className="h-6 w-6" />
            </div>
            <Link passHref href="/services">
              <a className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color">
                Services
              </a>
            </Link>
          </div>
          <div className="col-span-3 row-start-2 self-center bg-black py-3 px-2 text-center text-3xl font-bold text-white sm:col-span-2 md:col-span-2 md:w-full md:text-5xl lg:col-span-2 lg:w-full">
            {title === "UX UI" ? "UX/UI" : title}
          </div>
          <div className="col-span-4 row-start-3 mt-3 text-base font-semibold text-black sm:col-span-3 md:col-span-3 md:text-2xl lg:col-span-2 lg:w-96 lg:text-xl">
            {description}
          </div>
        </div>
        <Image
          className="h-[calc(100vh_-_113px)] w-full object-cover"
          src={`${urlFor(imgUrl)}`}
          alt={urlFor(imgUrl)}
          width="5000"
          height="5000"
        />
        <div className="grid grid-cols-1 py-12 lg:grid-cols-3">
          {!typeofservice && (
            <div className="px-12 font-bold">No additional services </div>
          )}
          {typeofservice &&
            typeofservice.map((service) => (
              <TypeOfServices key={service._key} service={service} />
            ))}
        </div>
      </>
    );
  }
}
