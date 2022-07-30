import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import { images } from "../../utils";
import Image from 'next/image'
import TypeOfServices from './TypeOfServices'

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ about }) {
  console.log({about});
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
        <div className="flex items-center text-black hover:text-primary-color absolute bottom-60 mx-10">
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
          />
        <div className="flex flex-col mx-10 ">
          <div className="text-3xl md:text-5xl py-2 px-4 text-white bg-black absolute bottom-40 font-bold">{title}</div>
          <div className="mt-3 absolute bottom-24 w-1/3 text-black text-xl font-semibold">{description}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-11">
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
