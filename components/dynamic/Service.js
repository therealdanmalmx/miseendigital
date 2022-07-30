import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import { images } from "../../utils";
import Image from 'next/future/image'
import TypeOfServices from './TypeOfServices'

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ about }) {
  const { title, description, imgUrl, typeofservice } = about;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-4 grid-rows-2 mx-10 absolute top-2/4 sm:top-1/3">
          <div className="self-center pb-8">
              <HiOutlineChevronLeft className="w-6 h-6"/>
              <Link
                passHref
                href="/services"
              >
                <a
                  className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color"
                >
                  Services
                </a>
            </Link>
          </div>
          <div className="row-start-2 col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1 md:w-48 lg:w-56 text-2xl self-center text-center py-3 px-2 text-white bg-black font-bold">{title}</div>
          <div className="row-start-3 col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 mt-3 lg:w-96 text-black text-base md:text-2xl lg:text-xl font-semibold">{description}</div>
        </div>
          <Image
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
            width="5000"
            height="5000"
          />
        <div className="flex flex-col mx-10 ">
          <div className="text-3xl md:text-5xl py-2 px-4 text-white bg-black absolute bottom-40 font-bold">{title}</div>
          <div className="mt-3 absolute bottom-24 w-1/3 text-black text-xl font-semibold">{description}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-12">
          {typeofservice.map((service) => (
            <TypeOfServices
              key={service._key}
              service={service}
            />
          ))}
        </div>
      </div>
        );
      }
    }
